'use strict';

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Form, Button, FormGroup, ControlLabel} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import SelectInput from '../shared/DropdownInput';

const style = {
	spacingRight : {
		marginRight: '10px',
		fontWeight: 'bold'
	},
	spacingRightAndLeft : {
		margin: '0px 10px 0px 20px',
		fontWeight: 'bold'
	},
	spacingLeft: {
		marginLeft: '30px',
		fontWeight: 'bold'
	},
	center: {
		textAlign: 'center'
	}
}

const InlineFormFilter = ({instance, categories,merchants,onChange,onChangeStart,onChangeEnd,filter,getAll,getCurrent,errors}) => {
	
	let getCurrentButton;
	if(getCurrent) {
		getCurrentButton =  <Button bsStyle='primary' onClick={getCurrent} style={style.spacingLeft}>Current</Button>
	}

	let getAllButton;
	if(getAll) {
		getAllButton =  <Button bsStyle='primary' onClick={getAll} style={style.spacingLeft}>Get All</Button>
	}

	let merchantSelect;
	if (merchants) {
		merchantSelect = <div style={{display: "inline"}}>
			<ControlLabel style={style.spacingRight}>Merchant</ControlLabel>
			<SelectInput
				name="merchantId"
				value={instance.merchantId}
				defaultOption="Pick Merchant"
				options={merchants}
				onChange={onChange}
				error={errors.merchantId}/>
		</div>
	}
	


	return (

		<Form inline style={style.center}>

				{merchantSelect}

				<ControlLabel style={style.spacingRightAndLeft}><b>Category</b></ControlLabel>

				<SelectInput
					name="categoryId"
					value={instance.categoryId}
					defaultOption="Pick Category"
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

				<ControlLabel style={style.spacingRightAndLeft}>End Date</ControlLabel>
				
				<DatePicker 
					name="endDate"
					value={instance.endDate}
					onChange={onChangeEnd}
					error={errors.endDate} />		

			<Button bsStyle='primary' type="submit" onClick={filter} style={style.spacingLeft}>Filter</Button>
			{getCurrentButton}
			{getAllButton}
		</Form>
	)
}

export default InlineFormFilter;