export type HexString = string & {
  _: 'HexString';
};

export default _hexToAscii;
/**
 *
 * @param {HexString} value - Hexadecimal value
 * @returns {string}
 */
declare function _hexToAscii(value: any): string;