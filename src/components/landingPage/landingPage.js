'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../../images/logo.png'

class LandingPage extends Component {
   render(){
    return (
      <div style={{textAlign: 'center'}}>
    	 <div className="video-background">
        <div className="video-foreground">
        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="centerIt" style={{width:"100%"}}>
        <div className="logInInfo">
         <img src={Logo} style={{width:'100%'}}/>
          <div>
            <input type='textbox' placeholder='Username' style={{width:'100%', marginTop: '25px', marginBottom: '15px'}}></input>
            <input type='textbox' placeholder='Password' type="password" style={{width:'100%', margin: '15px 0px'}}></input>
          </div>
        <a href="/overview">Log In</a>
        <p style={{textAlign:'center'}}>or</p>
        <a href='/signup'>Sign Up</a>
        </div>
        </div>

        <div className="vidtop-content">
        </div>
       </div>
      </div>
    )
  }
}

export default LandingPage;
