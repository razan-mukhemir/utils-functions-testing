const _ = require("lodash")
const last = (arr, path) => {
	if(arr instanceof Array) {
		if(arr.length === 0) {
			return 'empty array';
		} else {
			return _.last(arr)
		}
	} else if(arr instanceof Object) {
		if(Object.keys(arr).length === 0) {
			return 'empty object';
		} else {
			return _.last(Object.entries(arr));
		}
	}
}
module.exports = last;