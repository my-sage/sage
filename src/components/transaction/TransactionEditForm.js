import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';


const TransactionEditForm = ({transaction,categories,merchants,onChange,loading,errors}) => {
	return (
		<form style={{textAlign: "left"}}>

			<SelectInput
				name="merchantId"
				label="Merchant"
				value={transaction.merchantId}
				defaultOption="Select the correct Merchant"
				options={merchants}
				onChange={onChange} error={errors.merchantId}/>

			<SelectInput
				name="categoryId"
				label="Category"
				value={transaction.categoryId}
				defaultOption="Select the correct Category"
				options={categories}
				onChange={onChange} error={errors.categoryId}/>

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
 	categories: React.PropTypes.array.isRequired,
  merchants: React.PropTypes.array.isRequired,
	onChange: React.PropTypes.func.isRequired
}

export default TransactionEditForm;