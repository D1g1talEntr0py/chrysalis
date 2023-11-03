import _type from '../src/esm/object-type.js';
import { describe, expect, test } from '@jest/globals';

describe('_type', () => {
	test('returns String for strings', () => {
		expect(_type('hello')).toBe(String);
	});

	test('returns Number for numbers', () => {
		expect(_type(123)).toBe(Number);
	});

	test('returns Boolean for booleans', () => {
		expect(_type(true)).toBe(Boolean);
	});

	test('returns Array for arrays', () => {
		expect(_type([1, 2, 3])).toBe(Array);
	});

	test('returns Object for plain objects', () => {
		expect(_type({ foo: 'bar' })).toBe(Object);
	});

	test('returns null for null', () => {
		expect(_type(null)).toBe(null);
	});

	test('returns undefined for undefined', () => {
		expect(_type(undefined)).toBe(undefined);
	});

	test('returns Object for constructor-less objects', () => {
		const constructorLessObject = Object.create(null);
		expect(_type(constructorLessObject)).toBe(Object);
	});

	test('returns Function for functions', () => {
		expect(_type(() => { })).toBe(Function);
	});

	test('returns Symbol for symbols', () => {
		const symbol = Symbol('symbol');
		expect(_type(symbol)).toBe(Symbol);
	});
});