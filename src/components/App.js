import React from 'react'
import { Link, IndexLink } from 'react-router'
import Overview from './overview/OverviewPage'
import TopNavbar from './topNavbar/TopNavBar'
import BottomNavbar from './bottomNavBar/BottomNavBar'
import LeftNav from './leftNav/LeftNav'
import Style from '../style.css'


class App extends React.Component {
  render() {
    return (
      <div>
          <TopNavbar/>
          <LeftNav/>
          <div className="main">
            {this.props.children || <Overview/>}
          </div>
          <BottomNavbar/>
      </div>
    )
  }
}

export default App;
