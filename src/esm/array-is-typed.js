/**
 * Check if the value is a typed array.
 *
 * @param {any} array The value to check.
 * @returns {boolean} Returns `true` if the value is a typed array, otherwise `false`.
 * @example
 * isTypedArray(new Uint8Array()); // => true
 * isTypedArray([]); // => false
 */
const _isTypedArray = (array) => ArrayBuffer.isView(array) && !(array instanceof DataView);

export default _isTypedArray;