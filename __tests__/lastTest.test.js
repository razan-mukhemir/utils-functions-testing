const last = require('../lastFunction')
test('last test1', () => {
	expect(last({})).toBe("empty object")
})
test('last test2', () => {
	expect(last([])).toBe("empty array")
})
test('last test3', () => {
	expect(last([1, 2, 3, 'r'])).toStrictEqual('r')
})
test('last test4', () => {
	expect(last({
		a: 2,
		b: 5
	})).toStrictEqual(['b', 5])
})
test('last test5', () => {
	expect(last([
		[5, 2],
		['r', 3, 3]
	])).toStrictEqual(['r', 3, 3])
})
test('last test6', () => {
	expect(last([{
		a: 1,
		b: 'r'
	}, {
		d: 't',
		c: 5
	}])).toStrictEqual({
		d: 't',
		c: 5
	})
})