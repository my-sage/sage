'use strict';
import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import TransactionTabs from './TransactionTabs'
import TransactionHeader from './TransactionHeader'
import TransactionSingle from './TransactionSingle'
import TransactionTable from './TransactionTable'

const TransactionHeaderStyle = {
  float: "right"
}

class TransactionPage extends React.Component {

  render(){
    return (
      <div>
      <TransactionHeader/>
        <div>
          <h1>Transactions</h1>
        </div>
        <div>
          <TransactionTabs/>
        </div>
      </div>
    )
  }
}

//need to put things to validate in this object ex. courses: PropTypes.array.isRequired
//this provides proptype validation
TransactionPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return { transactions: state.transactions }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
