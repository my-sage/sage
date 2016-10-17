'use strict';
import React, { Component } from 'react';
import BudgetBar from './BudgetBar';
import BudgetUpdateModal from './BudgetUpdateModal'
import {Panel} from 'react-bootstrap'

const style = {
    li: {
        listStyleType: 'none'
    }
}

class BudgetItem extends Component {
  render(){

    const {name, currentAmount, targetAmount, endDate, category} = this.props.budget;

    let dt = new Date(+endDate);
    let formattedDate = ('0' + dt.getDate()).slice(-2) + '/' + ('0' + (dt.getMonth() + 1)).slice(-2) + '/' + dt.getFullYear() + ' ' + ('0' + dt.getHours()).slice(-2) + ':' + ('0' + dt.getMinutes()).slice(-2);

    return (
        <Panel>
          <li style={style.li}>
            <div>
              <p style={{float:'left'}}><b>{category ? category.name : 'UNCATEGORIZED'}</b>: {name}</p>
              <p style={{textAlign: 'right', marginRight: '130px'}}><b>${currentAmount}</b><i> of </i><b>${targetAmount}</b></p>
            </div>
              {/*<p><b>Name:</b> {name} <b>| Currrent:</b> {currentAmount} <b>| Max Amount:</b> {targetAmount} <b>| Expiration:</b> {formattedDate} <b>| Category: </b>{category ? category.name : 'UNCATEGORIZED'}*/}
              {/*<br></br>*/}
              <BudgetUpdateModal budget={this.props.budget} style={{marginTop: '0px'}}/>
            <div>
            <BudgetBar targetAmount={targetAmount} currentAmount={currentAmount}/>
            </div>
          </li>
        </Panel>
    )
  }
}

export default BudgetItem;
