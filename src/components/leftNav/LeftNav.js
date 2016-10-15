'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router'
import Logo from '../../images/logo.png'
import Radium from 'radium'

const styles = {
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
              <div className="leftNav" style={styles.divStyle}>
              <img src={Logo} style={styles.logo}/>
                 <Link to="/overview" activeClassName="selected" onlyActiveOnIndex={true}><button className="buttoncss"><i className="fa fa-tachometer" aria-hidden="true"></i> &nbsp; Overview</button></Link>
                 <Link to="/transactions" activeClassName="selected"><button className="buttoncss"><i className="fa fa-money" aria-hidden="true"></i> &nbsp; Transactions</button></Link>
                 <Link to="/budgets" activeClassName="selected"><button className="buttoncss"><i className="fa fa-tasks" aria-hidden="true"></i>  &nbsp; Budgets</button></Link>
                 <Link to="/trends" activeClassName="selected"><button className="buttoncss"><i className="fa fa-line-chart" aria-hidden="true"></i>  &nbsp; Trends</button></Link>
                 <Link to="/settings" activeClassName="selected"><button className="buttoncss"><span className="glyphicon glyphicon-leaf"></span>  &nbsp; Settings</button></Link>
               </div>
            </div>
        )
     }

})