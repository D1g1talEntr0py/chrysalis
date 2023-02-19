export default _hexToAscii;
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
 * Converts a Hexadecimal value to an ASCII string.
 *
 * @param {HexString} hex - Hexadecimal value
 * @returns {string} The ASCII string
 */
declare function _hexToAscii(hex: HexString): string;
//# sourceMappingURL=hex-to-ascii.d.ts.map