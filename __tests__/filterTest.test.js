const filter = require('../filterFunction')
test('filter test1', () => {
	expect(filter({}, function(item, index) {
		return item > 3
	})).toBe("empty object")
})
test('filter test2', () => {
	expect(filter([], function(item, index) {
		return item > 3
	})).toBe("empty array")
})
test('filter test3', () => {
	expect(filter([1, 2, 3, 8], function(item, index) {
		return item > 2
	})).toStrictEqual([3, 8])
})
test('filter test4', () => {
	expect(filter({
		'a': 1,
		'b': 5,
		'c': 3
	}, function([key, value]) {
		return value > 2
	})).toStrictEqual({
		'b': 5,
		'c': 3
	})
})
test('filter test5', () => {
	expect(filter({
		'a': 1,
		'b': 2,
		'c': 3
	})).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('filter test6', () => {
	expect(filter({
		'a': 1,
		'b': 2,
		'c': 3
	}, null)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('filter test7', () => {
	expect(filter({
		'a': 1,
		'b': 2,
		'c': 3
	}, undefined)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('filter test8', () => {
	expect(filter({
		'a': 1,
		'b': 2,
		'c': 3
	}, 'c')).toStrictEqual(3)
})
test('filter test9', () => {
	expect(filter([1, 2, 3], 2)).toStrictEqual(3)
})
test('filter test10', () => {
	expect(filter([
		[1, 5],
		[0, 3, 3]
	], function(item) {
		return item > 2
	})).toStrictEqual([
		[5],
		[3, 3]
	])
})
test('filter test11', () => {
	expect(filter([{
		'a': 1,
		'b': 3
	}, {
		'a': 7,
		'b': 3
	}], function([key, value]) {
		return value > 2
	})).toStrictEqual([{
		b: 3
	}, {
		a: 7,
		b: 3
	}])
})