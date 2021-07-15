const _ = require("lodash")
const keys = (arr) => {
	if(arr instanceof Array) {
		if(arr.length === 0) {
			return 'empty array';
		} else if(arr[0] instanceof Array) {
			return _.map(arr, (a) => {
				return _.keys(a);
			})
		} else if(arr[0] instanceof Object) {
			return _.map(arr, item => {
				return _.keys(item)
			})
		} else {
			return _.keys(arr)
		}
	} else if(arr instanceof Object) {
		if(Object.keys(arr).length === 0) {
			return 'empty object';
		} else {
			return _.keys(arr);
		}
	}
}
module.exports = keys;