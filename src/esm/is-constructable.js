/** @typedef {Object.prototype.constructor} Type */

/**
 * Determines if the value is a constructable function.
 *
 * @module {Function} esm/is-constructable
 * @author D1g1talEntr0py
 * @param {Type} value The value to check.
 * @returns {boolean} Whether the value is a constructable function.
 */
const _isConstructable = (value) => {
	try {
		return value !== Symbol && !!Reflect.construct(String, [], value);
	} catch (error) { /* empty */ }

	return false;
};

export default _isConstructable;