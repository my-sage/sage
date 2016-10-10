import React from 'react';
import {Link} from 'react-router'
import OverviewTabs from './OverviewTabs'
export default ({ children }) => (
			<div>
			<h1>Overview</h1>
				<OverviewTabs/>
				{children}
			</div>
		)
