const pick = require('../pickFunction')
test('pick test1', () => {
	expect(pick({})).toBe("empty object")
})
test('pick test2', () => {
	expect(pick([])).toBe("empty array")
})
test('pick test3', () => {
	expect(pick([1, 2, 3, 'r'], [0, 3])).toStrictEqual({
		'0': 1,
		'3': 'r'
	})
})
test('pick test4', () => {
	expect(pick({
		a: 2,
		b: 'o'
	}, ['b'])).toStrictEqual({
		'b': 'o'
	})
})
test('pick test5', () => {
	expect(pick([
		[5, 2],
		['r', 3, 3]
	], [0])).toStrictEqual([{
		'0': 5
	}, {
		'0': 'r'
	}])
})
test('pick test6', () => {
	expect(pick([{
		'a': 1,
		'b': 'r'
	}, {
		'a': 7,
		'c': 3
	}], ['b', 'c'])).toStrictEqual([{
		b: 'r'
	}, {
		c: 3
	}])
})