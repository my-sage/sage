import React from 'react';
import TextInput from '../share/PolyInput';
import SelectInput from '../share/DropdownInput';

const AddAccountEditForm = ({account}) => {
	return (
			<PolyInput
				name="routeNumber"
				label="Routing Number"
				value={account.routeNum}
				type="number"
				onChange={onChange}
				error={errors.title} />

			<PolyInput
				name="accountNum"
				label="Account Number"
				type="number"
				value={account.accountNum}
				onChange={onChange}
				error={errors.title} />

				<PolyInput
				name="userName"
				label="User Name"
				type="text"
				value={account.userName}
				onChange={onChange}
				error={errors.title} />	

				<PolyInput
				name="password"
				label="Password"
				type="password"
				value={account.password}
				onChange={onChange}
				error={errors.title} />					
	);
}