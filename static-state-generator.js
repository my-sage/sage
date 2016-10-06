import faker from 'faker';
import _ from 'lodash';

const randomDateGen = (monthsAway) => {
    let currentDate = new Date(), randomNum = _.random(-monthsAway, monthsAway);
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + randomNum, _.random(1, 27)).valueOf();
};

const randomAmount = () => _.round(_.random(-1000, 2500, true), 2);
const randomAmountSpending = () => _.round(_.random(-100,-10, true),2);

const genBudget = (n) => {
  return {
    id: _.random(1,n),
    name: faker.hacker.adjective(),
    targetAmount: randomAmount(),
    currentAmount: randomAmount(), 
    type: _.sample(['Expense','Income']),
    endDate: randomDateGen(3), 
    categoryId:_.random(1, n) 
  }
};

const genTransaction = (n) => {
  return {
    id: _.random(1,n),
    amount: randomAmountSpending(), 
    date: randomDateGen(2), 
    accountId: _.random(1,n),
    categoryId: _.random(1,n),
    merchantId: _.random(1,n),
  }
};

const genAccount = (n) => {
  return {
    id: _.random(1,n),
    name: faker.finance.accountName(),
    type: _.sample(['Checking', 'Savings', 'Credit']),
    balance: randomAmount(),
    holder: faker.fake("{{name.firstName}}, {{name.lastName}}"),
  }
};

const genCategories = (n) => {
  return {
    id: _.random(1,n),
    name: faker.commerce.department(),
    description: faker.company.bsAdjective()
  }
};

const genMerchants = (n) => {
  return {
    id: _.random(1,n),
    name: faker.company.companyName(),
    categoryId: _.random(1,n)
  }
};

const genUser = (n) => {
  return {
    userName: faker.internet.userName(),
    password: faker.internet.password(),
    avatar: faker.internet.avatar()
  }
}

const repeat = (func, n) => {
  let result = [];
  for(let i=0; i<n; i++){
    result.push(func(n));
  }
  return result;
};

export default function stateGen() {
  return {transactions: repeat(genTransaction, 100), merchants: repeat(genMerchants, 20), categories: repeat(genCategories, 10), budgets: repeat(genBudget, 10), accounts: repeat(genAccount, 5), activeBudgets: repeat(genBudget, 5)}
}
