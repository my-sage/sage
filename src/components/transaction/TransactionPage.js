import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import connect from 'react-redux';

class TransactionPage extends React.component {}

//need to put things to validate in this object ex. courses: PropTypes.array.isRequired
//this provides proptype validation
TransactionPage.propTypes = {}

function mapStateToProps(state, ownProps) {
  return {
  
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators('ACTIONS_OBJECT', dispatch);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
