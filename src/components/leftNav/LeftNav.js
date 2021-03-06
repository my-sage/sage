'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router'

export default React.createClass ({
     render(){
          return (
            <div>
              <div className="leftNav">
                 <Link to="/overview" activeClassName="selected" onlyActiveOnIndex={true}><button className="buttoncss"><i style={{fontSize: '250%'}} className="fa fa-tachometer" aria-hidden="true"></i></button></Link>
                 <Link to="/transactions" activeClassName="selected"><button className="buttoncss"><i  style={{fontSize: '250%'}} className="fa fa-money" aria-hidden="true"></i></button></Link>
                 <Link to="/budgets" activeClassName="selected"><button className="buttoncss"><i style={{fontSize: '250%'}} className="fa fa-tasks" aria-hidden="true"></i></button></Link>
                 <Link to="/trends" activeClassName="selected"><button className="buttoncss"><i style={{fontSize: '250%'}} className="fa fa-line-chart" aria-hidden="true"></i></button></Link>
                 <Link to="/settings" activeClassName="selected"><button className="buttoncss"><i style={{fontSize: '250%'}} className="glyphicon glyphicon-leaf"></i></button></Link>
               </div>
            </div>
        )
     }
})