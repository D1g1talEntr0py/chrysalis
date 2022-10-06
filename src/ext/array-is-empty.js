import _arrayIsEmpty from '../esm/array-is-empty.js';
import _defineProperties from '../esm/define-properties.js';

_defineProperties(Array.prototype, {
	/**
	 * Checks to see if the array is empty
	 *
	 * @memberof Array.prototype
	 * @name isEmpty
	 * @returns {boolean} true if the array is empty, false otherwise.
	 */
	isEmpty() {
		return _arrayIsEmpty(this);
	}
});