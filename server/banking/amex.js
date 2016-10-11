const Banking = require('banking');
const { pick, curry, compose, prop, map } = require('ramda');
const { amex } = require('./credentials');
const { password, user, accId } = amex;
const { promisify } = require('bluebird');
const handleBankError = require('./bankError');
const db = require('../db');
const Transaction = db.model('transaction');

const amexBank = (user, accId, password) => Banking({
  fid: 3101,
  fidOrg: 'AMEX',
  url: 'https://online.americanexpress.com/myca/ofxdl/desktop/desktopDownload.do?request_type=nl_ofxdownload',
  bankId: null,
  user: user,
  password: password,
  accId: accId,
  accType: 'CREDITCARD',
  ofxVer: 103,
  app: 'QWIN',
  appVer: '1700'
});

amexBank.getStatement = promisify(amexBank.getStatement.bind(amexBank));

const parseBankRes = curry((startDate, endDate, res) => {
  const getUsefulData = compose(prop('CCSTMTRS'), prop('CCSTMTTRNRS'), prop('CREDITCARDMSGSRSV1'), prop('OFX'), prop('body')),
    getTransacs = compose(prop('STMTTRN'), prop('BANKTRANLIST'), getUsefulData),
    getType = prop('TRNTYPE'),
    getAmount = prop('TRNAMT'),
    getName = prop('NAME'),
    getId = prop('FITID'),
    getDate = prop('DTPOSTED'),
    getBal = compose(prop('BALAMT'), prop('LEDGERBAL'), getUsefulData),
    rawTransactions = getTransacs(res),
    parseTransaction = (raw) => ({
      type: getType(raw),
      amount: getAmount(raw),
      merchant: getName(raw),
      fitid: getId(raw),
      date: getDate(raw),
    });
  return {
    transactions: map(parseTransaction, rawTransactions),
    balance: getBal(res),
    startDate,
    endDate
  }
});

// let getAmex = (user, accId, password, start, end) => amexBank(user, accId, password).getStatement({
  // start: start,
  // end: end
// }, (err, res) => {
  // if (err) log(c.bgRed(err));
  // fs.writeFileSync('./amex.js', JSON.stringify(parseBankRes(res, start, end)), 'utf8')
// });

const postRes = (res) => {
  Transaction.bulkCreate(res.transactions)
}

const parseAndPostRes = (start, end) => compose(postRes, parseBankRes(start, end));

let getAmex = (user, accId, password, start, end) => 
  amexBank(user, accId, password)
    .getStatement({start, end})
      .then(res => parseAndPostRes(start, end))
      .catch(handleBankError)

getAmex(user, accId, password, start, end)

module.exports = {
  getAmex
}
