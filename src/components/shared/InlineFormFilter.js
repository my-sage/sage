'use strict';

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Form, Button, FormGroup, ControlLabel} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import SelectInput from '../shared/DropdownInput';

const InlineFormFilter = ({instance, categories,merchants,onChange,onChangeStart,onChangeEnd,filter,errors}) => {

	return (

		<Form inline>
				<ControlLabel>Category</ControlLabel>
				<SelectInput
					name="categoryId"
					value={instance.categoryId}
					defaultOption="Select the correct Category"
					options={categories}
					onChange={onChange} 
					error={errors.categoryId}/>

				<ControlLabel>Start Date</ControlLabel>
				<DatePicker 
					name="startDate"
					value={instance.startDate}
					onChange={onChangeStart}
					error={errors.startDate} />

			<FormGroup controlId="endDate">
				<ControlLabel>End Date</ControlLabel>
				<DatePicker 
					name="endDate"
					value={instance.endDate}
					onChange={onChangeEnd}
					error={errors.endDate} />
			</FormGroup>			

			<Button type="submit" onClick={filter}>Filter</Button>
		</Form>
	)
}

export default InlineFormFilter;