import _defineProperties from '../esm/define-properties.js';
import _selectElementPopulate from '../esm/select-element-populate.js';

_defineProperties(HTMLSelectElement.prototype, {
	/**
	 * Populates a {@link HTMLSelectElement} with an array of {@link HTMLOptionElement} objects.
	 *
	 * @memberof HTMLSelectElement.prototype
	 * @name populate
	 * @param {Array<HTMLOptionElement>} options The array of {@link HTMLOptionElement} objects.
	 */
	populate(options) {
		_selectElementPopulate(this, options);
	}
});