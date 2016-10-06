import React from 'react'
import { Link, IndexLink } from 'react-router'
import TopHNavBar from './TopHNavBar'
import Overview from './overview/OverviewPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Sage</h1>
        <ul role="nav">
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Overview</Link></li>
          <li><TopHNavBar to="/transactions" activeClassName="active">Transactions</TopHNavBar></li>
          <li><TopHNavBar to="/budgets" activeClassName="active">Budgets</TopHNavBar></li>
          <li><TopHNavBar to="/trends" activeClassName="active">Trends</TopHNavBar></li>
          <li><TopHNavBar to="/settings" activeClassName="active">Settings</TopHNavBar></li>
        </ul>
        {this.props.children || <Overview/>}
      </div>
    )
  }
}

export default App;
