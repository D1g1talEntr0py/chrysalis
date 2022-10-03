import defineProperties from '../esm/define-properties.js';
import _toggleElementClasses from '../esm/element-toggle-classes.js';

defineProperties(Element.prototype, {
	/**
	 * Toggles a list of classes utilizing the "force" parameter to either add or remove the class
	 * 
	 * @example
	 * { 'foo': true } - Will add the 'foo' class if it does not exist
	 * { 'bar': false } - Will remove the 'bar' class if it exists
	 *
	 * @param {...(ClassListEntry|string)} classListEntries
	 */
	toggleClasses(...classListEntries) {
		_toggleElementClasses(this, ...classListEntries);
	}
});