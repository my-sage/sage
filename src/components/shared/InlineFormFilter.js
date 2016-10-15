'use strict';

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Form, Button, FormGroup, ControlLabel} from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";
import SelectInput from '../shared/DropdownInput';

const style = {
	spacingRight : {
		marginRight: '15px',
		width:'40%'
	},
	spacingRightAndLeft : {
		margin: '0px 10px 0px 20px',
		fontWeight: 'bold'
	},
	spacingTop: {
		marginTop: '30px'
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
		merchantSelect = <div style={{display: "inline", marginRight:'30px'}}>
			{/*<ControlLabel style={style.spacingRight}>Merchant</ControlLabel>*/}
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
			<div>
				{merchantSelect}

				{/*<ControlLabel style={style.spacingRightAndLeft}><b>Category</b></ControlLabel>*/}
				<div style={{marginRight:'30px', display:'inline'}}>
					<SelectInput
						name="categoryId"
						value={instance.categoryId}
						defaultOption="Pick Category"
						options={categories}
						onChange={onChange} 
						error={errors.categoryId}/>
				</div>
				<div style={{marginRight:'30px', display:'inline'}}>
				{/*<ControlLabel style={style.spacingRightAndLeft}>Start Date</ControlLabel>*/}
				<DatePicker 
					placeholder="Start Date"
					name="startDate"
					value={instance.startDate}
					onChange={onChangeStart}
					error={errors.startDate} />
				</div>
				{/*<ControlLabel style={style.spacingRightAndLeft}>End Date</ControlLabel>*/}
				<div style={{display:'inline'}}>
				<DatePicker 
					placeholder="End Date"
					name="endDate"
					value={instance.endDate}
					onChange={onChangeEnd}
					error={errors.endDate} />		
				</div>
				</div>
					<br></br>

			<Button bsStyle='primary' type="submit" onClick={filter} style={style.spacingRight}>Filter</Button>
			{getCurrentButton}
			{getAllButton}
		</Form>
	)
}

export default InlineFormFilter;