import _arrayInsert from '../esm/array-insert.js';
import _defineProperties from '../esm/define-properties.js';

_defineProperties(Array.prototype, {
	/**
	 * Inserts the entry in a sorted array in the correct position. The array must be sorted in ascending order to work
	 *
	 * @param {*} entry - The entry to add to the array
	 * @param {string} [property] - The name of the property to use as the compare if the entry is an Object
	 */
	insert(entry, property) {
		_arrayInsert(this, entry, property);
	}
});