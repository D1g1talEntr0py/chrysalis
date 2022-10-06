import _isType from './object-is-type.js';

/** @typedef {Object<string, boolean>} ClassListEntry */

/**
 * Toggles a list of classes utilizing the "force" parameter to either add or remove the class.
 *
 * @example
 * { 'foo': true } - Will add the 'foo' class if it does not exist.
 * { 'bar': false } - Will remove the 'bar' class if it exists.
 * @param {Element} element The {@link Element} to toggle classes.
 * @param {...(ClassListEntry|string)} classListEntries The list of class entries or class names to toggle.
 */
const _toggleElementClasses = (element, ...classListEntries) => {
	classListEntries.forEach((classEntry) => {
		const [cssClass, force] = _isType(classEntry, String) ? [classEntry, undefined] : Object.entries(classEntry).at(0);
		element.classList.toggle(cssClass, force);
	});
};

export default _toggleElementClasses;