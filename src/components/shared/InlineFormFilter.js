'use strict';

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Form, Button, FormGroup, ControlLabel} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import SelectInput from '../shared/DropdownInput';

const style = {
	spacingRight : {
		marginRight: '20px'
	},
	spacingRightAndLeft : {
		margin: '0px 20px',
	},
	spacingTop: {
		paddingTop: '40px',
		background: 'red'
	},
	spacingLeft: {
		marginLeft: '20px'
	},
	center: {
		textAlign: 'center'
	}
}

const InlineFormFilter = ({instance, categories,merchants,onChange,onChangeStart,onChangeEnd,filter,errors}) => {

	return (

		<Form inline style={style.center}>
				<ControlLabel style={style.spacingRight}><b>Category</b></ControlLabel>
				<SelectInput
					name="categoryId"
					value={instance.categoryId}
					defaultOption="Select the correct Category"
					options={categories}
					onChange={onChange} 
					error={errors.categoryId}
					style={style.spacing}/>

				<ControlLabel style={style.spacingRightAndLeft}>Start Date</ControlLabel>
				<DatePicker 
					name="startDate"
					value={instance.startDate}
					onChange={onChangeStart}
					error={errors.startDate} />

			<FormGroup controlId="endDate">
				<ControlLabel style={style.spacingRightAndLeft}>End Date</ControlLabel>
				<DatePicker 
					name="endDate"
					value={instance.endDate}
					onChange={onChangeEnd}
					error={errors.endDate} />
			</FormGroup>			

			<Button bsStyle='primary' type="submit" onClick={filter} style={style.spacingLeft}>Filter</Button>
		</Form>
	)
}

export default InlineFormFilter;