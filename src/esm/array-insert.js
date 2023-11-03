import _type from './object-type.js';

/**
 * Insert one or more items into an array at the specified index
 *
 * @param {Array<*>} array The array to insert into
 * @param {number} index The index to insert at
 * @param {Array<*>} entries The items to insert
 * @returns {Array<*>} The array with the items inserted
 */
const _arrayInsert = (array, index, ...entries) => {
	if (!Array.isArray(array)) {
		throw new TypeError('First argument must be an array');
	}

	if (_type(index) != Number) {
		throw new TypeError('Second argument must be a number');
	}

	if (index < -1 || index > array.length) {
		throw new RangeError('Index is out of bounds');
	}

	// splice() modifies the original array and is generally efficient. If index is -1, insert the items at the end
	array.splice(index == -1 ? array.length : index, 0, ...entries);

	return array;
};

export default _arrayInsert;