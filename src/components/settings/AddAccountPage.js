import {Link} from 'react-router'
import {Grid, Row, Col, Button, Panel, Modal} from 'react-bootstrap'
import BoA from '../../images/selectBOA.png'
import AMEX from '../../images/selectAMEX.png'
import WELLS from '../../images/selectWELLS.png'
import CHASE from '../../images/selectCHASE.png'
import CITI from '../../images/selectCITI.png'
import TD from '../../images/selectTD.png'
import CHARLES from '../../images/selectCHARLES.png'
import CAPITAL from '../../images/selectCAPITAL.png'
import PNC from '../../images/selectPNC.png'
import Radium from 'radium'

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import AddAccountEditForm from './AddAccountEditForm';

const styles = {
  button: {
   	backgroundColor: 'transparent',
  },
  panel: {
  	boxShadow: "5px 5px 7px grey",
  	textAlign: 'center'
  },
  image: {
  	maxHeight: '100px',
  	maxWidth: '200px'
  },
  row: {
  	marginBottom: "45px"
  },
  grid: {
  	marginTop: "45px"
  },
  tableTitle: {
  	marginBottom: "20px",
  	fontStyle: "italic"
  },
  h4: {
  	marginTop: '0px',
  	textAlign: 'center'
  }
}

class AddAccountPage extends Component {

	constructor (props) {
		super(props);

		this.state = {
			show: false,
			account: Object.assign({},{
				routeNum:'', 
				accountNum:'',
				userName: '',
				password: '',
			})
		}

		this.updateAccountState = this.updateAccountState.bind(this);
		this.update = this.update.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
	}

	updateAccountState(event) {
    //const coerceToInt = (maybeInt) => isNaN(+maybeInt) ? maybeInt : +maybeInt;
		let field = event.target.name;
		let account = this.state.account;
		account[field] = event.target.value;
		return this.setState({account: account});
	}

	close() {
    this.setState({show: false});
  }

  open(event) {
  	console.log(event.target.getAttribute('name'))
    this.setState({show: true});
  }

	render() {
		return (
			<div>
				<div>
					<h3>Add Account</h3>
			    </div>
			    <div>
			    	<Grid style={styles.grid}>
			    	<Row style={styles.tableTitle}>
			    		<h4 style={styles.h4}>Select your bank</h4>
			    	</Row>
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="Bank of American" style={styles.button}><img style={styles.image} src={BoA}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	  	<Panel style={styles.panel}><Button onClick={this.open} name="American Express" style={styles.button}><img style={styles.image} src={AMEX}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="Wells Fargo"style={styles.button}><img style={styles.image} src={WELLS}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="Chase" style={styles.button}><img style={styles.image} src={CHASE}/></Button></Panel>  
			    	  </Col>
			    	  </Row>
			    	  
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="Citi Bank" style={styles.button}><img style={styles.image} src={CITI}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="TD Bank" style={styles.button}><img style={styles.image} src={TD}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="Charles Schwab" style={styles.button}><img style={styles.image} src={CHARLES}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button onClick={this.open} name="Capital One" style={styles.button}><img style={styles.image} src={CAPITAL}/></Button></Panel>  
			    	  </Col>
			    	  </Row>
			    	</Grid>
			    </div>

	  		<Modal show={this.state.show} onHide={this.close} container={this} aria-labelledby="contained-modal-title">
	  			
	  			<Modal.Header closeButton>
	  				<Modal.Title id="Contained-modal-title">Account Management</Modal.Title>
	  			</Modal.Header>

	  			<Modal.Body>
	  				<AddAccountEditForm
	  					onChange={this.updateAccountState}
	  					transaction={this.state.account}
	  					errors={this.state.errors}
	  				/>
	  			</Modal.Body>

	  			<Modal.Footer>
	  				{/*<Button bsStyle="primary" onClick={this.update}>Save and Close</Button>
	  				<Button bsStyle="primary" onClick={this.updateMerchantCategory}>Update Merchant Category</Button>*/}
				    <SplitButton bsStyle="primary" title="Save Change" onClick={this.update}>
				      <MenuItem eventKey="1" onClick={this.update}>Save and Close</MenuItem>
				      <MenuItem eventKey="2" onClick={this.updateMerchantCategory}>Overwrite Merchant Category</MenuItem>
				    </SplitButton>	  				
	  			</Modal.Footer>

	  		</Modal>


			 </div>
		)
	}
}

export default Radium(AddAccountPage);