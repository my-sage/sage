'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../../images/logo.png'
import {Button, Form, FormControl} from 'react-bootstrap'
import TextInput from '../shared/TextInput'
import PolyInput from '../shared/PolyInput'
import axios from 'axios';

const button = {
  margin: '0% 20%'
}
const login = (user) => axios.post('/login', user)

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
      email: '',
      password: ''
      }
    };
    this.update = this.update.bind(this)
    this.login = this.login.bind(this)
  }
  update(event){
    let field = event.target.name;
    let { user } = this.state;
    user[field] = event.target.value;
    return this.setState({user});
  }
  login(){
    return login(this.state.user);
  }
   render(){
    return (
      <div className="logInWrapper">
        <div className="logInInfo">
         <img src={Logo} style={{width:'50%'}}/>
          <div style={{textAlign: 'center'}}>
          <form>
              <PolyInput style={{width:'60%', marginTop: '25px', marginBottom: '15px', marginLeft: '20%', marginRight: '20%'}} type="text" label="email" name="email" value={this.state.user.email} onChange={this.update} placeholder="email"/>
            <br/>
              <PolyInput style={{width:'60%', marginBottom: '15px', marginLeft: '20%', marginRight: '20%'}} name="password" type="password" label="password" value={this.state.user.password} onChange={this.update} placeholder="Password"/>
          </form>
          </div>
        <Button onClick={this.login} style={button} href="/overview">Log In</Button>
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
