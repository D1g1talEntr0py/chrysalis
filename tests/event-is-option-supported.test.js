import { describe, expect, test } from '@jest/globals';
import _isOptionSupported from '../src/esm/event-is-option-supported.js';

describe('_isOptionSupported', () => {
	test('it should return true for supported options', () => {
		// 'capture' is a widely supported option
		expect(_isOptionSupported('capture')).toBe(true);
		expect(_isOptionSupported('once')).toBe(true);
		expect(_isOptionSupported('passive')).toBe(true);
	});

	test('it should return false for unsupported options', () => {
		// 'fakeOption' is not a standard option
		expect(_isOptionSupported('fakeOption')).toBe(false);
		expect(_isOptionSupported('signal')).toBe(false);
	});

	test('it should not throw an error for any input', () => {
		expect(() => _isOptionSupported('anotherFakeOption')).not.toThrow();
	});
});