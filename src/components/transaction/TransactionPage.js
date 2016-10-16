'use strict';
import React ,{ Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { compose, pick, prop } from 'ramda';
import TransactionTabs from './TransactionTabs'
import TransactionHeader from './TransactionHeader'
import * as TransactionActions from '../../actions/transactionActions';
import {Panel} from 'react-bootstrap'

const TransactionHeaderStyle = {
  float: "right"
};

class TransactionPage extends Component {

  render(){
    return (
      <div>
        {/* <TransactionNav></TransactionNav> */}
      <TransactionHeader/>
        <div>
          <h1>Transactions</h1>
        </div>
        <Panel>
        <div>
          <TransactionTabs query={this.props.query} transactions={this.props.transactions}/>
        </div>
        </Panel>
      </div>
    )
  }
}

//need to put things to validate in this object ex. courses: PropTypes.array.isRequired
//this provides proptype validation
TransactionPage.propTypes = {
  transactions: PropTypes.array.isRequired
};

const mapStateToProps = (state,ownProps) => {

  const query = ownProps.location.query;
  console.log('getting the react route query', query);

  return { 
    transactions: state.transactions.data, 
    query: query
  };
}

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(TransactionActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
