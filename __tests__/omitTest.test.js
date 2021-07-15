const omit = require('../omitFunction')
test('omit test1', () => {
	expect(omit({})).toBe("empty object")
})
test('omit test2', () => {
	expect(omit([])).toBe("empty array")
})
test('omit test3', () => {
	expect(omit([1, 2, 3, 'r'], [0, 3])).toStrictEqual({
		'1': 2,
		'2': 3
	})
})
test('omit test4', () => {
	expect(omit({
		a: 2,
		b: 'o'
	}, ['b'])).toStrictEqual({
		a: 2
	})
})
test('omit test5', () => {
	expect(omit([
		[5, 2],
		['r', 3, 3]
	], [0])).toStrictEqual([{
		'1': 2
	}, {
		'1': 3,
		'2': 3
	}])
})
test('omit test6', () => {
	expect(omit([{
		a: 1,
		b: 'r'
	}, {
		d: 't',
		c: 5
	}], ['b', 'c'])).toStrictEqual([{
		a: 1
	}, {
		d: 't'
	}])
})