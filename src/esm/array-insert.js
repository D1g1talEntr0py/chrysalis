/**
 * Inserts the entry in a sorted array in the correct position. The array must be sorted in ascending order to work
 *
 * @param {Array} array The Array to insert an entry.
 * @param {*} entry The entry to add to the array.
 * @param {string} [property] The name of the property to use as the compare if the entry is an Object.
 */
const _arrayInsert = (array, entry, property) => {
	let left = 0;
	let right = array.length - 1, middle, current;
	const value = property ? entry[property] : entry;
	for (; left <= right;) {
		// Bitwise OR operator to get the middle of the array. Floating point numbers will be truncated.
		middle = (left + right) / 2 | 0;
		current = property ? array[middle][property] : array[middle];
		// If entry value to be added is less than the current value, then the insertion point must be before the current middle index.
		if (value < current) {
			right = middle - 1;
			continue;
		}
		left = middle + 1;
		// If the entry value is equal to the current value, do the insert.
		if (value === current) {
			break;
		}
	}

	array.splice(left, 0, entry);
};

export default _arrayInsert;