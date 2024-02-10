import _insertionSort from './array-insertion-sort.js';

const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;

class ObjectWriter {
	#strict;
	#circularValue;
	#bigint;
	#deterministic;
	#maximumDepth;
	#maximumBreadth;

	constructor({ circularValue = '"[Circular]"', bigInt = true, deterministic = true, maximumBreadth = Infinity, maximumDepth = Infinity, strict = false } = {}) {
		this.#strict = strict;
		this.#circularValue = strict ? Error : circularValue;
		this.#bigint = strict ? false : bigInt;
		this.#deterministic = deterministic;
		this.#maximumDepth = maximumDepth;
		this.#maximumBreadth = maximumBreadth;
	}

	toJson(value, { replacer, space = '' } = {}) {
		const spacer = ObjectWriter.#calculateSpacer(space);

		switch (true) {
			case typeof replacer === 'function': return this.#stringifyFnReplacer('', { '': value }, [], replacer, spacer, '');
			case Array.isArray(replacer):	return this.#stringifyArrayReplacer('', value, [], ObjectWriter.#getUniqueReplacerSet(replacer), spacer, '');
			default: return this.#stringify('', value, [], spacer, '');
		}
	}

	/**
	 * Escape C0 control characters, double quotes, the backslash and every code
	 * unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
	 *
	 * @private
	 * @static
	 * @param {string} string The string to be escaped
	 * @returns {string} The escaped string
	 */
	static #escapeString(string) {
		return !strEscapeSequencesRegExp.test(string) && string.length < 5000 ? `"${string}"` : JSON.stringify(string);
	}

	static #isTypedArrayWithEntries(value) {
		return value.length && ArrayBuffer.isView(value) && !(value instanceof DataView);
	}

	static #calculateSpacer(space) {
		switch (typeof space) {
			case 'number': return ' '.repeat(Math.min(space, 10));
			case 'string': return space.slice(0, 10);
			default: return space;
		}
	}

	static #stringifyTypedArray(array, separator, maximumBreadth) {
		if (array.length < maximumBreadth) { maximumBreadth = array.length }

		const whitespace = separator === ',' ? '' : ' ';
		let result = `"0":${whitespace}${array[0]}`;
		for (let i = 1; i < maximumBreadth; i++) {
			result += `${separator}"${i}":${whitespace}${array[i]}`;
		}

		return result;
	}

	static #getItemCount(number) {
		return number === 1 ? '1 item' : `${number} items`;
	}

	static #getUniqueReplacerSet(replacerArray) {
		const replacerSet = new Set();
		for (const [ value, type = typeof value ] of replacerArray) {
			if (type === 'string' || type === 'number') { replacerSet.add(`${value}`) }
		}

		return replacerSet;
	}

	static #handleError = (value) => {
		throw new Error(`Object can not safely be stringified. Received type ${typeof value}${typeof value !== 'function' ? ` (${value.toString()})` : ''}`);
	};

	#replaceValue(key, value, valueType) {
		switch (valueType) {
			case 'string': return ObjectWriter.#escapeString(value);
			case 'number': return isFinite(value) ? `${value}` : this.#strict ? ObjectWriter.#handleError(value) : 'null';
			case 'boolean':	return value ? 'true' : 'false';
			case 'undefined':	return undefined;
			case 'bigint': if (this.#bigint) { return `${value}` } // fallthrough
			default: return this.#strict ? ObjectWriter.#handleError(value) : undefined;
		}
	}

	#stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
		let value = parent[key];

		value = value !== null && typeof value.toJSON === 'function' ? value.toJSON(key) : replacer.call(parent, key, value);

		const valueType = typeof value;
		if (valueType === 'object') {
			if (value === null) { return 'null' }
			if (~stack.indexOf(value)) { return this.#circularValue }

			let result = '', join = ',';
			const originalIndentation = indentation;

			if (Array.isArray(value)) {
				if (!value.length) { return '[]' }
				if (this.#maximumDepth < stack.length + 1) { return '"[Array]"'	}

				stack.push(value);

				if (spacer) {
					indentation += spacer;
					result += `\n${indentation}`;
					join = `,\n${indentation}`;
				}

				for (let i = 0, maximumValuesToStringify = Math.min(value.length, this.#maximumBreadth); i < maximumValuesToStringify; i++) {
					result += `${ObjectWriter.#stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation) ?? 'null'}${join}`;
				}

				result = result.slice(0, -1);

				if (value.length - 1 > this.#maximumBreadth) {
					result += `${join}"... ${ObjectWriter.#getItemCount(value.length - this.#maximumBreadth - 1)} not stringified"`;
				}

				if (spacer) {	result += `\n${originalIndentation}`	}

				stack.pop();

				return `[${result}]`;
			}

			const keys = Object.keys(value);
			const keyLength = keys.length;

			if (keyLength === 0) { return '{}' }
			if (this.#maximumDepth < stack.length + 1) { return '"[Object]"' }

			let whitespace = '';
			let separator = '';

			if (spacer) {
				indentation += spacer;
				join = `,\n${indentation}`;
				whitespace = ' ';
			}

			const maximumPropertiesToStringify = Math.min(keyLength, this.#maximumBreadth);
			if (this.#deterministic && !ObjectWriter.#isTypedArrayWithEntries(value)) {
				_insertionSort(keys);
			}

			stack.push(value);

			for (let i = 0, key, tmp; i < maximumPropertiesToStringify; i++) {
				key = keys[i];
				tmp = ObjectWriter.#stringifyFnReplacer(key, value, stack, replacer, spacer, indentation);
				if (tmp) {
					result += `${separator}${ObjectWriter.#escapeString(key)}:${whitespace}${tmp}`;
					separator = join;
				}
			}

			if (keyLength > this.#maximumBreadth) {
				const removedKeys = keyLength - this.#maximumBreadth;
				result += `${separator}"...":${whitespace}"${ObjectWriter.#getItemCount(removedKeys)} not stringified"`;
				separator = join;
			}

			if (spacer && separator.length > 1) {
				result = `\n${indentation}${result}\n${originalIndentation}`;
			}

			stack.pop();

			return `{${result}}`;
		}

		return this.#replaceValue(key, value, valueType);
	}

	#stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
		if (value !== null && typeof value.toJSON === 'function') { value = value.toJSON(key) }

		const valueType = typeof value;

		if (valueType === 'object') {
			if (value === null) {	return 'null'	}
			if (~stack.indexOf(value)) { return this.#circularValue }

			let result = '', join = ',';
			const originalIndentation = indentation;

			if (Array.isArray(value)) {
				if (!value.length) { return '[]' }
				if (this.#maximumDepth < stack.length + 1) { return '"[Array]"' }

				stack.push(value);
				if (spacer !== '') {
					indentation += spacer;
					result += `\n${indentation}`;
					join = `,\n${indentation}`;
				}

				for (let i = 0, maximumValuesToStringify = Math.min(value.length, this.#maximumBreadth); i < maximumValuesToStringify; i++) {
					result += `${ObjectWriter.#stringifyArrayReplacer(`${i}`, value[i], stack, replacer, spacer, indentation) ?? 'null'}${join}`;
				}

				result = result.slice(0, -1);

				if (value.length - 1 > this.#maximumBreadth) {
					result += `${join}"... ${ObjectWriter.#getItemCount(value.length - this.#maximumBreadth - 1)} not stringified"`;
				}

				if (spacer !== '') { result += `\n${originalIndentation}`	}

				stack.pop();

				return `[${result}]`;
			}

			stack.push(value);

			let whitespace = '';
			if (spacer !== '') {
				indentation += spacer;
				join = `,\n${indentation}`;
				whitespace = ' ';
			}

			let separator = '';
			for (const key of replacer) {
				const tmp = ObjectWriter.#stringifyArrayReplacer(key, value[key], stack, replacer, spacer, indentation);
				if (tmp !== undefined) {
					result += `${separator}${ObjectWriter.#escapeString(key)}:${whitespace}${tmp}`;
					separator = join;
				}
			}

			if (separator.length > 1 && spacer !== '') {
				result = `\n${indentation}${result}\n${originalIndentation}`;
			}

			stack.pop();

			return `{${result}}`;
		}

		return this.#replaceValue(key, value, valueType);
	}

	#stringify(key, value, stack, spacer, indentation) {
		const valueType = typeof value;

		if (valueType === 'object') {
			if (value === null) { return 'null' }
			if (typeof value.toJSON === 'function') {
				value = value.toJSON(key);
				// Prevent calling `toJSON` again.
				if (typeof value !== 'object') { return this.#stringify(key, value, stack, spacer, indentation) }
				if (value === null) { return 'null' }
			}

			if (~stack.indexOf(value)) { return this.#circularValue }

			let result = '', join = ',';
			const originalIndentation = indentation;

			if (Array.isArray(value)) {
				if (value.length === 0) { return '[]' }
				if (this.#maximumDepth < stack.length + 1) { return '"[Array]"' }

				stack.push(value);

				if (spacer) {
					indentation += spacer;
					result += `\n${indentation}`;
					join = `,\n${indentation}`;
				}

				for (let i = 0, maximumValuesToStringify = Math.min(value.length, this.#maximumBreadth); i < maximumValuesToStringify; i++) {
					result += `${this.#stringify(`${i}`, value[i], stack, spacer, indentation) ?? 'null'}${join}`;
				}

				result = result.slice(0, -1);

				if (value.length - 1 > this.#maximumBreadth) {
					result += `${join}"... ${ObjectWriter.#getItemCount(value.length - this.#maximumBreadth - 1)} not stringified"`;
				}

				if (spacer) { result += `\n${originalIndentation}` }

				stack.pop();

				return `[${result}]`;
			}

			let keys = Object.keys(value);
			const keyLength = keys.length;

			if (!keyLength) { return '{}' }
			if (this.#maximumDepth < stack.length + 1) { return '"[Object]"' }

			let whitespace = '';
			let separator = '';

			if (spacer) {
				indentation += spacer;
				join = `,\n${indentation}`;
				whitespace = ' ';
			}

			let maximumPropertiesToStringify = Math.min(keyLength, this.#maximumBreadth);

			if (ObjectWriter.#isTypedArrayWithEntries(value)) {
				result += ObjectWriter.#stringifyTypedArray(value, join, this.#maximumBreadth);
				keys = keys.slice(value.length);
				maximumPropertiesToStringify -= value.length;
				separator = join;
			}

			stack.push(value);

			if (this.#deterministic) { _insertionSort(keys) }

			for (let i = 0, key, tmp; i < maximumPropertiesToStringify; i++) {
				key = keys[i];
				tmp = this.#stringify(key, value[key], stack, spacer, indentation);
				if (tmp) {
					result += `${separator}${ObjectWriter.#escapeString(key)}:${whitespace}${tmp}`;
					separator = join;
				}
			}

			if (keyLength > this.#maximumBreadth) {
				result += `${separator}"...": "${ObjectWriter.#getItemCount(keyLength - this.#maximumBreadth)} not stringified"`;
				separator = join;
			}

			if (spacer) { result = `\n${indentation}${result}\n${originalIndentation}` }

			stack.pop();

			return `{${result}}`;
		}

		return this.#replaceValue(key, value, valueType);
	}
}

export default ObjectWriter;