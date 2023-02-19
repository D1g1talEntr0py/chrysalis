import { describe, expect, test } from '@jest/globals';
import { _asciiToHex } from '../modules.js';

describe('_asciiToHex', () => {
	const ascii = 'This is the value to be encoded';

	test('Ascii text', () => expect(_asciiToHex(ascii)).toEqual('54686973206973207468652076616c756520746f20626520656e636f646564'));
	
});