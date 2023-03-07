import { _isIterable } from '../modules';
import { describe, it, expect } from '@jest/globals';

describe('_isIterable', () => {
	it('should return true for an array', () => {
		expect(_isIterable([])).toBe(true);
	});

	it('should return true for a map', () => {
		expect(_isIterable(new Map())).toBe(true);
	});

	it('should return true for a set', () => {
		expect(_isIterable(new Set())).toBe(true);
	});

	it('should return true for a string', () => {
		expect(_isIterable('')).toBe(true);
	});

	it('should return false for an object', () => {
		expect(_isIterable({})).toBe(false);
	});

	it('should return false for null', () => {
		expect(_isIterable(null)).toBe(false);
	});

	it('should return false for undefined', () => {
		expect(_isIterable(undefined)).toBe(false);
	});
});