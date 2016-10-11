'use strict';

import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme} from 'victory';
import composeData from '../../utils/graphUtils';
import R from 'ramda';
import moment from 'moment';

const VerticalBarGraph = ({data, groupBy}) => {
	const composedData = composeData(groupBy)(data);
	return (
		<VictoryChart theme={VictoryTheme.material} width={600} scale={{x: "time"}}>
			<VictoryAxis fixLabelOverlap={true}/>
			<VictoryAxis dependentAxis={true}/>
			<VictoryBar data={composedData}/>
		</VictoryChart>
	)
};

export default VerticalBarGraph;
