import { describe, expect, it } from '@jest/globals';
import { _arrayInsert, Arrays } from '../index.js';

describe('_arrayInsert', () => {
	it('should correctly insert single item at start, middle, and end of the array', () => {
		expect(_arrayInsert([1, 2, 3], 0, 0)).toEqual([0, 1, 2, 3]);
		expect(_arrayInsert([1, 2, 3], 1, 1.5)).toEqual([1, 1.5, 2, 3]);
		expect(_arrayInsert([1, 2, 3], -1, 4)).toEqual([1, 2, 3, 4]);
	});

	it('should correctly insert multiple items at start, middle, and end of the array', () => {
		expect(_arrayInsert([1, 2, 3], 0, -1, 0)).toEqual([-1, 0, 1, 2, 3]);
		expect(_arrayInsert([1, 2, 3], 1, 1.5, 1.75)).toEqual([1, 1.5, 1.75, 2, 3]);
		expect(_arrayInsert([1, 2, 3], -1, 4, 5)).toEqual([1, 2, 3, 4, 5]);
	});

	it('should throw a TypeError for non-array first argument', () => {
		expect(() => _arrayInsert('not an array', 0, 'item')).toThrow(TypeError);
	});

	it('should throw a TypeError for non-number second argument', () => {
		expect(() => _arrayInsert([1, 2, 3], 'not a number', 'item')).toThrow(TypeError);
	});

	it('should throw a RangeError for out of bounds index', () => {
		expect(() => _arrayInsert([1, 2, 3], 4, 'item')).toThrow(RangeError);
		expect(() => _arrayInsert([1, 2, 3], -2, 'item')).toThrow(RangeError);
	});
});

describe('Arrays.insert', () => {
	it('should correctly insert single item at start, middle, and end of the array', () => {
		expect(Arrays.insert([1, 2, 3], 0, 0)).toEqual([0, 1, 2, 3]);
		expect(Arrays.insert([1, 2, 3], 1, 1.5)).toEqual([1, 1.5, 2, 3]);
		expect(Arrays.insert([1, 2, 3], -1, 4)).toEqual([1, 2, 3, 4]);
	});

	it('should correctly insert multiple items at start, middle, and end of the array', () => {
		expect(Arrays.insert([1, 2, 3], 0, -1, 0)).toEqual([-1, 0, 1, 2, 3]);
		expect(Arrays.insert([1, 2, 3], 1, 1.5, 1.75)).toEqual([1, 1.5, 1.75, 2, 3]);
		expect(Arrays.insert([1, 2, 3], -1, 4, 5)).toEqual([1, 2, 3, 4, 5]);
	});

	it('should throw a TypeError for non-array first argument', () => {
		expect(() => Arrays.insert('not an array', 0, 'item')).toThrow(TypeError);
	});

	it('should throw a TypeError for non-number second argument', () => {
		expect(() => Arrays.insert([1, 2, 3], 'not a number', 'item')).toThrow(TypeError);
	});

	it('should throw a RangeError for out of bounds index', () => {
		expect(() => Arrays.insert([1, 2, 3], 4, 'item')).toThrow(RangeError);
		expect(() => Arrays.insert([1, 2, 3], -2, 'item')).toThrow(RangeError);
	});
});

// describe('array-insert', () => {
// 	it('should insert an item into an array', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = 2;
// 		const newItem = 6;
// 		const result = arr.insert(index, newItem);
// 		expect(result).toEqual([1, 2, 6, 3, 4, 5]);
// 	});
// });

// describe('array-insert multiple', () => {
// 	it('should insert multiple items into an array', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = 2;
// 		const newItems = [6, 7, 8];
// 		const result = arr.insert(index, ...newItems);
// 		expect(result).toEqual([1, 2, 6, 7, 8, 3, 4, 5]);
// 	});
// });

// describe('array-insert negative index', () => {
// 	it('should insert an item into an array at the end', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = -1;
// 		const newItem = 6;
// 		const result = arr.insert(index, newItem);
// 		expect(result).toEqual([1, 2, 3, 4, 6, 5]);
// 	});
// });

// describe('array-insert negative index multiple', () => {
// 	it('should insert multiple items into an array at the end', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = -1;
// 		const newItems = [6, 7, 8];
// 		const result = arr.insert(index, ...newItems);
// 		expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 5]);
// 	});
// });

// describe('array-insert', () => {
// 	it('should insert an item into an array', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = 2;
// 		const newItem = 6;
// 		const result = Arrays.insert(arr, index, newItem);
// 		expect(result).toEqual([1, 2, 6, 3, 4, 5]);
// 	});
// });

// describe('array-insert multiple', () => {
// 	it('should insert multiple items into an array', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = 2;
// 		const newItems = [6, 7, 8];
// 		const result = Arrays.insert(arr, index, ...newItems);
// 		expect(result).toEqual([1, 2, 6, 7, 8, 3, 4, 5]);
// 	});
// });

// describe('array-insert negative index', () => {
// 	it('should insert an item into an array at the end', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = -1;
// 		const newItem = 6;
// 		const result = Arrays.insert(arr, index, newItem);
// 		expect(result).toEqual([1, 2, 3, 4, 6, 5]);
// 	});
// });

// describe('array-insert negative index multiple', () => {
// 	it('should insert multiple items into an array at the end', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = -1;
// 		const newItems = [6, 7, 8];
// 		const result = Arrays.insert(arr, index, ...newItems);
// 		expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 5]);
// 	});
// });

// describe('array-insert is mutable', () => {
// 	it('should not mutate the original array', () => {
// 		const arr = [1, 2, 3, 4, 5];
// 		const index = 2;
// 		const newItem = 6;
// 		const result = Arrays.insert(arr, index, newItem);
// 		expect(result).toBe(arr);
// 	});


// });