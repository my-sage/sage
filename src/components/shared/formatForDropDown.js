export function formatForDropDown(array) {

	return array.map(element => {
		return {
			value: element.id,
			text: element.name
		}
	});
}