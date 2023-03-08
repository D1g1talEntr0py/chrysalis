import _construct from '../src/esm/object-construct.js';

import { test, expect } from '@jest/globals';

test('object-construct', () => {
	expect(_construct(String)).toBeInstanceOf(String);
	expect(typeof _construct(Symbol)).toBe('symbol');
	expect(_construct(Number)).toBeInstanceOf(Number);
	expect(_construct(Boolean)).toBeInstanceOf(Boolean);
	expect(_construct(Object)).toBeInstanceOf(Object);
	expect(_construct(Function)).toBeInstanceOf(Function);
	expect(_construct(Array)).toBeInstanceOf(Array);
	expect(_construct(Date)).toBeInstanceOf(Date);
	expect(_construct(RegExp)).toBeInstanceOf(RegExp);
	expect(_construct(Error)).toBeInstanceOf(Error);
	expect(_construct(EvalError)).toBeInstanceOf(EvalError);
	expect(_construct(RangeError)).toBeInstanceOf(RangeError);
	expect(_construct(ReferenceError)).toBeInstanceOf(ReferenceError);
	expect(_construct(SyntaxError)).toBeInstanceOf(SyntaxError);
	expect(_construct(TypeError)).toBeInstanceOf(TypeError);
	expect(_construct(URIError)).toBeInstanceOf(URIError);
	class A { }
	expect(_construct(A)).toBeInstanceOf(A);
	expect(() => _construct(Proxy)).toThrow(TypeError);
	expect(_construct(Proxy, [new Date(), {}])).toBeInstanceOf(Date);
	expect(_construct(Promise, [() => {}])).toBeInstanceOf(Promise);
	expect(_construct(Map)).toBeInstanceOf(Map);
	expect(_construct(Set)).toBeInstanceOf(Set);
	expect(_construct(WeakMap)).toBeInstanceOf(WeakMap);
	expect(_construct(WeakSet)).toBeInstanceOf(WeakSet);
	expect(_construct(Int8Array)).toBeInstanceOf(Int8Array);
	expect(_construct(Uint8Array)).toBeInstanceOf(Uint8Array);
	expect(_construct(Uint8ClampedArray)).toBeInstanceOf(Uint8ClampedArray);
	expect(_construct(Int16Array)).toBeInstanceOf(Int16Array);
	expect(_construct(Uint16Array)).toBeInstanceOf(Uint16Array);
	expect(_construct(Int32Array)).toBeInstanceOf(Int32Array);
	expect(_construct(Uint32Array)).toBeInstanceOf(Uint32Array);
	expect(_construct(Float32Array)).toBeInstanceOf(Float32Array);
	expect(_construct(Float64Array)).toBeInstanceOf(Float64Array);
	expect(_construct(ArrayBuffer)).toBeInstanceOf(ArrayBuffer);
	expect(_construct(SharedArrayBuffer)).toBeInstanceOf(SharedArrayBuffer);
	expect(() => _construct(Atomics)).toThrow(TypeError);
	// expect(_construct(DataView)).toBeInstanceOf(DataView);
	expect(() => _construct(JSON)).toThrow(TypeError);
	expect(() => _construct(Math)).toThrow(TypeError);
	expect(() => _construct(Reflect)).toThrow(TypeError);
});