import React from 'react';
import {Link} from 'react-router'
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap'
import BoA from '../../images/selectBOA.png'
import AMEX from '../../images/selectAMEX.png'
import WELLS from '../../images/selectWELLS.png'
import CHASE from '../../images/selectCHASE.png'
import CITI from '../../images/selectCITI.png'
import TD from '../../images/selectTD.png'
import CHARLES from '../../images/selectCHARLES.png'
import CAPITAL from '../../images/selectCAPITAL.png'
import PNC from '../../images/selectPNC.png'

const styles = {
  panel: {
  	padding: '0px 30px',
  	backgroundColor: '#eeeeee'
  },
  image: {
  	maxHeight: '100px',
  	maxWidth: '200px',
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

export default React.createClass({
	render(){
		return (
			<div>
				<br/>
				<h6>Email: brraposo@gmail.com</h6>
				<br/>
				<Panel>
				<div>
					<h5>Your Bank Accounts</h5>
						<div>
							<Grid style={styles.grid}>
							  <Row style={styles.row} >
								  <Col xs={12} md={12}>
								    <Panel style={styles.panel}><img style={styles.image} src={BoA}/><p style={{float:'right', marginTop:'30px'}}>$*PLACEHOLDER FOR CASH*</p></Panel>  
								  </Col>
							  </Row>
							  <Row style={styles.row} >
								  <Col xs={12} md={12}>
								    <Panel style={styles.panel}><img style={styles.image} src={CITI}/><p style={{float:'right', marginTop:'30px'}}>$1,000,000.00</p></Panel>  
								  </Col>
							  </Row>
							  <Row style={styles.row} >
								  <Col xs={12} md={12}>
								    <Panel style={styles.panel}><img style={styles.image} src={TD}/><p style={{float:'right', marginTop:'30px'}}>$4,201.00</p></Panel>  
								  </Col>
							  </Row>
							</Grid>
						</div>
				</div>
				</Panel>
		    </div>
		)
	}
})
