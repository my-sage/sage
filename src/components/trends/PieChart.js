'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import composeData from '../../utils/graphUtils';

const PieChart = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	return (
		<div className="col-md-12">
			<VictoryPie data={composedData} colorScale={"qualitative"} labelRadius={80} innerRadius={140} height={300} width={700}/>
		</div>
	)
};

export default PieChart;