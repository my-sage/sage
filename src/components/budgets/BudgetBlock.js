'use strict';
import React, { Component } from 'react';
import BudgetItem from './BudgetItem'

class BudgetBlock extends Component {
  render(){
    const { data, isFetching } = this.props.budgets;
    let budgets = data.map((budget) => <BudgetItem key={budget.id} budget={budget}/>);

    return (
      <div>
        <ul>
          {budgets}
        </ul>
        {/*<BudgetItem budgets={budgets}/>*/}
      </div>
    )
  }
}

export default BudgetBlock;
