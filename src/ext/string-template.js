import _defineProperties from '../esm/define-properties.js';
import StringTemplate from '../esm/string-template.js';

_defineProperties(String, {
	/**
	 * Creates an immutable, reusable string template which can be formatted with different data.
	 *
	 * @memberof String
	 * @name template
	 * @param {string} template The string template.
	 * @returns {StringTemplate} A new string template instance.
	 */
	template: (template) => new StringTemplate(template)
});