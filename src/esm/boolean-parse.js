import _type from './object-type.js';

/**
 * Parses a string value to a boolean value.
 *
 * @param {string} value The string to be parsed to a boolean
 * @returns {boolean} true if the string is "true" and false if the string is "false". If not either of those, an error is thrown.
 * @throws {TypeError} If the value is not a string
 * @throws {TypeError} If the value is not "true" or "false"
 * @example
 * ```javascript
 * _booleanParse('true'); // true
 * _booleanParse('false'); // false
 * _booleanParse('True'); // true
 * _booleanParse('False'); // false
 * _booleanParse('TRUE'); // true
 * ```
 */
const _booleanParse = (value) => {
	if (_type(value) != String) {
		throw new TypeError(`Boolean.parse: Expected string, received ${_type(value)}`);
	}
	
	switch(value.toLowerCase()) {
		case 'true': return true;
		case 'false':	return false;
		default: throw new TypeError(`Boolean.parse: Cannot convert '${value}' to boolean.`);
	}
};

export default _booleanParse;