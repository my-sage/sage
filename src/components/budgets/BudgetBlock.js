'use strict';
import React, { Component } from 'react';
import BudgetItem from './BudgetItem'
import { Button, Row, Col, Grid, Panel } from 'react-bootstrap';
import BudgetCreateModal from './BudgetCreateModal';
import BudgetFilterContainer from './BudgetFilterContainer'

class BudgetBlock extends Component {
  render(){
    const { data, isFetching } = this.props.budgets;
    let budgets = data.map((budget) => <BudgetItem key={budget.id} budget={budget}/>);

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <BudgetFilterContainer />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            <ul style={{padding:'0px'}}>
              {budgets}
              <BudgetCreateModal/>
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BudgetBlock;
