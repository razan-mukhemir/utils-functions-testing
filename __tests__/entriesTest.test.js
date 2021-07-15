const entries = require('../entriesFunction')
test('entries test1', () => {
	expect(entries({})).toBe("empty object")
})
test('entries test2', () => {
	expect(entries([])).toBe("empty array")
})
test('entries test3', () => {
	expect(entries([1, 2, 'i'])).toStrictEqual([
		['0', 1],
		['1', 2],
		['2', 'i']
	])
})
test('entries test4', () => {
	expect(entries({
		a: 2,
		b: 'o'
	})).toStrictEqual([
		['a', 2],
		['b', 'o']
	])
})
test('entries test5', () => {
	expect(entries([
		[1, 2],
		['i', 'r']
	])).toStrictEqual([
		[
			['0', 1],
			['1', 2]
		],
		[
			['0', 'i'],
			['1', 'r']
		]
	])
})
test('entries test6', () => {
	expect(entries([{
		'a': 1,
		'b': 't'
	}, {
		'c': 'razan'
	}])).toStrictEqual([
		[
			['a', 1],
			['b', 't']
		],
		[
			['c', 'razan']
		]
	])
})