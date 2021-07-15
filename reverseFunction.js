const _ = require("lodash")
const reverse = (arr) => {
	if(arr instanceof Array) {
		if(arr.length === 0) {
			return 'empty array';
		} else {
			return _.reverse(arr)
		}
	} else if(arr instanceof Object) {
		if(Object.keys(arr).length === 0) {
			return 'empty object';
		} else {
			return Object.fromEntries(_.reverse(Object.entries(arr)));
		}
	}
}
module.exports = reverse;