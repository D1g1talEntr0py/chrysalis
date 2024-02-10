import _memoize from '../src/esm/memoize.js';
import { jest, describe, it, expect } from '@jest/globals';

describe('_memoize', () => {
	it('should memoize a function', () => {
		const fn = jest.fn(() => Math.random());
		const memoized = _memoize(fn);
		memoized(1);
		memoized(1);
		memoized(2);
		memoized(2);
		expect(fn).toHaveBeenCalledTimes(2);
	});

	it('should memoize a function with a custom capacity', () => {
		const fn = jest.fn(() => Math.random());
		const memoized = _memoize(fn, 2);
		memoized(1, { a: 1 });
		memoized(3);
		memoized(1, { a: 1 });
		memoized(2);
		memoized(3);
		memoized(2);
		memoized(4);
		expect(fn).toHaveBeenCalledTimes(5);
	});

	it('should memoize a function with a custom capacity', () => {
		const fn = jest.fn(() => Math.random());
		const memoized = _memoize(fn, 10);
		memoized(1, { a: 1 });
		memoized(3);
		memoized(1, { a: 1 });
		memoized(2);
		memoized(3);
		memoized(2);
		memoized(4);
		expect(fn).toHaveBeenCalledTimes(4);
	});

	it('should memoize a function with a custom capacity', () => {
		const fn = jest.fn(() => Math.random());
		const memoized = _memoize(fn, 2);
		memoized(1, { a: 1 });
		memoized(1, { a: 1 });
		memoized(2);
		memoized(2);
		memoized(3);
		memoized(3);
		memoized(4);
		expect(fn).toHaveBeenCalledTimes(4);
	});

	it('should memoize a function with a custom capacity', () => {
		const fn = jest.fn(() => Math.random());
		const memoized = _memoize(fn, 10);
		memoized(1, { a: 1 });
		memoized(3);
		memoized(1, { a: 1 });
		memoized(2);
		memoized(3);
		memoized(2);
		memoized(4);
		expect(fn).toHaveBeenCalledTimes(4);
	});
});
