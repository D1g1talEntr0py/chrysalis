/**
 * Populates a {@link HTMLSelectElement} with an array of {@link HTMLOptionElement} objects.
 * 
 * @param {HTMLSelectElement} htmlSelectElement The {@link HTMLSelectElement} to populate.
 * @param {Array.<HTMLOptionElement>} options The array of {@link HTMLOptionElement} objects.
 */
const _selectElementPopulate = (htmlSelectElement, options) => {
	options.forEach((option) => htmlSelectElement.add(option));
};

export default _selectElementPopulate;