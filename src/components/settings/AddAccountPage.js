import React from 'react';
import {Link} from 'react-router'
import {Grid, Row, Col, Button, Panel} from 'react-bootstrap'
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

const AddAccountPage = (props) => {
		return (
			<div>
			    <div>
			    	<Grid style={styles.grid}>
			    	<Row style={styles.tableTitle}>
			    		<h4 style={styles.h4}>Select your bank</h4>
			    	</Row>
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={BoA}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	  	<Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={AMEX}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={WELLS}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={CHASE}/></Button></Panel>  
			    	  </Col>
			    	  </Row>
			    	  
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={CITI}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={TD}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={CHARLES}/></Button></Panel>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Panel style={styles.panel}><Button style={styles.button}><img style={styles.image} src={CAPITAL}/></Button></Panel>  
			    	  </Col>
			    	  </Row>
			    	</Grid>
			    </div>
			 </div>
		)
}

export default Radium(AddAccountPage);