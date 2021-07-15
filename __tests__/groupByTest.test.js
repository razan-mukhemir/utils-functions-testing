const groupBy = require('../groupByFunction')
test('groupBy test1', () => {
	expect(groupBy({})).toBe("empty object")
})
test('groupBy test2', () => {
	expect(groupBy([])).toBe("empty array")
})
test('groupBy test3', () => {
	expect(groupBy([1, 2, 3, 'r'], function(item) {
		return item % 2 == 0
	})).toStrictEqual({
		false: [1, 3, 'r'],
		true: [2]
	})
})
test('groupBy test4', () => {
	expect(groupBy({
		a: 1,
		b: 2,
		c: 7
	}, function(item) {
		return item % 2 == 1
	})).toStrictEqual({
		true: [1, 7],
		false: [2]
	})
})
test('groupBy test5', () => {
	expect(groupBy([
		[1, 3, 4],
		[2, 5, 7]
	], function(item) {
		return item % 2 == 1
	})).toStrictEqual([{
		true: [1, 3],
		false: [4]
	}, {
		false: [2],
		true: [5, 7]
	}])
})
test('groupBy test6', () => {
	expect(groupBy([{
		a: 1,
		b: 2,
		c: 7
	}, {
		a: 3,
		b: 2,
		c: 7
	}], function(item) {
		return item % 2 == 1
	})).toStrictEqual([{
		true: [1, 7],
		false: [2]
	}, {
		true: [3, 7],
		false: [2]
	}])
})