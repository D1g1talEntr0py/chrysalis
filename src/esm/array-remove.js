/**
 * Removes an item from an array at a given position
 * By John Resig (MIT Licensed)
 *
 * @param {Array} array The array to remove from
 * @param {number} from Starting position
 * @param {number} [to=from] Ending position
 * @returns {number} The new length of the array
 */
const _arrayRemove = (array, from, to = from) => {
	const rest = array.slice(to + 1 || array.length);
	array.length = from < 0 ? array.length + from : from;

	return array.push(...rest);
};

export default _arrayRemove;