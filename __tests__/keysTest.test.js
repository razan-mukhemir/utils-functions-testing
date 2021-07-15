const keys = require('../keysFunction')
test('keys test1', () => {
	expect(keys({})).toBe("empty object")
})
test('keys test2', () => {
	expect(keys([])).toBe("empty array")
})
test('keys test3', () => {
	expect(keys([1, 2, 3, 8])).toStrictEqual(['0', '1', '2', '3'])
})
test('keys test4', () => {
	expect(keys({
		a: 2,
		b: 'o'
	})).toStrictEqual(['a', 'b'])
})
test('keys test5', () => {
	expect(keys([
		[1, 2],
		[0, 3, 3]
	])).toStrictEqual([
		['0', '1'],
		['0', '1', '2']
	])
})
test('keys test6', () => {
	expect(keys([{
		'a': 1,
		'b': 2
	}, {
		'a': 7,
		'c': 3
	}])).toStrictEqual([
		['a', 'b'],
		['a', 'c']
	])
})