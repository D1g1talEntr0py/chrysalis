import { describe, expect, it, jest } from '@jest/globals';
import _debounce from '../src/esm/debounce.js';

describe('_debounce', () => {
	it('should debounce a function', () => {
		const fn = jest.fn();
		const debounced = _debounce(fn, 100);

		debounced();
		debounced();
		debounced();

		expect(fn).toHaveBeenCalledTimes(0);

		jest.advanceTimersByTime(100);

		expect(fn).toHaveBeenCalledTimes(1);
	});

	it('should debounce a function with leading execution', () => {
		const fn = jest.fn();
		const debounced = _debounce(fn, 100, true);

		debounced();
		debounced();
		debounced();

		expect(fn).toHaveBeenCalledTimes(1);

		jest.advanceTimersByTime(100);

		expect(fn).toHaveBeenCalledTimes(1);
	});

	it('should debounce a function with arguments', () => {
		const fn = jest.fn();
		const debounced = _debounce(fn, 100);

		debounced(1, 'a');
		debounced(2, 'b');
		debounced(3, 'c');

		expect(fn).toHaveBeenCalledTimes(0);

		jest.advanceTimersByTime(100);

		expect(fn).toHaveBeenCalledTimes(1);
		expect(fn).toHaveBeenCalledWith(3, 'c');
	});

	it('should debounce a function with leading execution and arguments', () => {
		const fn = jest.fn();
		const debounced = _debounce(fn, 100, true);

		debounced(1, 'a');
		debounced(2, 'b');
		debounced(3, 'c');

		expect(fn).toHaveBeenCalledTimes(1);
		expect(fn).toHaveBeenCalledWith(1, 'a');

		jest.advanceTimersByTime(100);

		expect(fn).toHaveBeenCalledTimes(1);
	});
});