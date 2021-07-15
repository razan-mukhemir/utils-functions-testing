const values = require('../valuesFunction')
test('values test1', () => {
	expect(values({})).toBe("empty object")
})
test('values test2', () => {
	expect(values([])).toBe("empty array")
})
test('values test3', () => {
	expect(values([1, 2, 3, 's'])).toStrictEqual([1, 2, 3, 's'])
})
test('values test4', () => {
	expect(values({
		a: 2,
		b: 'o'
	})).toStrictEqual([2, 'o'])
})
test('values test5', () => {
	expect(values([
		[1, 2],
		[0, 2, 'r']
	])).toStrictEqual([
		[1, 2],
		[0, 2, 'r']
	])
})
test('values test6', () => {
	expect(values([{
		'a': 1,
		'b': 2
	}, {
		'a': 7,
		'c': 'r'
	}])).toStrictEqual([
		[1, 2],
		[7, 'r']
	])
})