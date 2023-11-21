import _stringify from '../src/esm/stringify.js';
import { describe, it, expect } from '@jest/globals';

describe('serialize', () => {
	it('should serialize an object to JSON', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		expect(_stringify(obj)).toBe('{"a":1,"b":"2","c":true,"d":null}');
	});

	it('should serialize an array to JSON', () => {
		const arr = [1, '2', true, null, undefined];
		expect(_stringify(arr)).toBe('[1,"2",true,null,null]');
	});

	it('should serialize a string to JSON', () => {
		const str = 'test';
		expect(_stringify(str)).toBe('"test"');
	});

	it('should serialize a number to JSON', () => {
		const num = 123;
		expect(_stringify(num)).toBe('123');
	});

	it('should serialize a boolean to JSON', () => {
		const bool = true;
		expect(_stringify(bool)).toBe('true');
	});

	it('should serialize a null to JSON', () => {
		const nul = null;
		expect(_stringify(nul)).toBe('null');
	});

	it('should serialize an undefined to JSON', () => {
		const undef = undefined;
		expect(_stringify(undef)).toBe(undefined);
	});

	it('should serialize a date to JSON', () => {
		const date = new Date(2020, 0, 1);
		expect(_stringify(date)).toBe('"2020-01-01T05:00:00.000Z"');
	});

	it('should serialize a function to JSON', () => {
		const func = () => {};
		expect(_stringify(func)).toBe(undefined);
	});

	it('should serialize a symbol to JSON', () => {
		const sym = Symbol('test');
		expect(_stringify(sym)).toBe(undefined);
	});

	it('should serialize a map to JSON', () => {
		const map = new Map([['a', 1], ['b', 2]]);
		expect(_stringify([...map])).toBe('[["a",1],["b",2]]');
	});

	it('should serialize a set to JSON', () => {
		const set = new Set([1, 2]);
		expect(_stringify([...set])).toBe('[1,2]');
	});

	it('should repeat characters using the space property of the opts parameter', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		expect(_stringify(obj, { space: 2 })).toBe('{\n  "a": 1,\n  "b": "2",\n  "c": true,\n  "d": null\n}');
	});

	it('should accept a replacer function as the opts parameter', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		const replacer = (parent, key, value) => value;
		expect(_stringify(obj, { replacer })).toBe('{"a":1,"b":"2","c":true,"d":null}');
	});

	it('should accept multiple properties in the opts parameter', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		const replacer = (parent, key, value) => value;
		expect(_stringify(obj, { space: 2, replacer })).toBe('{\n  "a": 1,\n  "b": "2",\n  "c": true,\n  "d": null\n}');
	});

	it('should accept a custom compare function as the opts parameter', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		const comparator = (a, b) => a.key.localeCompare(b.key);
		expect(_stringify(obj, { comparator })).toBe('{"a":1,"b":"2","c":true,"d":null}');
	});

	it('should throw an error for a circular reference', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = obj;
		expect(() => _stringify(obj)).toThrow(TypeError);
	});

	it('should handle circular references when cycles is true', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = obj;
		expect(_stringify(obj, { cycles: true })).toBe('{"a":1,"b":"2","c":true,"d":null,"f":"__cycle__"}');
	});
});