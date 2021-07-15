const findIndex = require('../findIndexFunction')
test('findIndex test1', () => {
	expect(findIndex({}, function(item, index) {
		return item > 3
	})).toBe("empty object")
})
test('findIndex test2', () => {
	expect(findIndex([], function(item, index) {
		return item > 3
	})).toBe("empty array")
})
test('findIndex test3', () => {
	expect(findIndex([1, 2, 3, 8], function(item, index) {
		return item > 2
	})).toStrictEqual(2)
})
test('findIndex test4', () => {
	expect(findIndex({
		'a': 1,
		'b': 5,
		'c': 3
	}, function([key, value]) {
		return value > 2
	})).toStrictEqual(1)
})
test('findIndex test5', () => {
	expect(findIndex({
		'a': 1,
		'b': 2,
		'c': 3
	})).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('findIndex test6', () => {
	expect(findIndex({
		'a': 1,
		'b': 2,
		'c': 3
	}, null)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('findIndex test7', () => {
	expect(findIndex({
		'a': 1,
		'b': 2,
		'c': 3
	}, undefined)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('findIndex test8', () => {
	expect(findIndex({
		'a': 1,
		'b': 2,
		'c': 3
	}, 'c')).toStrictEqual(3)
})
test('findIndex test9', () => {
	expect(findIndex([1, 2, 3], 2)).toStrictEqual(3)
})
test('findIndex test10', () => {
	expect(findIndex([
		[1, 2],
		[0, 3, 3]
	], function(item) {
		return item > 2
	})).toStrictEqual([-1, 1])
})
test('findIndex test11', () => {
	expect(findIndex([{
		'a': 1,
		'b': 2
	}, {
		'a': 7,
		'b': 3
	}], function([key, value]) {
		return value > 2
	})).toStrictEqual([-1, 0])
})