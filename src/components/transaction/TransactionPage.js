'use strict';
import React ,{PropTypes} from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import R from 'ramda';
import TransactionNav from './TransactionNav';
import TransactionTable from './TransactionTable';

class TransactionPage extends React.Component {

  render(){
    return (
      <div>
        <h1>Transactions</h1>
	      <TransactionNav></TransactionNav>
        <TransactionTable transactions={this.props.transactions}/>
      </div>
    )
  }
}

//need to put things to validate in this object ex. courses: PropTypes.array.isRequired
//this provides proptype validation
TransactionPage.propTypes = {
  transactions: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return { transactions: state.transactions }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
