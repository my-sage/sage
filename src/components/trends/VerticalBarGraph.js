'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import {composeData} from '../../utils/graphUtils';

const VerticalBarGraph = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	const barWidth = (data) => (450/data.length)-2;
	return (
		<VictoryChart theme={VictoryTheme.material} width={600} domainPadding={25}>
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true} tickFormat={(y) => `$${y}`}/>
			<VictoryBar data={composedData} labelComponent={<VictoryTooltip  style={{labels: {padding: 5}}}/>} style={{data: {width: barWidth(composedData), fill: '#2ecc71'}}}/>
		</VictoryChart>
	)
};

export default VerticalBarGraph;
