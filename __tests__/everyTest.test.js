const every = require('../everyFunction')
test('every test1', () => {
	expect(every({}, function(item, index) {
		return item > 3
	})).toBe("empty object")
})
test('every test2', () => {
	expect(every([], function(item, index) {
		return item > 3
	})).toBe("empty array")
})
test('every test3', () => {
	expect(every([1, 2, 3, 8], function(item, index) {
		return item > 0
	})).toStrictEqual(true)
})
test('every test4', () => {
	expect(every({
		'a': 1,
		'b': 5,
		'c': 3
	}, function([key, value]) {
		return value > 2
	})).toStrictEqual(false)
})
test('every test5', () => {
	expect(every({
		'a': 1,
		'b': 2,
		'c': 3
	})).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('every test6', () => {
	expect(every({
		'a': 1,
		'b': 2,
		'c': 3
	}, null)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('every test7', () => {
	expect(every({
		'a': 1,
		'b': 2,
		'c': 3
	}, undefined)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('every test8', () => {
	expect(every({
		'a': 1,
		'b': 2,
		'c': 3
	}, 'c')).toStrictEqual(3)
})
test('every test9', () => {
	expect(every([1, 2, 3], 2)).toStrictEqual(3)
})
test('every test10', () => {
	expect(every([
		[1, 2],
		[8, 3, 3]
	], function(item) {
		return item > 2
	})).toStrictEqual([false, true])
})
test('every test11', () => {
	expect(every([{
		'a': 1,
		'b': 2
	}, {
		'a': 7,
		'b': 3
	}], function([key, value]) {
		return value > 2
	})).toStrictEqual([false, true])
})