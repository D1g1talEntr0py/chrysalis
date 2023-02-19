import _defineProperties from '../esm/define-properties.js';
import _stringSplice from '../esm/string-splice.js';

_defineProperties(String.prototype, {
	/**
	 * Inserts characters at a specific index and returns a new instance.
	 * The original string is not modified.
	 *
	 * @memberof String.prototype
	 * @name String#splice
	 * @param {number} start The index where the characters are inserted.
	 * @param  {...string} chars The characters to insert.
	 * @returns {string} A new string with the characters inserted at the specified index.
	 */
	splice(start, ...chars) {
		return _stringSplice(this, start, ...chars);
	}
});