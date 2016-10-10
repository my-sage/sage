'use strict';

import React, { PropTypes } from 'react';

const DropdownInput = ({name, label, onChange, defaultOption, value, error, options}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<select style={{width: 300}}
					name={name}
					value={value}
					onChange={onChange}
					className="form-control">
					<option value="">{defaultOption}</option>
					{options.map(option => {
						return <option key={option.value} value={option.value}>{option.text}</option>;
						})
					}
				</select>
				{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	);
};

DropdownInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultOption: PropTypes.string,
	value: PropTypes.number,
	error: PropTypes.number,
	options: PropTypes.arrayOf(PropTypes.object)
};

export default DropdownInput;