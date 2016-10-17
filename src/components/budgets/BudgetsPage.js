'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BudgetBlock from './BudgetBlock';
import { pick } from 'ramda';
import {Panel} from 'react-bootstrap'

class BudgetPage extends Component {
   render(){
    return (
    	<div>
	    	<h1>Budgets</h1>
        <Panel>
	      	<BudgetBlock budgets={this.props.budgets}/>
        </Panel>
      	</div>
    )
  }
}

//need to put things to validate in this object ex. courses: PropTypes.array.isRequired
//this provides proptype validation
BudgetPage.propTypes = {};

const mapStateToProps = pick(['budgets']);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPage);
