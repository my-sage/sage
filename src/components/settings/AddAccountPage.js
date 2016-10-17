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
   	backgroundColor: 'transparent'
  },
  panel: {
  	boxShadow: "3px 3px 5px grey",
  	textAlign: 'center'
  },
  image: {
  	maxHeight: '100px',
  	maxWidth: '200px',
  	pointerEvents: "none"
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
				name: '',
				routeNum:'', 
				accountNum:'',
				userName: '',
				password: ''
			}),
			errors: {}
		}

		this.updateAccountState = this.updateAccountState.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
	}

	updateAccountState(event) {
    const coerceToInt = (maybeInt) => isNaN(+maybeInt) ? maybeInt : +maybeInt;
		let field = event.target.name;
		 console.log('updating the account state with field',field);
		 console.log('updating the account state with value',event.target.value);
		let account = this.state.account;
		account[field] = coerceToInt(event.target.value);
		this.setState({account: account},console.log('the new account state',this.state));
	}

	close() {
    this.setState({show: false});
  }

  open(event) {
  	console.log('open.......',event.target.name)
    this.setState({show: true, account: {name: event.target.name}});
  }

	render() {
		return (
			<div>
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

			    <div className="modal-container" style={{height: 40}}>
			  		<Modal show={this.state.show} onHide={this.close} container={this} aria-labelledby="contained-modal-title">
			  			
			  			<Modal.Header closeButton style={{textAlign: "center"}}>
			  				<Modal.Title id="Contained-modal-title">{this.state.account.name}</Modal.Title>
			  			</Modal.Header>

			  			<Modal.Body>
			  				<AddAccountEditForm
			  					onChange={this.updateAccountState}
			  					account={this.state.account}
			  					errors={this.state.errors}
			  				/>
			  			</Modal.Body>

			  			<Modal.Footer>
			  				
								<Button bsStyle="success">Add Bank Account</Button>  				
			  			</Modal.Footer>

			  		</Modal>
			  	</div>			    	
			    </div>




			 </div>
		)
	}
}

export default AddAccountPage;