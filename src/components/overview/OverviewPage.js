import React from 'react';
import {Link} from 'react-router'
import {Panel} from 'react-bootstrap'
import OverviewTabs from './OverviewTabs'
import Menu from '../topNavbar/HamburgerMenu'

export default ({ children }) => (
			<div>
			<h1>Overview</h1>
			<Panel>
				<OverviewTabs/>
				{children}
			</Panel>
			</div>
		)
