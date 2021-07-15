const some = require('../someFunction')
test('some test1', () => {
	expect(some({}, function(item, index) {
		return item > 3
	})).toBe("empty object")
})
test('some test2', () => {
	expect(some([], function(item, index) {
		return item > 3
	})).toBe("empty array")
})
test('some test3', () => {
	expect(some([1, 2, 3, 8], function(item, index) {
		return item > 2
	})).toStrictEqual(true)
})
test('some test4', () => {
	expect(some({
		'a': 1,
		'b': 5,
		'c': 3
	}, function([key, value]) {
		return value > 2
	})).toStrictEqual(true)
})
test('some test5', () => {
	expect(some({
		'a': 1,
		'b': 2,
		'c': 3
	})).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('some test6', () => {
	expect(some({
		'a': 1,
		'b': 2,
		'c': 3
	}, null)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('some test7', () => {
	expect(some({
		'a': 1,
		'b': 2,
		'c': 3
	}, undefined)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('some test8', () => {
	expect(some({
		'a': 1,
		'b': 2,
		'c': 3
	}, 'c')).toStrictEqual(3)
})
test('some test9', () => {
	expect(some([1, 2, 3], 2)).toStrictEqual(3)
})
test('some test10', () => {
	expect(some([
		[1, 2],
		[0, 3, 3]
	], function(item) {
		return item > 2
	})).toStrictEqual([false, true])
})
test('some test11', () => {
	expect(some([{
		'a': 1,
		'b': 2
	}, {
		'a': 7,
		'b': 3
	}], function([key, value]) {
		return value > 2
	})).toStrictEqual([false, true])
})