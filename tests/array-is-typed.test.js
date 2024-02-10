import Arrays from '../src/esm/arrays.js';
import { describe, it, expect } from '@jest/globals';

describe('_isTypedArray', () => {
	it('should return true for typed arrays', () => {
		expect(Arrays.isTyped(new Uint8Array())).toBe(true);
		expect(Arrays.isTyped(new Int32Array())).toBe(true);
		expect(Arrays.isTyped(new Float64Array())).toBe(true);
	});

	it('should return false for non-typed arrays', () => {
		expect(Arrays.isTyped([])).toBe(false);
		expect(Arrays.isTyped(new Array(10))).toBe(false);
		expect(Arrays.isTyped(new DataView(new ArrayBuffer(10)))).toBe(false);
	});

	it('should return false for non-array types', () => {
		expect(Arrays.isTyped({})).toBe(false);
		expect(Arrays.isTyped(123)).toBe(false);
		expect(Arrays.isTyped('string')).toBe(false);
		expect(Arrays.isTyped(null)).toBe(false);
		expect(Arrays.isTyped(undefined)).toBe(false);
	});
});