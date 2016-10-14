'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import {composeData} from '../../utils/graphUtils';

const VerticalBarGraph = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	const barWidth = (data) => (250/data.length)-2;
	return (
		<VictoryChart theme={VictoryTheme.material} width={800} domainPadding={35}>
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true} tickFormat={(y) => `$${y}`}/>
			<VictoryBar data={composedData}
			            labelComponent={<VictoryTooltip/>}
			            style={{
			            	data: {width: barWidth(composedData),
				            fill: (data)=> data.y > 0 ? '#2ecc71' : '#c0392b'
			}}}/>
		</VictoryChart>
	)
};

export default VerticalBarGraph;
