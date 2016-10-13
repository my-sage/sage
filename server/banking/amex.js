const Banking = require('banking');
const { pick, curry, compose, prop, map, slice, append, __ } = require('ramda');
const { amex } = require('./credentials');
const { password, user, accId } = amex;
const { promisify } = require('bluebird');
const handleBankError = require('./bankError');
const db = require('../db');
const Transaction = db.model('transaction');
const Account = db.model('account');
const moment = require('moment');

//constants
const name = 'American Express Centurion Card';

const parseAmexDate = (amexDate) => {
  return moment(slice(0, 8, amexDate)).valueOf();
}

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


const parseBankRes = curry((startDate, endDate, accountId, res) => {
  const getUsefulData = compose(prop('CCSTMTRS'), prop('CCSTMTTRNRS'), prop('CREDITCARDMSGSRSV1'), prop('OFX'), prop('body'))
  , getTransacs = compose(prop('STMTTRN'), prop('BANKTRANLIST'), getUsefulData)
  , getType = prop('TRNTYPE')
  , getAmount = prop('TRNAMT')
  , getName = prop('NAME')
  , getId = prop('FITID')
  , getDate = compose(parseAmexDate, prop('DTPOSTED'))
  , getBal = compose(prop('BALAMT'), prop('LEDGERBAL'), getUsefulData)
  , rawTransactions = getTransacs(res)
  , parseTransaction = (raw) => ({
      transaction: {
        date: getDate(raw),
        fitid: getId(raw),
        accountId,
        amount: +getAmount(raw),
        type: getType(raw),
      },
      merchant: {
        name: getName(raw)
      }
    });
  return {
    transactions: map(parseTransaction, rawTransactions),
    balance: getBal(res),
    startDate,
    endDate
  }
});

const postRes = (res) => {
  console.log(res);
  return Transaction.bulkCreateWithMerchant(res.transactions)
};

const parseAndPostRes = (start, end, accountId) => 
  compose(postRes, parseBankRes(start, end, accountId));

let getAmex = (user, accId, password, start, end, accountInstance) => {
  const amexInstance = amexBank(user, accId, password);
  amexInstance.getStatement = promisify(amexInstance.getStatement.bind(amexInstance));
  console.log('LALA');
  return amexInstance
    .getStatement({start, end})
        .then(res => parseAndPostRes(start, end, accountInstance.id)(res))
        .catch(console.log)
}

module.exports = getAmex;
