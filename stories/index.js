import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import TransactionHeader from '../src/components/transaction/TransactionHeader';
import TransactionSingle from '../src/components/transaction/TransactionSingle';
import TransactionTable from '../src/components/transaction/TransactionTable';

import StateGen from '../src/static-state-generator';

const state = StateGen();

storiesOf('Welcome', module)
	.add('to Storybook', () => (
		<Welcome showApp={linkTo('Button')}/>
	));

storiesOf('Button', module)
	.add('with text', () => (
		<Button onClick={action('clicked')}>Hello Button</Button>
	))
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	));

storiesOf('TransactionHeader', module)
	.add('with some input', ()=> (
		<TransactionHeader title='All Cash & Credit Accounts' totalCash='500' totalDebt='200'/>
	));

storiesOf('TransactionSingle', module)
	.add('with state', ()=> (
		<TransactionSingle date={state.transactions[0].date} merchant={state.merchants[0].name} category={state.categories[0].name} amount={state.transactions[0].amount} id={state.transactions[0].id}/>
	));

storiesOf('TransactionTable', module)
	.add('with state', ()=> (
		<TransactionTable transactions={state.transactions}/>
	))

console.log(state);