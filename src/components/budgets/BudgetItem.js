'use strict';
import React, { Component } from 'react';
import BudgetBar from './BudgetBar';
import BudgetUpdateModal from './BudgetUpdateModal'

class BudgetItem extends Component {
  render(){

    const {name, currentAmount, targetAmount, endDate} = this.props.budget;
    // let budgets = this.props.budgets.map((budget, i) => {
    //     return (
    //       <li key={i}>Name: {budget.name} | Currrent: {budget.currentAmount} | Max Amount: {budget.targetAmount} | Expiration: {budget.endDate}</li>
    //     )
    //  });
    // {console.log(this.props.budgets)}

    return (
        
        <li>
        <p>Name: {name} | Currrent: {currentAmount} | Max Amount: {targetAmount} | Expiration: {endDate}
        <BudgetUpdateModal budget={this.props.budget} /></p>
        <BudgetBar targetAmount={targetAmount} currentAmount={currentAmount}/>
        </li>
        
            
        
        
            )
  }
}

export default BudgetItem;
