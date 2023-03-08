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
		Reflect.construct(value, []);
	} catch (error) {
		if (error instanceof TypeError && error.message.endsWith('is not a constructor')) {
			return false;
		}
	}

	return true;
};

export default _isConstructable;