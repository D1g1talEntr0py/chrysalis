import _arrayRemove from '../esm/array-remove.js';
import _defineProperties from '../esm/define-properties.js';

_defineProperties(Array.prototype, {
	/**
	 * Removes an item from an array at a given position
	 * By John Resig (MIT Licensed)
	 *
	 * @param {number} from Starting position
	 * @param {number} [to] Ending position
	 * @returns {number} The new length of the array
	 */
	remove(from, to) {
		return _arrayRemove(this, from, to);
	}
});