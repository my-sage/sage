'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router'

const divStyle = {
    height: '100%',
    width: '250px',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#34495C',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px'
}

const button = {
  width: '100%',
  padding: '35px 0px',
  background: "transparent",
  border: '2px solid white',
  borderLeft: 'transparent',
}

export default React.createClass ({
     render(){
          return (
            <div style={divStyle}>
               <Link to="/" activeClassName="active" onlyActiveOnIndex={true}><button style={button}><span className="glyphicon glyphicon-th"></span>  Overview</button></Link>
               <button style={button}><Link to="/transactions" activeClassName="active"><span className="glyphicon glyphicon-th-list"></span>  Transactions</Link></button>
               <button style={button}><Link to="/budgets" activeClassName="active"><span className="glyphicon glyphicon-exclamation-sign"></span>  Budgets</Link></button>
               <button style={button}><Link to="/trends" activeClassName="active"><span className="glyphicon glyphicon-stats"></span>  Trends</Link></button>
               <button style={button}><Link to="/settings" activeClassName="active"><span className="glyphicon glyphicon-leaf"></span>  Settings</Link></button>
        </div>
        )
     }

})