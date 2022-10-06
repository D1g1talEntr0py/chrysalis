import _defineProperties from '../esm/define-properties.js';
import _stringIsEmpty from '../esm/string-is-empty.js';

_defineProperties(String.prototype, {
	/**
	 * Checks to see if the string is empty.
	 *
	 * @memberof String.prototype
	 * @name isEmpty
	 * @returns {boolean} true if the string is empty, false otherwise.
	 */
	isEmpty() {
		return _stringIsEmpty(this);
	}
});