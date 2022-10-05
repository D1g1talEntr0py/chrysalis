import _defineProperties from '../esm/define-properties.js';
import _isType from '../esm/object-is-type.js';

/** @typedef {Object.prototype.constructor} Type */

_defineProperties(Object, {
	/**
	 * Gets the object type for the provided instance.
	 * 
	 * @param {*} object The instance to compare.
	 * @param {Type} type The type to compare.
	 * @returns {boolean} true if the provided instance is the type provided, false otherwise.
	 */
	isType: _isType
});