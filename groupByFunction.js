const _ = require("lodash")
const groupBy = (arr, iteratee) => {
	if(arr instanceof Array) {
		if(arr.length === 0) {
			return 'empty array';
		} else if(arr[0] instanceof Array) {
			return _.map(arr, (a) => {
				return _.groupBy(a, iteratee);
			})
		} else if(arr[0] instanceof Object) {
			return _.map(arr, item => {
				return _.groupBy(item, iteratee)
			})
		} else {
			return _.groupBy(arr, iteratee)
		}
	} else if(arr instanceof Object) {
		if(Object.keys(arr).length === 0) {
			return 'empty object';
		} else {
			return _.groupBy(arr, iteratee);
		}
	}
}
module.exports = groupBy;