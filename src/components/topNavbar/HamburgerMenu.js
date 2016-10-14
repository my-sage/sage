import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default React.createClass({
  render() {
    return (
      <Menu className="burgerMenu">
        <RadiumLink to="/" activeClassName="selected" onlyActiveOnIndex={true}><button className="buttoncssburger"><i className="fa fa-tachometer" aria-hidden="true"></i> &nbsp; Overview</button></RadiumLink>
        <RadiumLink to="/transactions" activeClassName="selected"><button className="buttoncssburger"><i className="fa fa-money" aria-hidden="true"></i> &nbsp; Transactions</button></RadiumLink>
        <RadiumLink to="/budgets" activeClassName="selected"><button className="buttoncssburger"><i className="fa fa-tasks" aria-hidden="true"></i>  &nbsp; Budgets</button></RadiumLink>
        <RadiumLink to="/trends" activeClassName="selected"><button className="buttoncssburger"><i className="fa fa-line-chart" aria-hidden="true"></i>  &nbsp; Trends</button></RadiumLink>
        <RadiumLink to="/settings" activeClassName="selected"><button className="buttoncssburger"><span className="glyphicon glyphicon-leaf"></span>  &nbsp; Settings</button></RadiumLink>
      </Menu>
    );
  }
});