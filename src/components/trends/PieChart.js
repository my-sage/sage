'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import {composeData, createEventHandlers} from '../../utils/graphUtils';

const PieChart = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	const eventHandlers = createEventHandlers(composedData);
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