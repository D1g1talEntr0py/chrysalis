/**
 * Determine whether the given `input` is iterable.
 *
 * @param {*} input The input to check.
 * @returns {boolean} Whether the input is iterable.
 */
const _isIterable = (input) => !!input?.[Symbol.iterator];

export default _isIterable;