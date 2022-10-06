import _defineProperties from '../esm/define-properties.js';
import _type from '../esm/object-type.js';

/** @typedef {Object.prototype.constructor} Type */

_defineProperties(Object.prototype, {
	/**
	 * Gets the object type for the current instance.
	 *
	 * @memberof Object.prototype
	 * @name type
	 * @returns {Type} The object type
	 */
	type() {
		return _type(this);
	}
});