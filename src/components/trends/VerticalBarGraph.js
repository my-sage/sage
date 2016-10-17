'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import {composeData, mapAbsolute, createEventHandlers} from '../../utils/graphUtils';

const VerticalBarGraph = ({data, groupBy, barColor, eventHandlingFunction}) => {
	const composedData = composeData(groupBy)(data);
	const absoluteData = mapAbsolute(composedData);
	const eventHandlers = createEventHandlers(absoluteData, eventHandlingFunction, groupBy);
	const barWidth = (data) => (250 / data.length) - 2;
	return (
		<VictoryChart theme={VictoryTheme.material} width={800} domainPadding={{x: 90}}>
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true} tickFormat={(y) => `$${y}`}/>
			<VictoryBar data={absoluteData}
			            labelComponent={<VictoryTooltip/>}
			            style={{
				            data: {
					            width: barWidth(composedData),
					            fill: barColor
				            }
			            }}
									events={eventHandlers}
			/>
		</VictoryChart>
	)
};

export default VerticalBarGraph;
