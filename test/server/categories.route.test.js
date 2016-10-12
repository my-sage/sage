const expect = require('chai').expect;

const db = require('../../server/db');

const supertest = require('supertest');

describe('Categories API Routes', () => {
	let app, Category, Transaction, Account, Merchant, agent;

	const account1 = {name: 'American Express Centurion Card', type: 'Credit', balance: 5000.00, holder: 'William Gates'};

	const category1 = {name: 'Shopping', description: 'E-Commerce'};

	const category2 = {name: 'Food', description: 'Sustenance'};

	const category3 = {name: 'Movies', description: 'Films'};

	const merchant1 = {name: 'Amazon', categoryId: 1};

	const merchant2 = {name: 'Open Market', categoryId: 2};

	const transaction1 = {amount: -100.00, fitid: '1234', date: Date.now(), note: 'Supplies', accountId: 1, categoryId: 1, merchantId: 1};

	const transaction2 = {amount: -40, fitid: '92834', date: Date.now() - 1000, note: 'Other Supplies', accountId: 1, categoryId: 1, merchantId: 1};

	const transaction3 = {amount: -10, fitid: '98341', date: Date.now() - 2000, note: 'Lunch', accountId: 1, categoryId: 2, merchantId: 2};

	beforeEach('Sync DB', () => db.sync({force: true}));

	beforeEach('Create App', () => {
		app = require('../../server/app')(db);
		Category = db.model('category');
		Transaction = db.model('transaction');
		Merchant = db.model('merchant');
		Account = db.model('account');
	});

	beforeEach('Create some db entries', done => {
		Account.create(account1)
			.then(()=>Category.create(category1))
			.then(()=>Category.create(category2))
			.then(()=>Merchant.create(merchant1))
			.then(()=>Merchant.create(merchant2))
			.then(()=>Transaction.create(transaction1))
			.then(()=>Transaction.create(transaction2))
			.then(()=>Transaction.create(transaction3))
			.then(()=>done())
			.catch(done);
	});

	beforeEach('Create a guest agent', () => {
		agent = supertest.agent(app);
	});

	describe('Get All Categories', () => {
		it('returns all categories', done => {
			agent.get('/api/categories')
				.expect(200)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body.length).to.equal(2);
					done();
				});
		});
	});

	describe('Get a Category by ID', () => {
		it('returns a category and transactions in that category', done => {
			agent.get('/api/categories/1')
				.expect(200)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body[0].id).to.equal(1);
					expect(response.body[0].transactions.length).to.equal(2);
					done();
				});
		});
	});

	describe('Post a New Category', () => {
		it('posts a new category', done => {
			agent.post('/api/categories').send(category3)
				.expect(201)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body.name).to.equal(category3.name);
					expect(response.body.description).to.equal(category3.description);
					done();
				});
		});
	});


});
