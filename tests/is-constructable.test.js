import _isConstructable from '../src/esm/is-constructable.js';
import { test, expect } from '@jest/globals';

test('is-constructable', () => {
	expect(_isConstructable(() => {})).toBe(false);
	expect(_isConstructable(class {})).toBe(true);
	expect(_isConstructable(function() {})).toBe(true);
	expect(_isConstructable(function*() {})).toBe(false);
	expect(_isConstructable(new (function() {}))).toBe(false);
	expect(_isConstructable(async function() {})).toBe(false);
	expect(_isConstructable(async function*() {})).toBe(false);
	expect(_isConstructable(async () => {})).toBe(false);
	expect(_isConstructable(() => {})).toBe(false);
	expect(_isConstructable(String)).toBe(true);
	expect(_isConstructable(Symbol)).toBe(false);
	expect(_isConstructable(Number)).toBe(true);
	expect(_isConstructable(Boolean)).toBe(true);
	expect(_isConstructable(Object)).toBe(true);
	expect(_isConstructable(Function)).toBe(true);
	expect(_isConstructable(Array)).toBe(true);
	expect(_isConstructable(Date)).toBe(true);
	expect(_isConstructable(RegExp)).toBe(true);
	expect(_isConstructable(Error)).toBe(true);
	expect(_isConstructable(EvalError)).toBe(true);
	expect(_isConstructable(RangeError)).toBe(true);
	expect(_isConstructable(ReferenceError)).toBe(true);
	expect(_isConstructable(SyntaxError)).toBe(true);
	expect(_isConstructable(TypeError)).toBe(true);
	expect(_isConstructable(URIError)).toBe(true);
	expect(_isConstructable(class A { })).toBe(true);
	expect(_isConstructable(Proxy)).toBe(true);
	expect(_isConstructable(Promise)).toBe(true);
	expect(_isConstructable(Map)).toBe(true);
	expect(_isConstructable(Set)).toBe(true);
	expect(_isConstructable(WeakMap)).toBe(true);
	expect(_isConstructable(WeakSet)).toBe(true);
	expect(_isConstructable(Int8Array)).toBe(true);
	expect(_isConstructable(Uint8Array)).toBe(true);
	expect(_isConstructable(Uint8ClampedArray)).toBe(true);
	expect(_isConstructable(Int16Array)).toBe(true);
	expect(_isConstructable(Uint16Array)).toBe(true);
	expect(_isConstructable(Int32Array)).toBe(true);
	expect(_isConstructable(Uint32Array)).toBe(true);
	expect(_isConstructable(Float32Array)).toBe(true);
	expect(_isConstructable(Float64Array)).toBe(true);
	expect(_isConstructable(ArrayBuffer)).toBe(true);
	expect(_isConstructable(SharedArrayBuffer)).toBe(true);
	expect(_isConstructable(Atomics)).toBe(false);
	expect(_isConstructable(DataView)).toBe(true);
	expect(_isConstructable(JSON)).toBe(false);
	expect(_isConstructable(Math)).toBe(false);
	expect(_isConstructable(Reflect)).toBe(false);
	expect(_isConstructable(RegExp)).toBe(true);
	expect(_isConstructable(RegExp.prototype)).toBe(false);
	expect(_isConstructable(RegExp.prototype.constructor)).toBe(true);
	expect(_isConstructable(RegExp.prototype.constructor.prototype)).toBe(false);
	expect(_isConstructable(RegExp.prototype.constructor.prototype.constructor)).toBe(true);
});