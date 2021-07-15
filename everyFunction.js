const _ = require("lodash")
const every = (arr, predicate) => {
	if(predicate == null || predicate == undefined) {
		return arr
	};
	if(typeof predicate == 'function') {
		if(arr instanceof Array) {
			if(arr.length === 0) {
				return 'empty array';
			} else if(arr[0] instanceof Array) {
				return _.map(arr, (a) => {
					return _.every(a, predicate);
				})
			} else if(arr[0] instanceof Object) {
				return _.map(arr, item => {
					return _.every(Object.entries(item), predicate)
				})
			} else {
				return _.every(arr, predicate)
			}
		} else if(arr instanceof Object) {
			if(Object.keys(arr).length === 0) {
				return 'empty object';
			} else {
				return _.every(Object.entries(arr), predicate);
			}
		}
	} else {
		return arr[predicate];
	}
}
module.exports = every;