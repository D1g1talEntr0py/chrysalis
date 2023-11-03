import _elementSiblings from '../esm/element-siblings.js';
import _defineProperties from '../esm/define-properties.js';

_defineProperties(Element.prototype, {
	/**
	 * Returns an array of siblings of the given element.
	 * Optionally, a selector can be passed to filter the results.
	 *
	 * @example
	 * // Returns an array of all siblings of the element.
	 * const siblings = element.siblings();
	 * @example
	 * // Returns an array of all siblings of the element that match the selector.
	 * const siblings = element.siblings('.my-class');
	 * @example
	 * // Returns an array of all siblings of the element that match the selector.
	 * const siblings = element.siblings('div');
	 * @memberof Element.prototype
	 * @name siblings
	 * @param {string} [selector] The selector to filter the results by.
	 * @returns {Array<Element>} The array of siblings.
	 */
	siblings(selector) {
		return _elementSiblings(this, selector);
	}
});