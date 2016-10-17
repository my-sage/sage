'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import {composeData, createEventHandlers} from '../../utils/graphUtils';

const PieChart = ({data, groupBy, eventHandlingFunction}) => {
	const composedData = composeData(groupBy)(data);
	const eventHandlers = createEventHandlers(composedData, eventHandlingFunction);
	return (
		<div style={{width: "50%"}}>
			<VictoryPie
				data={composedData}
				colorScale={"qualitative"}
				labelComponent={<VictoryTooltip pointerLength={0}/>}
				labelRadius={-40}
			  events={eventHandlers}
			/>
		</div>
	)
};

export default PieChart;