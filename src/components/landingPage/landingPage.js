'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../../images/logo.png'

const button = {
  margin: '0% 25%',
  padding: '8px, 0px'
}

// const textField = {
//   margin: '0% 18%'
// }

class LandingPage extends Component {
   render(){
    return (
      <div className="logInWrapper">
        <div className="logInInfo">
         <img src={Logo} style={{width:'75%'}}/>
          <div style={{textAlign: 'center'}}>
            <input type='textbox' placeholder='Username' style={{width:'65%', marginTop: '25px', marginBottom: '15px'}}></input>
            <br/>
            <input type='textbox' placeholder='Password' type="password" style={{width:'65%', marginTop: '25px', marginBottom: '15px'}}></input>
          </div>
        <a style={button}><Link style={{padding:'7px'}} to='/overview'>Log In</Link></a>
        <p style={{textAlign:'center', color:'white'}}>or</p>
        <a style={button}><Link style={{padding:'7px'}} to='/signup'>Create an Account</Link></a>
        </div>

        <div className="vidtop-content">
        </div>
        </div>
    )
  }
}

export default LandingPage;
