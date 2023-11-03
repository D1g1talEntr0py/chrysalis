import _elementSiblings from '../src/esm/element-siblings.js';
import { beforeEach, describe, it, expect } from '@jest/globals';
import { JSDOM } from 'jsdom';

describe('_elementSiblings', () => {
	let document;
	let container;

	beforeEach(() => {
		({ document } = new JSDOM(`
      <div id="container">
        <div id="el1" class="red"></div>
        <div id="el2" class="blue"></div>
        <div id="el3" class="red"></div>
        <div id="el4" class="blue"></div>
      </div>
    `).window);

		container = document.querySelector('#container');
	});

	it('should return all siblings', () => {
		const element = document.querySelector('#el1');
		const siblings = _elementSiblings(element);

		expect(siblings.length).toBe(3);
		expect(siblings.map(sibling => sibling.id)).toEqual(['el2', 'el3', 'el4']);
	});

	it('should return filtered siblings', () => {
		const element = document.querySelector('#el1');
		const siblings = _elementSiblings(element, '.blue');

		expect(siblings.length).toBe(2);
		expect(siblings.map(sibling => sibling.id)).toEqual(['el2', 'el4']);
	});

	it('should return empty array for no siblings', () => {
		const newContainer = document.createElement('div');
		const newElement = document.createElement('div');

		newContainer.appendChild(newElement);

		const siblings = _elementSiblings(newElement);

		expect(siblings.length).toBe(0);
	});

	it('should handle non-element nodes', () => {
		const textNode = document.createTextNode('Test');
		container.appendChild(textNode);

		const siblings = _elementSiblings(textNode);

		expect(siblings.length).toBe(0);
	});
});
