'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';
import composeData from '../../utils/graphUtils';
import R from 'ramda';
import moment from 'moment';

const VerticalBarGraph = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	return (
		<VictoryChart theme={VictoryTheme.material} width={600} scale={{x: "time"}} domainPadding={25}>
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true}/>
			<VictoryBar data={composedData} colorScale={"qualitative"} labelComponent={<VictoryTooltip/>}/>
		</VictoryChart>
	)
};

export default VerticalBarGraph;
