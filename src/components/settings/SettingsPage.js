import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import SettingsTabs from './SettingsTabs'

export default React.createClass({
	render(){
		return (
			<div>
			<div>
			<h1>Settings</h1>
			</div>
				<div>
					  <SettingsTabs/>
			    </div>
		    </div>
		)
	}
})