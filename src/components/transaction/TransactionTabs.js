import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import TypeTabs from './TypeTabs'

export default React.createClass({
	render(){
		return (
				  <Tabs defaultActiveKey={1}>
				    <Tab eventKey={1} title="Type">
				    	<TypeTabs transactions={this.props.transactions}/>
				    </Tab>
				    <Tab eventKey={2} title="Accounts">
				    </Tab>
				    <Tab eventKey={3} title="Tags">
				    </Tab>
				  </Tabs>
		)
	}
})
