/**
 * Tagged template function that returns a string with interpolated values.
 *
 * @param {*} strings The template strings.
 * @param  {...any} keys The template keys.
 * @returns {function(...any): string} Returns the template function.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 */
const _template = ([ string, ...strings ], ...keys) => {
	return (...values) => {
		const result = [ string ];

		for (let i = 0, length = keys.length, dict = values[values.length - 1] ?? {}; i < length; i++) {
			result.push(values[keys[i]] ?? dict[keys[i]], strings[i]);
		}

		return result.join('');
	};
};

export default _template;