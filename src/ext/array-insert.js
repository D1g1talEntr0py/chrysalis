import _arrayInsert from '../esm/array-insert.js';
import _defineProperties from '../esm/define-properties.js';

_defineProperties(Array.prototype, {
	/**
	 * Inserts an entry into the array at the specified index
	 *
	 * @memberof Array.prototype
	 * @name insert
	 * @param {*} index The index to insert the entry at
	 * @param {...string} entries The entries to add to the array
	 * @returns {Array} The array
	 */
	insert(index, ...entries) {
		return _arrayInsert(this, index, ...entries);
	}
});