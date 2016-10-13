'use strict';
import React ,{ Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { compose, pick, prop } from 'ramda';
import TransactionTabs from './TransactionTabs'
import TransactionHeader from './TransactionHeader'
import * as TransactionActions from '../../actions/transactionActions';

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
        <div>
          <TransactionTabs transactions={this.props.transactions}/>
        </div>
      </div>
    )
  }
}

//need to put things to validate in this object ex. courses: PropTypes.array.isRequired
//this provides proptype validation
TransactionPage.propTypes = {
  transactions: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({ transactions: state.transactions.data })

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(TransactionActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
