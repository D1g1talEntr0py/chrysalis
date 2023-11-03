import { describe, expect, it } from '@jest/globals';
import { Arrays } from '../index.js';

describe('array-is-empty', () => {
	it('should return true for an empty array', () => {
		const arr = [];
		const result = Arrays.isEmpty(arr);
		expect(result).toBe(true);
	});
});

describe('array-is-empty not empty', () => {
	it('should return false for a non-empty array', () => {
		const arr = [1];
		const result = Arrays.isEmpty(arr);
		expect(result).toBe(false);
	});
});

describe('array-is-empty not array', () => {
	it('should return false for a non-array', () => {
		const arr = 1;
		const result = Arrays.isEmpty(arr);
		expect(result).toBe(false);
	});
});