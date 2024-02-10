import _template from '../src/esm/string-template.js';
import { describe, expect, it } from '@jest/globals';

describe('_template', () => {
	it('should interpolate values correctly', () => {
		const template = _template`Hello, ${0}!`;
		expect(template('World')).toBe('Hello, World!');
	});

	it('should handle multiple values', () => {
		const template = _template`Hello, ${0}! Today is ${1}.`;
		expect(template('John', 'Monday')).toBe('Hello, John! Today is Monday.');
	});

	it('should handle object values', () => {
		const template = _template`Hello, ${'name'}! Today is ${'day'}.`;
		expect(template({ name: 'John', day: 'Monday' })).toBe('Hello, John! Today is Monday.');
	});

	it('should handle mixed values', () => {
		const template = _template`Hello, ${0}! Today is ${'day'}.`;
		expect(template('John', { day: 'Monday' })).toBe('Hello, John! Today is Monday.');
	});

	it('should handle missing values', () => {
		const template = _template`Hello, ${0}! Today is ${1}.`;
		expect(template('John')).toBe('Hello, John! Today is undefined.');
	});

	it('should handle null values', () => {
		const template = _template`Hello, ${0}! Today is ${1}.`;
		expect(template('John', null)).toBe('Hello, John! Today is null.');
	});
});