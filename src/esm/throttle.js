/**
 * Throttle function
 *
 * @param {Function} func Function to throttle
 * @param {number} timeFrame Time in milliseconds
 * @returns {Function} The throttled function
 */
const _throttle = (func, timeFrame) => {
	let id, currentArguments;

	const _throttle = (a = currentArguments) => {
		func(...a);
		currentArguments = null;

		id = setTimeout(() => {
			id = null;
			if (currentArguments) { _throttle() }
		}, timeFrame);
	};

	return (...args) => id ? currentArguments = args : _throttle(args);
};

export default _throttle;