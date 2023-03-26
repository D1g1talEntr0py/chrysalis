/**
 * Checks if an object is empty.
 *
 * @module {function(Object): boolean} object-is-empty
 * @param {Object} object The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
const _objectIsEmpty = (object) => !!object && Object.keys(object).length === 0 && object.constructor === Object;

export default _objectIsEmpty;