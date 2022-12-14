import _type from './object-type.js';

/** @typedef {Object.prototype.constructor} Type */

/**
 * Gets the object type for the provided instance.
 * 
 * @param {*} object The instance to compare.
 * @param {Type} type The type to compare.
 * @returns {boolean} true if the provided instance is the type provided, false otherwise.
 */
const _isType = (object, type) => _type(object) === type;

export default _isType;