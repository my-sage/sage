'use strict';
import React, { Component } from 'react';

class BudgetBlock extends Component {
  render(){
    const { data, isFetching } = this.props.budgets;

    let budgets = data.map((budget, i) => {
        return (
          <li key={i}>{budget.name}</li>
        )
     });

    return (
      <div>
        <h1>Budgets</h1>
        <ul>{ budgets }</ul>
      </div>
    )
  }
}

export default BudgetBlock;
