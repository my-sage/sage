'use strict';
import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap'

const howFilled = (currentAmount, targetAmount) => {
    return Math.floor((Math.abs(currentAmount) / targetAmount) * 100)
}



const BudgetBar = ({targetAmount, currentAmount}) => {
    const howFilledAmI = howFilled(currentAmount, targetAmount);
    let fillColor;

    if(howFilledAmI < 65){
    	fillColor = "success"
    } else if (howFilledAmI >= 65 && howFilledAmI < 90) {
    	fillColor = "warning"
    } else {
    	fillColor = "danger"
    }

    // Write IFs to determine ProgressBar color

    return <ProgressBar bsStyle={fillColor} now={howFilledAmI}/>
}

export default BudgetBar;
