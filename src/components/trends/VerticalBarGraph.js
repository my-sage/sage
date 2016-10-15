'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import {composeData, mapAbsolute} from '../../utils/graphUtils';

const VerticalBarGraph = ({data, groupBy, barColor}) => {
	const composedData = composeData(groupBy)(data);
	const absoluteData = mapAbsolute(composedData);
	const barWidth = (data) => (250/data.length)-2;
	return (
		<VictoryChart theme={VictoryTheme.material} width={800} domainPadding={{x: 35}} >
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true} tickFormat={(y) => `$${y}`}/>
			<VictoryBar data={absoluteData}
			            labelComponent={<VictoryTooltip/>}
			            style={{
			            	data: {width: barWidth(composedData),
				            fill: barColor
			}}}/>
		</VictoryChart>
	)
};

export default VerticalBarGraph;
