import React, { Component } from 'react';
import {Link} from 'react-router'
import {Tabs, Tab, Nav, NavItem, NavDropdown, MenuItem, Panel} from 'react-bootstrap'
import SettingsTabs from './SettingsTabs'
import { prop, compose } from 'ramda';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AccountActions from '../../actions/accountActions'

class SettingsPage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.actions.getAllAccounts()
  }
	render(){
		return (
			<div>
			<h1>Settings</h1>
			<Panel>
				<div>
					  <SettingsTabs actions={this.props.actions} accounts={this.props.accounts}/>
			    </div>
			</Panel>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts.data,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AccountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
