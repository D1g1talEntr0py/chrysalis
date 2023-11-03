import _defineProperties from '../src/esm/define-properties.js';
import { describe, test, expect } from '@jest/globals';

describe('_defineProperties', () => {
	test('defines new properties correctly', () => {
		const obj = {};
		_defineProperties(obj, { a: 1, b: 2 }, { enumerable: true });
		expect(obj).toStrictEqual({ a: 1, b: 2 });
	});

	test('overrides existing properties if override is set to true', () => {
		const obj = { a: 1 };
		_defineProperties(obj, { a: 2 }, { enumerable: true }, true);
		expect(obj).toEqual({ a: 2 });
	});

	test('does not override existing properties if override is set to false', () => {
		const obj = { a: 1 };
		_defineProperties(obj, { a: 2 }, {}, false);
		expect(obj).toEqual({ a: 1 });
	});

	test('throws TypeError if first argument is not an object', () => {
		expect(() => {
			_defineProperties(null, {});
		}).toThrow(TypeError);
	});

	test('throws TypeError if second argument is not an object', () => {
		expect(() => {
			_defineProperties({}, null);
		}).toThrow(TypeError);
	});
});
