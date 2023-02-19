import _splice from '../src/esm/string-splice.js';
import '../src/ext/string-splice.js';
import { describe, expect, it } from '@jest/globals';

describe('_splice', () => {
	it('Should inject ":" into the beginning of a string ', () => expect(_splice('0400', 0, ':')).toBe(':0400'));
	it('Should inject ":" after the first character of a string ', () => expect(_splice('0400', 1, ':')).toBe('0:400'));
	it('Should inject ":" into the middle of a string ', () => expect(_splice('0400', 2, ':')).toBe('04:00'));
});

describe('String.prototype.splice', () => {
	it('Should inject ":" into the beginning of a string ', () => expect('0400'.splice(0, ':')).toBe(':0400'));
	it('Should inject ":" after the first character of a string ', () => expect('0400'.splice(1, ':')).toBe('0:400'));
	it('Should inject ":" into the middle of a string ', () => expect('0400'.splice(2, ':')).toBe('04:00'));
});