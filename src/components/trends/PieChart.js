'use strict';

import React from 'react';
import {VictoryChart, VictoryPie, VictoryTooltip} from 'victory';
import composeData from '../../utils/graphUtils';

const PieChart = ({data, groupBy}) =>{
	const composedData = composeData(groupBy)(data);
	return (
		<VictoryChart>
			<VictoryPie/>
		</VictoryChart>
	)
};