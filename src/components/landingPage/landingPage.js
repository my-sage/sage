'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../../images/logo.png'

class LandingPage extends Component {
   render(){
    return (
      <div className="logInWrapper">
        <div className="logInInfo">
         <img src={Logo} style={{width:'100%'}}/>
          <div>
            <input type='textbox' placeholder='Username' style={{width:'100%', marginTop: '25px', marginBottom: '15px'}}></input>
            <input type='textbox' placeholder='Password' type="password" style={{width:'100%', margin: '15px 0px'}}></input>
          </div>
        <a href="/overview">Log In</a>
        <p style={{textAlign:'center'}}>or</p>
        <a href='/signup'>Create an Account</a>
        </div>

        <div className="vidtop-content">
        </div>
        </div>
    )
  }
}

export default LandingPage;
