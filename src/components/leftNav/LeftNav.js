'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router'
import Logo from '../../images/logo.png'
import Radium from 'radium'

const styles = {
  divStyle: {
    height: '100%',
    width: '250px',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#34495C',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '20px'
  },
  logo: {
    marginLeft: "10px", 
    marginBottom:"40px", 
    maxWidth: "230px"
  }
}

export default React.createClass ({
     render(){
          return (
            <div>
              <div style={styles.divStyle}>
              <img src={Logo} style={styles.logo}/>
                 <Link to="/" activeClassName="selected" onlyActiveOnIndex={true}><button className="buttoncss"><span className="glyphicon glyphicon-th"></span>  Overview</button></Link>
                 <Link to="/transactions" activeClassName="selected"><button className="buttoncss"><span className="glyphicon glyphicon-th-list"></span>  Transactions</button></Link>
                 <Link to="/budgets" activeClassName="selected"><button className="buttoncss"><span className="glyphicon glyphicon-exclamation-sign"></span>  Budgets</button></Link>
                 <Link to="/trends" activeClassName="selected"><button className="buttoncss"><span className="glyphicon glyphicon-stats"></span>  Trends</button></Link>
                 <Link to="/settings" activeClassName="selected"><button className="buttoncss"><span className="glyphicon glyphicon-leaf"></span>  Settings</button></Link>
               </div>
            </div>
        )
     }

})