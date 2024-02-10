import _insertionSort from './array-insertion-sort.js';

/**
 * Stringifies an object. It is similar to JSON.stringify.
 * It correctly handles arrays, objects, circular references and allows for custom comparators.
 *
 * @param {Object} object The object to be stringified
 * @param {Object} options The options for the stringify function
 * @param {string|number} [options.space=''] The space to be used for indentation
 * @returns {string} The stringified object
 * @throws {TypeError} If the object contains circular references and circular is set to false
 */
const _stringify = (object, { space = '' } = {}) => {
	/**
	 * The replacer function to be used for removing circular references and sorting the keys
	 *
	 * @param {string} _ The key of the value
	 * @param {any} value The value to be checked for circular references
	 * @returns {any} The the value with circular references removed and keys sorted
	 * @throws {TypeError} If the object contains circular references and circular is set to false
	 */
	const replacer = (_, value) => {
		if (value == null || typeof value !== 'object') { return value }

		if (~stack.indexOf(value)) { return '[Circular]' }

		stack.push(value);

		const result = Array.isArray(value) ? [] : {};

		for (const key of _insertionSort(Object.keys(value))) {
			result[key] = replacer(null, value[key]);
		}

		stack.pop();

		return result;
	};

	const stack = [];

	return JSON.stringify(object, replacer, space);
};

export default _stringify;