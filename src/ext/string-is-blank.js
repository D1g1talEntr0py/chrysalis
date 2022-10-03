import defineProperties from '../esm/define-properties.js';
import _stringIsBlank from '../esm/string-is-blank.js';

defineProperties(String.prototype, {
	/**
	 * Checks to see if the string is blank.
	 *
	 * @returns {boolean} true if the string is all blanks, false otherwise.
	 */
	isBlank() {
		return _stringIsBlank(this);
	}
});