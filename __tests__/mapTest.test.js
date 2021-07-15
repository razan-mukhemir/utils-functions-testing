const map = require('../mapFunction')
test('map test1', () => {
	expect(map({}, function(item, index) {
		return item * 3
	})).toBe("empty object")
})
test('map test2', () => {
	expect(map([], function(item, index) {
		return item * 3
	})).toBe("empty array")
})
test('map test3', () => {
	expect(map([1, 2, 3], function(item, index) {
		return item * 3
	})).toStrictEqual([3, 6, 9])
})
test('map test4', () => {
	expect(map({
		'a': 1,
		'b': 2,
		'c': 3
	}, function(item, index) {
		return item * 3
	})).toStrictEqual({
		'a': 3,
		'b': 6,
		'c': 9
	})
})
test('map test5', () => {
	expect(map({
		'a': 1,
		'b': 2,
		'c': 3
	})).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('map test6', () => {
	expect(map({
		'a': 1,
		'b': 2,
		'c': 3
	}, null)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('map test7', () => {
	expect(map({
		'a': 1,
		'b': 2,
		'c': 3
	}, undefined)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('map test8', () => {
	expect(map({
		'a': 1,
		'b': 2,
		'c': 3
	}, 'c')).toStrictEqual(3)
})
test('map test9', () => {
	expect(map([1, 2, 3], 2)).toStrictEqual(3)
})
test('map test10', () => {
	expect(map([
		[1, 2],
		[3, 3]
	], function(item) {
		return item * 3
	})).toStrictEqual([
		[3, 6],
		[9, 9]
	])
})
test('map test11', () => {
	expect(map([{
		'a': 1,
		'b': 3
	}, {
		'a': 1,
		'b': 3
	}], function(item) {
		return item * 3
	})).toStrictEqual([{
		a: 3,
		b: 9
	}, {
		a: 3,
		b: 9
	}])
})