'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import {composeData} from '../../utils/graphUtils';

const PieChart = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	return (
		<div className="col-md-offset-4 col-md-6">
			<VictoryPie
				data={composedData}
				colorScale={"qualitative"}
				labelComponent={<VictoryTooltip pointerLength={0}/>}
				labelRadius={10}
			/>
		</div>
	)
};

export default PieChart;