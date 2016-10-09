import React from 'react'
import { Link, IndexLink } from 'react-router'
import Overview from './overview/OverviewPage'
import TopNavbar from './topNavbar/TopNavBar'
import BottomNavBar from './bottomNavBar/BottomNavBar'
import LeftNav from './leftNav/LeftNav'
import Style from '../style.css'

class App extends React.Component {
  render() {
    return (
      
      <div className="main">
        <h1>My Sage</h1>
        <ul role="nav">
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Overview</Link></li>
          <li><Link to="/transactions" activeClassName="active">Transactions</Link></li>
          <li><Link to="/budgets" activeClassName="active">Budgets</Link></li>
          <li><Link to="/trends" activeClassName="active">Trends</Link></li>
          <li><Link to="/settings" activeClassName="active">Settings</Link></li>
        </ul>
        {this.props.children || <Overview/>}
        </div>
    )
  }
}

export default App;
