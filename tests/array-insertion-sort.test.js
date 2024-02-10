import Arrays from '../src/esm/arrays.js';
import { describe, it, expect } from '@jest/globals';

describe('_insertionSort', () => {
	it('should correctly sort an array of integers', () => {
		const unsortedArray = [5, 3, 8, 4, 2];
		const sortedArray = [2, 3, 4, 5, 8];
		expect(Arrays.insertionSort(unsortedArray)).toEqual(sortedArray);
	});

	it('should return an empty array when given an empty array', () => {
		expect(Arrays.insertionSort([])).toEqual([]);
	});

	it('should handle arrays with one element', () => {
		expect(Arrays.insertionSort([5])).toEqual([5]);
	});

	it('should handle arrays with duplicate elements', () => {
		const unsortedArray = [5, 3, 5, 4, 2, 2];
		const sortedArray = [2, 2, 3, 4, 5, 5];
		expect(Arrays.insertionSort(unsortedArray)).toEqual(sortedArray);
	});
});