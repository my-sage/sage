import React from 'react';
import {Link} from 'react-router'
import TrendsTabs from './TrendsTabs'


export default React.createClass({
	render(){
		return (
			<div>
			<div>
			<h1>Trends</h1>
			</div>
				<TrendsTabs/>
		    </div>
		)
	}
})