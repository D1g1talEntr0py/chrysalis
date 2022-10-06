import _defineProperties from '../esm/define-properties.js';
import _mapIsEmpty from '../esm/map-is-empty.js';

_defineProperties(Map.prototype, {
	/**
	 * Checks to see if the {@link Map} is empty.
	 *
	 * @memberof Map.prototype
	 * @name isEmpty
	 * @returns {boolean} true if the {@link Map} is empty, false otherwise.
	 */
	isEmpty() {
		return _mapIsEmpty(this);
	}
});