'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import {composeData} from '../../utils/graphUtils';

const PieChart = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	return (
		<div style={{width: "75%"}}>
			<VictoryPie
				data={composedData}
				colorScale={"qualitative"}
				labelComponent={<VictoryTooltip pointerLength={0} style={{labels: {padding: 5}}}/>}
				style={{labels: {padding: 50}}}
				labelRadius={-40}

			/>
		</div>
	)
};

export default PieChart;