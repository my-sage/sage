'use strict';
import React, { Component } from 'react';
import Bootstrap, {ProgressBar} from 'react-bootstrap'

const howFilled = (currentAmount, targetAmount) => {
    return ((targetAmount - currentAmount) / targetAmount) * 100
}



const BudgetBar = ({targetAmount, currentAmount}) => {
    const howFilledAmI = howFilled(currentAmount, targetAmount);
    let fillColor;

    // Write IFs to determine ProgressBar color

    return <ProgressBar bsStyle={fillColor} now={howFilledAmI}/>
}

export default BudgetBar;
