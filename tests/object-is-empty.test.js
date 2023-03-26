import _objectIsEmpty from '../src/esm/object-is-empty.js';
import { test, expect } from '@jest/globals';

test('objectIsEmpty', () => {
	expect(_objectIsEmpty({})).toBe(true);
	expect(_objectIsEmpty({a: 1})).toBe(false);
	expect(_objectIsEmpty([])).toBe(false);
	expect(_objectIsEmpty('')).toBe(false);
	expect(_objectIsEmpty(0)).toBe(false);
	expect(_objectIsEmpty(null)).toBe(false);
	expect(_objectIsEmpty(undefined)).toBe(false);
	expect(_objectIsEmpty(false)).toBe(false);
	expect(_objectIsEmpty(true)).toBe(false);
});