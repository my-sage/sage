'use strict';
import React, { Component } from 'react';
import BudgetBar from './BudgetBar';
import BudgetUpdateModal from './BudgetUpdateModal'

class BudgetItem extends Component {
  render(){

    const {name, currentAmount, targetAmount, endDate, category} = this.props.budget;
    // let budgets = this.props.budgets.map((budget, i) => {
    //     return (
    //       <li key={i}>Name: {budget.name} | Currrent: {budget.currentAmount} | Max Amount: {budget.targetAmount} | Expiration: {budget.endDate}</li>
    //     )
    //  });
    // {console.log(this.props.budgets)}

    let dt = new Date(endDate*1000);
    let formattedDate = ('0' + dt.getDate()).slice(-2) + '/' + ('0' + (dt.getMonth() + 1)).slice(-2) + '/' + dt.getFullYear() + ' ' + ('0' + dt.getHours()).slice(-2) + ':' + ('0' + dt.getMinutes()).slice(-2);

    return (
        
        <li>
        <p>Name: {name} | Currrent: {currentAmount} | Max Amount: {targetAmount} | Expiration: {formattedDate} | Category: {category.name}
        <BudgetUpdateModal budget={this.props.budget} style={{display: "inline-block"}}/></p>
        <BudgetBar targetAmount={targetAmount} currentAmount={currentAmount}/>
        </li>
        
            
        
        
            )
  }
}

export default BudgetItem;
