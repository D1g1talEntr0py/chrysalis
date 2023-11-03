import _arrayIsEmpty from './array-is-empty.js';
import _arrayRemove from './array-remove.js';
import _arrayInsert from './array-insert.js';

export default class Arrays {
	/**
	 * Inserts one or more items into an array at the specified index
	 *
	 * @static
	 * @param {Array<*>} array The array to insert into
	 * @param {number} index The index to insert at
	 * @param  {...*} newItems The items to insert
	 * @returns {Array<*>} The array with the items inserted
	 */
	static insert(array, index, ...newItems) {
		return _arrayInsert(array, index, ...newItems);
	}

	/**
	 * Checks if an array is empty
	 *
	 * @static
	 * @param {Array} array The array to check
	 * @returns {boolean} True if the array is empty, false otherwise
	 */
	static isEmpty(array) {
		return _arrayIsEmpty(array);
	}

	/**
	 * Removes one or more items from an array
	 *
	 * @static
	 * @param {Array<*>} array The array to remove from
	 * @param {number} from The index to start removing from
	 * @param {number} [to] The index to stop removing at
	 * @returns {Array<*>} The array with the items removed
	 */
	static remove(array, from, to) {
		return _arrayRemove(array, from, to);
	}
}