const _ = require("lodash")
const some = (arr, predicate) => {
	if(predicate == null || predicate == undefined) {
		return arr
	};
	if(typeof predicate == 'function') {
		if(arr instanceof Array) {
			if(arr.length === 0) {
				return 'empty array';
			} else if(arr[0] instanceof Array) {
				return _.map(arr, (a) => {
					return _.some(a, predicate);
				})
			} else if(arr[0] instanceof Object) {
				return _.map(arr, item => {
					return _.some(Object.entries(item), predicate)
				})
			} else {
				return _.some(arr, predicate)
			}
		} else if(arr instanceof Object) {
			if(Object.keys(arr).length === 0) {
				return 'empty object';
			} else {
				return _.some(Object.entries(arr), predicate);
			}
		}
	} else {
		return arr[predicate];
	}
}
module.exports = some;