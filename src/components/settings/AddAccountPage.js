import React from 'react';
import {Link} from 'react-router'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import BoA from '../../images/selectBOA.png'
import AMEX from '../../images/selectAMEX.png'
import WELLS from '../../images/selectWELLS.png'
import CHASE from '../../images/selectCHASE.png'
import CITI from '../../images/selectCITI.png'
import TD from '../../images/selectTD.png'
import CHARLES from '../../images/selectCHARLES.png'
import CAPITAL from '../../images/selectCAPITAL.png'
import Radium from 'radium'


const styles = {
  button: {
   	backgroundColor: 'transparent',
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
}


const AddAccountPage = (props) => {
		return (
			<div>
				<div>
					<h3>Add Account</h3>
					<h5 style={{textAlign:"center"}}>Select your bank</h5>
			    </div>
			    <div>
			    	<Grid style={styles.grid}>
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={BoA}/></Button>
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	  	<Button style={styles.button}><img style={styles.image} src={AMEX}/></Button>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={WELLS}/></Button>  
			    	  </Col>
			    	  </Row>
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={CHASE}/></Button>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={CITI}/></Button>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={TD}/></Button>  
			    	  </Col>
			    	  </Row>
			    	  <Row style={styles.row} >
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={CHARLES}/></Button>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={CAPITAL}/></Button>  
			    	  </Col>
			    	  <Col xs={6} md={3}>
			    	    <Button style={styles.button}><img style={styles.image} src={TD}/></Button>  
			    	  </Col>
			    	  </Row>
			    	</Grid>
			    </div>
			 </div>
		)
}

export default Radium(AddAccountPage);