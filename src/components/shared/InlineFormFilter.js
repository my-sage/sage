'use strict';

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Form, Button, FormGroup, ControlLabel} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import SelectInput from '../shared/DropdownInput';

const InlineFormFilter = ({instance, categories,merchants,onChange,onChangeStart,onChangeEnd,filter,errors}) => {

	return (

		<Form inline>
				<ControlLabel>Merchant</ControlLabel>
				<SelectInput
					name="merchantId"
					value={instance.merchantId}
					defaultOption="Pick Merchant"
					options={merchants}
					onChange={onChange}
					error={errors.merchantId}/>

				<ControlLabel>Category</ControlLabel>
				<SelectInput
					name="categoryId"
					value={instance.categoryId}
					defaultOption="Pick Category"
					options={categories}
					onChange={onChange} 
					error={errors.categoryId}/>

				<ControlLabel>Start Date</ControlLabel>
				<DatePicker 
					name="startDate"
					value={instance.startDate}
					onChange={onChangeStart}
					error={errors.startDate} />


				<ControlLabel>End Date</ControlLabel>
				<DatePicker 
					name="endDate"
					value={instance.endDate}
					onChange={onChangeEnd}
					error={errors.endDate} />		

			<Button type="submit" onClick={filter}>Filter</Button>
		</Form>
	)
}

export default InlineFormFilter;