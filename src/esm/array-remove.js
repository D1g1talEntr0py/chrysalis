/**
 * Removes an item from an array at a given position
 *
 * @param {Array} array The array to remove from
 * @param {number} from Starting position
 * @param {number} [to=from] Ending position
 * @returns {Array} The array with the item removed
 */
const _arrayRemove = (array, from, to = from) => {
	array.splice(from, to - from + 1);

	return array;
};

export default _arrayRemove;