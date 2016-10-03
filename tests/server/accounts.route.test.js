const expect = require('chai').expect;

const db = require('../../server/db');

const supertest = require('supertest');

describe('Accounts API Routes', () => {
	let app, Account, agent;

	const account1 = {name: 'American Express Centurion Card', type: 'Credit', balance: 5000.00, holder: 'William Gates'};

	const account2 = {name: 'Citibank Citigold Checking', type: 'Checking', balance: 100000.00, holder: 'Melinda Gates'};

	const account3 = {name: 'Chase Premier Platinum Checking', type: 'Checking', balance: 500000.00, holder: 'Mark Zuckerberg'};

	beforeEach('Sync DB', () => db.sync({force: true}));

	beforeEach('Create App', () => {
		app = require('../../server/app')(db);
		Account = db.model('account');
	});

	beforeEach('Create some accounts', done => {
		Account.create(account1)
			.then(()=>Account.create(account2))
			.then(()=>done())
			.catch(done);
	});

	beforeEach('Create a guest agent', () => {
		agent = supertest.agent(app);
	});

	describe('Get All Accounts', () => {
		it('returns all accounts', done => {
			agent.get('/api/accounts')
				.expect(200)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body.length).to.equal(2);
					done();
				});
		});
	});

	describe('Post a New Account', () => {
		it('posts a new account', done => {
			agent.post('/api/accounts').send(account3)
				.expect(201)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body.name).to.equal(account3.name);
					expect(response.body.holder).to.equal(account3.holder);
					expect(response.body.balance).to.equal(account3.balance);
					done();
				});
		});
	});

	describe('Update an Existing Account', () => {
		it('updates an existing account', done => {
			agent.put('/api/accounts/1').send({holder: 'Rory Gates'})
				.expect(200)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body.holder).to.equal('Rory Gates');
					done();
				});
		});
	});

	describe('Delete an Existing Account', () => {
		it('deletes an existing account', done => {
			agent.delete('/api/accounts/1')
				.expect(202)
				.end((err, response) => {
					if (err) return done(err);
					expect(response.body).to.equal(1);
					done();
				});
		});
	});
});