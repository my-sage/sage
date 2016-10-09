import React from 'react';
import TextInput from './TextInput';

const TransactionEditForm = ({transaction,onChange,loading,errors}) => {
	console.log('getting the transaction detail',transaction)
	return (
		<form>
			<h3>Transaction Form</h3>
			<TextInput
				name="merchantId"
				label="MerchantId"
				value={transaction.merchantId}
				onChange={onChange}
				error={errors.title} />

			<TextInput
				name="categoryId"
				label="CategoryId"
				value={transaction.categoryId}
				onChange={onChange}
				error={errors.title} />


			<TextInput
				name="amount"
				label="Amount"
				value={transaction.amount}
				onChange={onChange}
				error={errors.title} />				

		</form>
	)
}

TransactionEditForm.propTypes = {
	transaction: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired
}

export default TransactionEditForm;