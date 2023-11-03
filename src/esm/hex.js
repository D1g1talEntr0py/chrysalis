import _asciiToHex from './ascii-to-hex.js';
import _hexToAscii from './hex-to-ascii.js';

/**
 * This type represents a hexadecimal string.
 *
 * This hexadecimal string is expected to have an even number of elements, so
 * that it can be converted to binary representation (2 hexadecimal bytes result
 * in one byte in binary representation)
 *
 * Note that this is a type that cannot be constructed, just cast to. (string is
 * not an object). This is a Typescript trick to have a special kind of strings.
 *
 * @global
 * @typedef {string} HexString
 */

/**
 * This class provides methods to encode and decode hexadecimal strings.
 *
 * @module {Hex} hex
 * @author D1g1talEntr0py <jason.dimeo@gmail.com>
 */
export default class Hex {
	/**
	 * Encodes an ASCII string to a Hexadecimal string.
	 *
	 * @param {string} value - The ASCII string to encode
	 * @returns {HexString} The Hexadecimal string
	 */
	static encode(value) {
		return _asciiToHex(value);
	}

	/**
	 * Converts a Hexadecimal value to an ASCII string.
	 *
	 * @param {HexString} hex - Hexadecimal value
	 * @returns {string} The ASCII string
	 */
	static decode(hex) {
		return _hexToAscii(hex);
	}
}