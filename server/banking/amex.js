const Banking = require('banking');
const { pick, curry, compose, prop, map, slice, append, __ } = require('ramda');
const { promisify } = require('bluebird');
const handleBankError = require('./bankError');
const db = require('../db');
const Transaction = db.model('transaction');
const Account = db.model('account');
const moment = require('moment');
const fs = require('fs');
const stackTrace = (x) => { console.log(x); return x };

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
  user,
  password,
  accId,
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
  })
  , maybeMap = (fn, functor) => {
    if(Array.isArray(functor)) {
      return functor.map(fn);
    } else {
      return [fn(functor)];
    }
  };
  return {
    transactions: maybeMap(parseTransaction, rawTransactions),
    balance: getBal(res),
    startDate,
    endDate,
    accountId
  }
});

const postRes = (res) => {
  const updatingAccountBalance = Account.update({balance: res.balance}, {
    where: {
      id: res.accountId
    }
  });
  return Promise.all(updatingAccountBalance, Transaction.bulkCreateWithMerchant(res.transactions));
};

const parseAndPostRes = (start, end, accountId) => 
  compose(postRes, parseBankRes(start, end, accountId));

let getAmex = (user, accId, password, start, end, accountInstance) => {
  const amexInstance = amexBank(user, accId, password);
  amexInstance.getStatement = promisify(amexInstance.getStatement.bind(amexInstance));
  return amexInstance
    .getStatement({start, end})
    .then(res => {
      fs.writeFileSync('./amexData.js', JSON.stringify(res), 'utf8')
      return parseAndPostRes(start, end, accountInstance.id)(res)
     })
    .catch(console.log)
}

module.exports = getAmex;
