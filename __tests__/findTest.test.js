const find = require('../findFunction')
test('find test1', () => {
	expect(find({}, function(item, index) {
		return item > 3
	})).toBe("empty object")
})
test('find test2', () => {
	expect(find([], function(item, index) {
		return item > 3
	})).toBe("empty array")
})
test('find test3', () => {
	expect(find([1, 2, 3, 8], function(item, index) {
		return item > 2
	})).toStrictEqual(3)
})
test('find test4', () => {
	expect(find({
		'a': 1,
		'b': 5,
		'c': 3
	}, function([key, value]) {
		return value > 2
	})).toStrictEqual(['b', 5])
})
test('find test5', () => {
	expect(find({
		'a': 1,
		'b': 2,
		'c': 3
	})).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('find test6', () => {
	expect(find({
		'a': 1,
		'b': 2,
		'c': 3
	}, null)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('find test7', () => {
	expect(find({
		'a': 1,
		'b': 2,
		'c': 3
	}, undefined)).toStrictEqual({
		'a': 1,
		'b': 2,
		'c': 3
	})
})
test('find test8', () => {
	expect(find({
		'a': 1,
		'b': 2,
		'c': 3
	}, 'c')).toStrictEqual(3)
})
test('find test9', () => {
	expect(find([1, 2, 3], 2)).toStrictEqual(3)
})
test('find test10', () => {
	expect(find([
		[1, 2],
		[0, 3, 3]
	], function(item) {
		return item > 2
	})).toStrictEqual([undefined, 3])
})
test('find test11', () => {
	expect(find([{
		'a': 1,
		'b': 2
	}, {
		'a': 7,
		'b': 3
	}], function([key, value]) {
		return value > 2
	})).toStrictEqual([undefined, ['a', 7]])
})