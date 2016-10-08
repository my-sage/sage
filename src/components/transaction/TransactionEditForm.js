import React from 'react';
import TextInput from './TextInput';

const TransactionEditForm = ({transaction,onChange,loading,error}) => {
	return (
		<form>
			<h3>Transaction Form</h3>
		</form>
	)
}

TransactionEditForm.propTypes = {
	transaction: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired
}

export default TransactionEditForm;