import _getOrInsert from '../src/esm/map-get-or-insert.js';
import { describe, it, expect } from '@jest/globals';

describe('_getOrInsert', () => {
	it('should return the value associated with the key if it exists', () => {
		const map = new Map();
		map.set('key', 'value');
		expect(_getOrInsert(map, 'key', () => 'other')).toBe('value');
	});

	it('should return the value produced by the producer function if the key does not exist', () => {
		const map = new Map();
		expect(_getOrInsert(map, 'key', () => 'value')).toBe('value');
	});

	it('should insert the key and the value produced by the producer function if the key does not exist', () => {
		const map = new Map();
		_getOrInsert(map, 'key', () => 'value');
		expect(map.get('key')).toBe('value');
	});
});