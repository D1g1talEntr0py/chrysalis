/**
 * Generates a cache key for the given value.
 * Heavily inspired by safe-stable-stringify.
 *
 * @see https://github.com/BridgeAR/safe-stable-stringify
 * @module generate-cache-key
 */

const [ join, nullValue, escapeSequences ] = [',', 'null', /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/];

/**
 * Generates a cache key for the given value.
 *
 * @param {*} value The value to generate a cache key for.
 * @returns {string} Returns the cache key.
 */
const _generateCacheKey = (value) => _serialize('', value, []);

/**
 * Escape C0 control characters, double quotes, the backslash and every code unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
 *
 * @param {string} string The string to escape.
 * @returns {string} Returns the escaped string.
 */
const _escapeString = (string) => !escapeSequences.test(string) && string.length < 5000 ? `"${string}"` : JSON.stringify(string);

const _serialize = (key, value, stack) => {
	switch (typeof(value)) {
		case 'object': {
			if (value === null) { return nullValue }

			if (typeof value.toJSON === 'function') {
				value = value.toJSON(key);
				// Prevent calling `toJSON` again.
				if (typeof value !== 'object') { return _serialize(key, value, stack) }
				if (value === null) { return nullValue }
			}

			if (stack.includes(value)) { return '"[Circular]"' }

			let result = '';

			if (Array.isArray(value)) {
				if (!value.length) { return '[]' }

				stack.push(value);

				result += `${_serialize(`${0}`, value[0], stack) ?? nullValue}`;
				for (let i = 1, length = value.length; i < length; i++) {
					result += `${join}${_serialize(`${i}`, value[i], stack) ?? nullValue}`;
				}

				stack.pop();

				return `[${result}]`;
			}

			const keys = Object.keys(value);
			if (!keys.length) { return '{}' }

			stack.push(value);

			let separator = '', serializedValue;
			for (let i = 0, length = keys.length, key; i < length; i++) {
				key = keys[i];
				serializedValue = _serialize(key, value[key], stack);
				if (serializedValue !== undefined) {
					result += `${separator}"${key}":${serializedValue}`;
					separator ||= join; // Prevent the variable from being reassigned.
				}
			}

			stack.pop();

			return `{${result}}`;
		}
		case 'bigint':
		case 'number':
		case 'boolean': return `${value}`;
		case 'string': return _escapeString(value);
		default: return undefined;
	}
};

export default _generateCacheKey;