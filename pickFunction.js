const _ = require("lodash")
const pick = (arr, path) => {
	if(arr instanceof Array) {
		if(arr.length === 0) {
			return 'empty array';
		} else if(arr[0] instanceof Array) {
			return _.map(arr, (a) => {
				return _.pick(a, path);
			})
		} else if(arr[0] instanceof Object) {
			return _.map(arr, item => {
				return _.pick(item, path)
			})
		} else {
			return _.pick(arr, path)
		}
	} else if(arr instanceof Object) {
		if(Object.keys(arr).length === 0) {
			return 'empty object';
		} else {
			return _.pick(arr, path);
		}
	}
}
module.exports = pick;