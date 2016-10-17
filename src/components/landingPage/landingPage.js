'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../../images/logo.png'
import {Button, Form, FormControl} from 'react-bootstrap'

const button = {
  margin: '0% 20%'
}

// const textField = {
//   margin: '0% 18%'
// }

class LandingPage extends Component {
   render(){
    return (
      <div className="logInWrapper">
        <div className="logInInfo">
         <img src={Logo} style={{width:'50%'}}/>
          <div style={{textAlign: 'center'}}>
          <Form>
              <FormControl style={{width:'60%', marginTop: '25px', marginBottom: '15px', marginLeft: '20%', marginRight: '20%'}} type="username" placeholder="Username"/>
            <br/>
              <FormControl style={{width:'60%', marginBottom: '15px', marginLeft: '20%', marginRight: '20%'}} type="password" placeholder="Password"/>
          </Form>
          </div>
        <Button style={button} href="/overview">Log In</Button>
        <p style={{paddingTop:'10px',textAlign:'center', color:'white'}}>or</p>
        <Button style={button} href="/overview">Create an Account</Button>
        </div>

        <div className="vidtop-content">
        </div>
        </div>
    )
  }
}

export default LandingPage;




// <input type='textbox' placeholder='Password' type="password" style={{width:'60%', marginTop: '25px', marginBottom: '15px'}}></input>