const _ = require("lodash")
const values = (arr) => {
	if(arr instanceof Array) {
		if(arr.length === 0) {
			return 'empty array';
		} else if(arr[0] instanceof Array) {
			return _.map(arr, (a) => {
				return _.values(a);
			})
		} else if(arr[0] instanceof Object) {
			return _.map(arr, item => {
				return _.values(item)
			})
		} else {
			return _.values(arr)
		}
	} else if(arr instanceof Object) {
		if(Object.keys(arr).length === 0) {
			return 'empty object';
		} else {
			return _.values(arr);
		}
	}
}
module.exports = values;