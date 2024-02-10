import _generateCacheKey from '../src/esm/generate-cache-key.js';
import { describe, expect, it } from '@jest/globals';

describe('serialize', () => {
	it('should serialize an object to JSON', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		expect(_generateCacheKey(obj)).toBe('{"a":1,"b":"2","c":true,"d":null}');
	});

	it('should serialize an array to JSON', () => {
		const arr = [1, '2', true, null, undefined, [], {}];
		expect(_generateCacheKey(arr)).toBe('[1,"2",true,null,null,[],{}]');
	});

	it('should serialize an object with a nested object to JSON', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = { g: 3 };
		expect(_generateCacheKey(obj)).toBe('{"a":1,"b":"2","c":true,"d":null,"f":{"g":3}}');
	});

	it('should serialize an object with a nested array to JSON', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = [undefined, 3, 7, 2];
		expect(_generateCacheKey(obj)).toBe('{"a":1,"b":"2","c":true,"d":null,"f":[null,3,7,2]}');
	});

	it('should serialize a string to JSON', () => {
		const str = 'test';
		expect(_generateCacheKey(str)).toBe('"test"');
	});

	it('should serialize a number to JSON', () => {
		const num = 123;
		expect(_generateCacheKey(num)).toBe('123');
	});

	it('should serialize a boolean to JSON', () => {
		const bool = true;
		expect(_generateCacheKey(bool)).toBe('true');
	});

	it('should serialize a null to JSON', () => {
		const nul = null;
		expect(_generateCacheKey(nul)).toBe('null');
	});

	it('should serialize an undefined to JSON', () => {
		const undef = undefined;
		expect(_generateCacheKey(undef)).toBe(undefined);
	});

	it('should serialize a date to JSON', () => {
		const date = new Date(2020, 0, 1);
		expect(_generateCacheKey(date)).toBe('"2020-01-01T05:00:00.000Z"');
	});

	it('should serialize a function to JSON', () => {
		const func = () => {};
		expect(_generateCacheKey(func)).toBe(undefined);
	});

	it('should serialize a symbol to JSON', () => {
		const sym = Symbol('test');
		expect(_generateCacheKey(sym)).toBe(undefined);
	});

	it('should serialize a map to JSON', () => {
		const map = new Map([['a', 1], ['b', 2]]);
		expect(_generateCacheKey([...map])).toBe('[["a",1],["b",2]]');
	});

	it('should serialize a set to JSON', () => {
		const set = new Set([1, 2]);
		expect(_generateCacheKey([...set])).toBe('[1,2]');
	});

	it('should accept a nested array', () => {
		const obj = { c: ['true', 'false'], a: 1, b: '2', d: null, e: undefined };
		expect(_generateCacheKey(obj)).toBe('{"c":["true","false"],"a":1,"b":"2","d":null}');
	});

	it('should handle circular references', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = obj;
		expect(_generateCacheKey(obj)).toBe('{"a":1,"b":"2","c":true,"d":null,"f":"[Circular]"}');
	});

	it('should handle circular references with a nested object', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = { g: obj };
		expect(_generateCacheKey(obj)).toBe('{"a":1,"b":"2","c":true,"d":null,"f":{"g":"[Circular]"}}');
	});

	it('should handle circular references with an array', () => {
		const arr = [1, '2', true, null, undefined];
		arr.push(arr);
		expect(_generateCacheKey(arr)).toBe('[1,"2",true,null,null,"[Circular]"]');
	});

	it('should handle a typed array', () => {
		const arr = new Uint8Array([1, 2, 3]);
		expect(_generateCacheKey(arr)).toBe('{"0":1,"1":2,"2":3}');
	});

	it('should handle an object with a nested typed array', () => {
		const obj = { a: 1, b: '2', c: true, d: null, e: undefined };
		obj.f = new Uint8Array([1, 2, 3]);
		expect(_generateCacheKey(obj)).toBe('{"a":1,"b":"2","c":true,"d":null,"f":{"0":1,"1":2,"2":3}}');
	});

	it('should handle a string longer than 5000 characters', () => {
		const str = 'a'.repeat(5001);
		expect(_generateCacheKey(str)).toBe(JSON.stringify(str));
	});
});