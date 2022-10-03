import _isType from './object-is-type.js';

/**
 * Toggles a list of classes utilizing the "force" parameter to either add or remove the class
 * { 'foo': true } - Will add the 'foo' class if it does not exist
 * { 'bar': false } - Will remove the 'bar' class if it exists
 *
 * @param {Element} element The {@link Element} to toggle classes.
 * @param {...(ClassListEntry|string)} classListEntries
 */
const _toggleElementClasses = (element, ...classListEntries) => {
	classListEntries.forEach((classEntry) => {
		const [cssClass, force] = _isType(classEntry, String) ? [classEntry, undefined] : Object.entries(classEntry).at(0);
		element.classList.toggle(cssClass, force);
	});
};

export default _toggleElementClasses;