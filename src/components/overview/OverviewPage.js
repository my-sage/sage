import React from 'react';
import {Link} from 'react-router'
import {Panel, Button} from 'react-bootstrap'
import OverviewTabs from './OverviewTabs'
import Menu from '../topNavbar/HamburgerMenu'

export default ({ children }) => (
			<div>
			<div>
					<h1>Overview</h1>
					<i className="fa fa-refresh" aria-hidden="true" style={{float:'right'}}></i>
			</div>
			<Panel>
				<OverviewTabs/>
				{children}
			</Panel>
			</div>
		)
