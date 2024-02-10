/**
 * Debounce function
 *
 * @param {Function} func Function to be debounced
 * @param {number} wait Time in milliseconds
 * @param {boolean} [leading=false] Whether to execute the function at the start
 * @returns {Function} The debounced function
 */
const _debounce = (func, wait, leading = false) => {
	let id;

	return (...args) => {
		clearTimeout(id);

		if (leading && id === undefined) { func.apply(this, args) }

		id = setTimeout(() => { if (!leading) { func.apply(this, args) } }, wait);
	};
};

export default _debounce;