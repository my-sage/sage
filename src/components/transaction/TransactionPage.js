'use strict';
import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class TransactionPage extends React.Component {

  render(){
    return (
      <div>
        <h1>Transactions</h1>
        <ul>
          <li><Link activeClassName="active" to="/transactions/type">Type</Link></li>
          <li><Link activeClassName="active" to="/transactions/accounts">Accounts</Link></li>
          <li><Link activeClassName="active" to="/transactions/tags">Tags</Link></li>
        </ul>
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
