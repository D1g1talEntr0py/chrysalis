import _arrayIsEmpty from './array-is-empty.js';
import _arrayRemove from './array-remove.js';
import _arrayInsert from './array-insert.js';
import _arrayInsertionSort from './array-insertion-sort.js';
import _isTypedArray from './array-is-typed.js';

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
	 * Sorts an array using the insertion sort algorithm
	 *
	 * @static
	 * @param {Array<*>} array The array to sort
	 * @returns {Array<*>} The sorted array
	 */
	static insertionSort(array) {
		return _arrayInsertionSort(array);
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
	 * Checks if the value is a typed array.
	 *
	 * @static
	 * @param {any} array The value to check.
	 * @returns {boolean} Returns `true` if the value is a typed array, otherwise `false`.
	 * @example
	 * Arrays.isTyped(new Uint8Array()); // => true
	 * Arrays.isTyped([]); // => false
	 */
	static isTyped(array) {
		return _isTypedArray(array);
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