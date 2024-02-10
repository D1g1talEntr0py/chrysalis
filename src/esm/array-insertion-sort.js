/**
 * Insertion sort is very efficient for small input sizes but it has a bad
 * worst case complexity. Thus, use native array sort for bigger values.
 *
 * @private
 * @static
 * @param {Array} array The array to be sorted
 * @returns {Array} The sorted array
 */
const _insertionSort = (array) => {
	for (let i = 1, length = array.length, value, position; i < length; i++) {
		value = array[i];
		for (position = i; position > 0 && array[position - 1] > value; position--) { array[position] = array[position - 1] }

		array[position] = value;
	}

	return array;
};

export default _insertionSort;