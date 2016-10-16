import React from 'react';
import {Tabs, Tab, Grid, Col, Row, Panel} from 'react-bootstrap'
import {Link} from 'react-router'

const bankPanels = {
	margin: '10px'
}

export default React.createClass({
	render(){
		return (
				<Grid>

				  <Row className="show-grid">
				    <Col md={6}>
				    <Link to='/transactions'><Panel>
				    	<code>10 MOST RECENT TRANSACTIONS HERE</code>
				    </Panel></Link>
				    </Col>
				    
				    <Col md={6}>
				    <Link to='/budgets'><Panel>
				    	<code>BUDGETS</code>
				    </Panel></Link>
				    </Col>
				  </Row>

				  <Row className="show-grid">
				    <Col md={6}>
				    <Link to='/trends'><Panel>
				    	<code>NET INCOME PAST 6 MONTHS</code>
				    </Panel></Link>
				    </Col>

				    <Col md={6}>
				    <Link to='/settings'><Panel>
				    	<Row className="show-grid">
				    		<Panel style={bankPanels}>
				    			<h6>Bank 1</h6>
				    		</Panel>
				    	</Row>
				    	<Row className="show-grid">
				    		<Panel style={bankPanels}>
				    			<h6>Bank 2</h6>
				    		</Panel>
				    	</Row>
				    	<Row className="show-grid">
				    		<Panel style={bankPanels}>
				    			<h6>Bank 3</h6>
				    		</Panel>
				    	</Row>
				    </Panel></Link>
				    </Col>
				  </Row>

				</Grid>
		)
	}
})



// render(){
// 	return (

// 			  <Tabs defaultActiveKey={1}>
// 			    <Tab eventKey={1} title="Cash">
// 			    </Tab>
// 			    <Tab eventKey={2} title="Credit Cards">
// 			    </Tab>
// 			    <Tab eventKey={3} title="Loans">
// 			    </Tab>
// 			  </Tabs>
// 	)
// }