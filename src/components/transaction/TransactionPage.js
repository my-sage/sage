'use strict';
import React ,{ Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { compose, pick, prop } from 'ramda';
import TransactionTabs from './TransactionTabs'
import * as TransactionActions from '../../actions/transactionActions';
import {Panel} from 'react-bootstrap'

class TransactionPage extends Component {
	componentWillMount(){
		if(this.props.shouldFetchAll){
			this.props.actions.getAllTransactions();
		} else {
			this.props.actions.shouldFetchAll(true);
		}
	}

  render(){
    return (
      <div>
        <div>
          <h1>Transactions</h1>
        </div>
        <Panel>
        <div>
          <TransactionTabs transactions={this.props.transactions}/>
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
  return {
    transactions: state.transactions.data,
  };
};

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(TransactionActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
