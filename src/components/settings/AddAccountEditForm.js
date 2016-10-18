import React from 'react';
import TextInput from '../shared/PolyInput';
import SelectInput from '../shared/DropdownInput';

export default ({account,errors, onChange}) => {
	return (
		<form style={{textAlign: "left"}}>
			<TextInput
				name="bankId"
				label="Routing Number"
				value={account.routeNum}
				type="text"
				onChange={onChange}
				error={errors.title} />

			<TextInput
				name="accId"
				label="Account Number"
				type="text"
				value={account.accountNum}
				onChange={onChange}
				error={errors.title} />

				<TextInput
				name="user"
				label="User Name"
				type="text"
				value={account.userName}
				onChange={onChange}
				error={errors.title} />	

				<TextInput
				name="password"
				label="Password"
				type="password"
				value={account.password}
				onChange={onChange}
				error={errors.title} />	
			</form>				
	);
}
