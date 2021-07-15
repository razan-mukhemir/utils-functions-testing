const reverse = require('../reverseFunction')
test('reverse test1', () => {
	expect(reverse({})).toBe("empty object")
})
test('reverse test2', () => {
	expect(reverse([])).toBe("empty array")
})
test('reverse test3', () => {
	expect(reverse([1, 2, 3, 'r'])).toStrictEqual(['r', 3, 2, 1])
})
test('reverse test4', () => {
	expect(reverse({
		a: 2,
		b: 'o'
	})).toStrictEqual({
		b: 'o',
		a: 2
	})
})
test('reverse test5', () => {
	expect(reverse([
		[5, 2],
		['r', 3, 3]
	])).toStrictEqual([
		['r', 3, 3],
		[5, 2]
	])
})
test('reverse test6', () => {
	expect(reverse([{
		a: 1,
		b: 'r'
	}, {
		d: 't',
		c: 5
	}])).toStrictEqual([{
		d: 't',
		c: 5
	}, {
		a: 1,
		b: 'r'
	}])
})