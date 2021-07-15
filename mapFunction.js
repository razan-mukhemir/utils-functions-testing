const _ = require("lodash")
const map = (arr, mapper) => {
	if(mapper == null || mapper == undefined) {
		return arr
	};
	if(typeof mapper == 'function') {
		if(arr instanceof Array) {
			if(arr.length === 0) {
				return 'empty array';
			} else if(arr[0] instanceof Array) {
				return _.map(arr, (a) => {
					return _.map(a, mapper);
				})
			} else if(arr[0] instanceof Object) {
				return _.map(arr, item => {
					return Object.fromEntries(_.map(Object.entries(item),
						([k, v], i) => [k, mapper(v, k, i)]))
				})
			} else {
				return _.map(arr, mapper)
			}
		} else if(arr instanceof Object) {
			if(Object.keys(arr).length === 0) {
				return 'empty object';
			} else {
				return Object.fromEntries(_.map(Object.entries(arr),
					([k, v], i) => [k, mapper(v, k, i)]))
			}
		}
	} else {
		return arr[mapper];
	}
}
module.exports = map;