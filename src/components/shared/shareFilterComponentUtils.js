import { curry } from 'ramda';
import moment from 'moment';

export const updateInstanceState = curry(function(context, event) {
		const coerceToInt = (maybeInt) => isNaN(+maybeInt) ? maybeInt : +maybeInt;
		console.log('event name',event.target.name)
		const field = event.target.name;
		let instance = context.state.instance;
		instance[field] = event.target.value;
		return context.setState({instance: instance});
	})

export const updateStartDate = curry(function(context,value) {
	let instance = context.state.instance;
	instance.startDate = value;
	return context.setState({instance: instance})
})

export const updateEndDate = curry(function(context,value) {
	let instance = context.state.instance;
	instance.endDate = value;
	return context.setState({endDate: value})
})

export function queryUrl (context) {
	let {categoryId, merchantId,startDate, endDate} = context.state.instance;
		context.props.actions.getAllTransactions
		let strCategory,strStart,strEnd;
		let filterUrl="";
		if(categoryId){
			filterUrl +=("?" +"categoryId="+categoryId);
		}else{
			filterUrl +=("?" +"categoryId=");
		} 
		if(merchantId){
			filterUrl +=("&merchantId="+merchantId);
		}		
		if(startDate){
			filterUrl += ("&startDate="+moment(startDate).valueOf());
		}
		if(endDate){
			filterUrl += ("&endDate="+moment(endDate).valueOf());
		}
	return filterUrl;
}

