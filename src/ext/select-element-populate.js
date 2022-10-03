import defineProperties from '../esm/define-properties.js';
import _selectElementPopulate from '../esm/select-element-populate.js';

defineProperties(HTMLSelectElement.prototype, {
	/**
	 * Populates a {@link HTMLSelectElement} with an array of {@link HTMLOptionElement} objects.
	 * 
	 * @param {Array.<HTMLOptionElement>} options The array of {@link HTMLOptionElement} objects.
	 */
	populate(options) {
		_selectElementPopulate(this, options);
	}
})

