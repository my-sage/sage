'use strict';
import React from 'react';
import {DropdownButton} from "react-bootstrap"

const CategoryDropDown = (category,index) => {
	return (
		<DropdownButton title={category.name} key={index} id={`dropdown-basic-${i}`}>
		</DropdownButton>
	)
}; 

export default CategoryDropDown
