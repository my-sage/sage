'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import {composeData} from '../../utils/graphUtils';

const PieChart = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	return (
			<VictoryPie data={composedData} colorScale={"qualitative"} innerRadius={140} height={300} width={700}/>
	)
};

export default PieChart;