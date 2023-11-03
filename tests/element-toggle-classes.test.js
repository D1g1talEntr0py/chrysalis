import { afterEach, beforeEach, describe, expect, it } from '@jest/globals';
import { JSDOM } from 'jsdom';
import _toggleElementClasses from '../src/esm/element-toggle-classes.js';

describe('_toggleElementClasses', () => {
	let document;
	let element;

	beforeEach(() => {
		({ document } = new JSDOM().window);
		element = document.createElement('div');
	});

	afterEach(() => {
		element.remove();
		element = null;
	});

	it('should add a class to an element', () => {
		_toggleElementClasses(element, 'foo');

		expect(element.classList.contains('foo')).toBe(true);
	});

	it('should remove a class from an element', () => {
		element.classList.add('foo');

		_toggleElementClasses(element, 'foo');

		expect(element.classList.contains('foo')).toBe(false);
	});

	it('should add a class to an element and remove a class from an element', () => {
		element.classList.add('foo');

		_toggleElementClasses(element, { 'foo': false }, 'bar');

		expect(element.classList.contains('foo')).toBe(false);
		expect(element.classList.contains('bar')).toBe(true);
	});
});