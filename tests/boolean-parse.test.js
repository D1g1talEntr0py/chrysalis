import _booleanParse from '../src/esm/boolean-parse.js';
import { describe, it, expect } from '@jest/globals';

describe('_booleanParse', () => {
	it('should correctly parse lowercase "true" and "false"', () => {
		expect(_booleanParse('true')).toBe(true);
		expect(_booleanParse('false')).toBe(false);
	});

	it('should correctly parse uppercase "TRUE" and "FALSE"', () => {
		expect(_booleanParse('TRUE')).toBe(true);
		expect(_booleanParse('FALSE')).toBe(false);
	});

	it('should correctly parse mixed case "True" and "False"', () => {
		expect(_booleanParse('True')).toBe(true);
		expect(_booleanParse('False')).toBe(false);
	});

	it('should throw a TypeError for non-string inputs', () => {
		expect(() => _booleanParse(123)).toThrow(TypeError);
		expect(() => _booleanParse(null)).toThrow(TypeError);
		expect(() => _booleanParse(undefined)).toThrow(TypeError);
	});

	it('should throw a TypeError for strings not equal to "true" or "false"', () => {
		expect(() => _booleanParse('not a boolean')).toThrow(TypeError);
	});
});
