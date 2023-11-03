import _arrayRemove from '../esm/array-remove.js';
import _defineProperties from '../esm/define-properties.js';

_defineProperties(Array.prototype, {
	/**
	 * Removes an item from an array at a given position
	 * 
	 * @author John Resig (MIT Licensed)
	 * @memberof Array.prototype
	 * @name remove
	 * @param {number} from Starting position
	 * @param {number} [to] Ending position
	 * @returns {Array} The array with the item removed
	 */
	remove(from, to) {
		return _arrayRemove(this, from, to);
	}
});