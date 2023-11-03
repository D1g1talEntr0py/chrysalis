import { describe, expect, it } from '@jest/globals';
import { Arrays } from '../index.js';

describe('array-remove', () => {
	it('should remove an item from an array', () => {
		const arr = [1, 2, 3, 4, 5];
		const index = 2;
		const result = Arrays.remove(arr, index);
		expect(result).toEqual([1, 2, 4, 5]);
	});
});

describe('array-remove multiple', () => {
	it('should remove multiple items from an array', () => {
		const arr = [1, 2, 3, 4, 5];
		const index = 2;
		const result = Arrays.remove(arr, index, 3);
		expect(result).toEqual([1, 2, 5]);
	});
});

describe('array-remove negative index', () => {
	it('should remove an item from an array at the end', () => {
		const arr = [1, 2, 3, 4, 5];
		const index = -1;
		const result = Arrays.remove(arr, index);
		expect(result).toEqual([1, 2, 3, 4]);
	});
});