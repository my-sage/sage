import React from 'react';
import {Link} from 'react-router'
import {Tabs, Tab} from 'react-bootstrap'
import Profile from './ProfilePage'
import Accounts from './AccountsPage'

export default React.createClass({
	render(){
		return (
				<div>
					  <Tabs defaultActiveKey={1}>

					    <Tab eventKey={1} title="Profile">
					    <Profile/>
					    </Tab>

					    <Tab eventKey={2} title="Your Accounts">
					    <Accounts/>
					    </Tab>
					    
					  </Tabs>
			    </div>
		)
	}
})