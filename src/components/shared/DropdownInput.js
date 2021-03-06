import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
	
	const labelVerify = (label) => {
		if(label) return <label htmlFor={name}>{label}</label>
	}

	return (
		<div className="form-group">
			{labelVerify(label)}
			<div className="field">
				<select style={{width: "100%"}}
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

SelectInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultOption: PropTypes.string,
	error: PropTypes.number,
	options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;