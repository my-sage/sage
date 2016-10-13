export function formatForDropDown(array) {
	console.log('i am getting in here', array)
	return array.map(element => {
		return {
			value: element.id,
			text: element.name
		}
	});
}