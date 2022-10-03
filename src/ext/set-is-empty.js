import defineProperties from '../esm/define-properties.js';
import _setIsEmpty from '../esm/set-is-empty.js';

defineProperties(Set.prototype, {
	/**
	 * Checks to see if the {@link Set} is empty.
	 *
	 * @returns {boolean} true if the {@link Set} is empty, false otherwise.
	 */
	isEmpty() {
		return _setIsEmpty(this);
	}
});