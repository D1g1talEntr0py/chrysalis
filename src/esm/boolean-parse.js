/**
 * Parses a string value to a boolean value.
 *
 * @param {string} value The string to be parsed to a boolean
 * @returns {boolean} true if the string is "true" and false if the string is "false". If not either of those, an error is thrown.
 */
const _booleanParse = (value) => {
	switch(value.toLowerCase()) {
		case 'true': return true;
		case 'false':	return false;
		default: throw new TypeError(`Boolean.parse: Cannot convert '${value}' to boolean.`);
	}
};

export default _booleanParse;