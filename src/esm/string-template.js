/**
 * Finds the value given the key provided.
 * 
 * @param {Object} data The data object to search for values
 * @param {string} key The key used to find the value. The key can be nested.
 * @returns {*}
 */
const _findValue = (data, key) => key.split('.').reduce((obj, key) => obj[key], data);
const templateRegEx = /{(.*?)}/g;

export default class StringTemplate {
	/**
	 * Creates an immutable, reusable string template which can be formatted with different data.
	 * 
	 * @param {string} template The string template.
	 */
	constructor(template) {
		this._template = template;
	}

	/**
	 * Appends to the existing template and returns a new {@link StringTemplate} instance.
	 * 
	 * @param {string} value The string to append to the existing template.
	 * @returns {StringTemplate} A new {@link StringTemplate} instance.
	 */
	append(value) {
		return new StringTemplate(`${this._template}${value}`);
	}

	/**
	 * Formats the template with the provided data object.
	 * 
	 * @param {Object} data The data for the placeholders in the template.
	 * @returns {string} The formatted string.
	 */
	format(data) {
		return this._template.replace(templateRegEx, (match, placeholder) => _findValue(data, placeholder) ?? match);
	}
}