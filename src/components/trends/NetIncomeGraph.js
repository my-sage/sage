'use strict';

import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import {composeData, objectAddition, mapAbsolute} from '../../utils/graphUtils';

const NetIncomeGraph = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	const barWidth = (data) => (250 / data.length) - 2;
	return (
		<VictoryChart theme={VictoryTheme.material} width={800} domainPadding={{x: 70}}>
			<VictoryAxis fixLabelOverlap={true}
			             style={{
				             tickLabels: {display: 'none'},
				             ticks: {size: 0}
			             }}/>
			<VictoryAxis dependentAxis={true} tickFormat={(y) => `$${y}`}/>
			<VictoryBar labelComponent={<VictoryTooltip/>} data={composedData} style={{
				data: {fill: (data)=> data.y>0 ? '#2ecc71':'#c0392b'}
			}}/>
		</VictoryChart>
	)
};

export default NetIncomeGraph;
