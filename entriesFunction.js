const _ = require("lodash")
const entries = (list) => {
	if(list instanceof Array) {
		if(list.length === 0) {
			return 'empty array';
		} else if(list[0] instanceof Array) {
			return _.map(list, (a) => {
				return _.entries(a);
			})
		} else if(list[0] instanceof Object) {
			return _.map(list, item => {
				return _.entries(item)
			})
		} else {
			return _.entries(list)
		}
	} else if(list instanceof Object) {
		if(Object.keys(list).length === 0) {
			return 'empty object';
		} else {
			return _.entries(list);
		}
	}
}
module.exports = entries;