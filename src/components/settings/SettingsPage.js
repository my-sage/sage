import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab, Nav, NavItem, NavDropdown, MenuItem, Panel} from 'react-bootstrap'
import SettingsTabs from './SettingsTabs'

export default React.createClass({
	render(){
		return (
			<div>
			<h1>Settings</h1>
			<Panel>
				<div>
					  <SettingsTabs/>
			    </div>
			</Panel>
			</div>
		)
	}
})