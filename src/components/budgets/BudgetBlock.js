'use strict';
import React, { Component } from 'react';
import BudgetItem from './BudgetItem'
import { Button, Row, Col, Grid } from 'react-bootstrap';
import BudgetCreateModal from './BudgetCreateModal';
import BudgetFilterContainer from './BudgetFilterContainer'

class BudgetBlock extends Component {
  render(){
    const { data, isFetching } = this.props.budgets;
    let budgets = data.map((budget) => <BudgetItem key={budget.id} budget={budget}/>);

    return (
      <Grid>
        <Row>
          <Col sm={6} md={3}>
            <BudgetCreateModal />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <BudgetFilterContainer />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12}>
            <ul>
              {budgets}
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BudgetBlock;
