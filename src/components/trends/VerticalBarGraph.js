'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import {composeData} from '../../utils/graphUtils';

const VerticalBarGraph = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);

	return (
		<VictoryChart theme={VictoryTheme.material} width={600} domainPadding={25}>
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true} tickFormat={(y) => `$${y}`}/>
			<VictoryBar data={composedData} labelComponent={<VictoryTooltip/>} />
		</VictoryChart>
	)
};

export default VerticalBarGraph;
