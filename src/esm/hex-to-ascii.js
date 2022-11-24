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
 * Converts a Hexadecimal value to an ASCII string.
 *
 * @param {HexString} hex - Hexadecimal value
 * @returns {string} The ASCII string
 */
const _hexToAscii = (hex) => {
	let ascii = '';
	for (let index = 0, length = hex.length; index < length; index += 2) {
		ascii += String.fromCharCode(parseInt(hex.slice(index, index + 2), 16));
	}

	return ascii;
};

export default _hexToAscii;