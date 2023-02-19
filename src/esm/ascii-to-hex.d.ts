export default _asciiToHex;
/**
 * This type represents a hexadecimal string.
 *
 * This hexadecimal string is expected to have an even number of elements, so
 * that it can be converted to binary representation (2 hexadecimal bytes result
 * in one byte in binary representation)
 *
 * Note that this is a type that cannot be constructed, just cast to. (string is
 * not an object). This is a Typescript trick to have a special kind of strings.
 */
export type HexString = string;
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
 * Encodes an ASCII string to a Hexidecimal string.
 *
 * @param {string} value - The ASCII string to encode
 * @returns {HexString} The Hexadecimal string
 */
declare function _asciiToHex(value: string): HexString;
//# sourceMappingURL=ascii-to-hex.d.ts.map