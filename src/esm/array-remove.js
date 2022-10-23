/**
 * Removes an item from an array at a given position
 * By John Resig (MIT Licensed)
 *
 * @param {Array} array The array to remove from
 * @param {number} from Starting position
 * @param {number?} to Ending position
 * @returns {number} The new length of the array
 */
const _arrayRemove = (array, from, to) => {
	const rest = array.slice((to || from) + 1 || array.length);
	array.length = from < 0 ? array.length + from : from;

	return array.push(...rest);
};

export default _arrayRemove;