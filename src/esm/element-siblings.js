/**
 * Returns an array of siblings of the given element.
 * Optionally, a selector can be passed to filter the results.
 *
 * @param {Element} element The {@link Element} to get the siblings of.
 * @param {string} [selector] The selector to filter the results by.
 * @returns {Array<Element>} The array of siblings.
 */
const _elementSiblings = (element, selector) => {
	return element.nodeType !== 1 ? [] : Array.from(element.parentElement.children).filter((e) => e != element && (!selector || e.matches(selector)));
};

export default _elementSiblings;