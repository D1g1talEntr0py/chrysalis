/**
 * Function that is used as a default replacer for the stringify function.
 *
 * @param {Object} parent The parent object
 * @param {string} key The key of the current value
 * @param {any} value The current value
 * @returns {any} The value to be stringified
 */
const defaultReplacer = (parent, key, value) => value;

/**
 * Stringifies an object. It is similar to JSON.stringify.
 * It correctly handles arrays, objects, circular references and allows for custom replacers and comparators.
 *
 * @param {Object} obj The object to be stringified
 * @param {Object} options The options for the stringify function
 * @param {string|number} options.space The space to be used for indentation
 * @param {Function} options.comparator The comparator function to be used for sorting the keys
 * @param {Function} options.replacer The replacer function to be used for stringifying the values
 * @param {boolean} options.cycles Whether to allow cycles or not
 * @returns {string} The stringified object
 * @throws {TypeError} If the object contains cycles and cycles is set to false
 */
const _stringify = (obj, { space = '', comparator, replacer = defaultReplacer, cycles = false } = {}) => {
	if (typeof space === 'number') { space = ' '.repeat(space) }

	if (replacer !== defaultReplacer) { replacer = replacer.bind(null) }

	const seen = new WeakSet();
	const stringifyNode = (node, level) => {
		if (typeof node?.toJSON === 'function') { node = node.toJSON() }

		node = replacer(null, '', node);

		if (node === undefined) { return }
		if (node === null || typeof node !== 'object') { return JSON.stringify(node) }

		if (seen.has(node)) {
			if (cycles) { return JSON.stringify('__cycle__') }
			throw new TypeError('Converting circular structure to JSON');
		}

		seen.add(node);

		const indent = space ? `\n${' '.repeat(level * space.length)}` : '';

		if (Array.isArray(node)) {
			const items = node.map((item) => `${indent}${space}${stringifyNode(item, level + 1) ?? JSON.stringify(null)}`);
			return `[${items.join(',')}${indent}]`;
		}

		const keys = Object.keys(node);
		if (comparator) {
			keys.sort((a, b) => comparator({ key: a, value: node[a] }, { key: b, value: node[b] }));
		}

		const properties = keys.map(key => {
			const value = stringifyNode(node[key], level + 1);
			return value ? `${indent}${space}${JSON.stringify(key)}${space ? ': ' : ':'}${value}` : 0;
		}).filter(Boolean);

		seen.delete(node);

		return `{${properties.join(',')}${indent}}`;
	};

	return stringifyNode(obj, 0);
};

export default _stringify;