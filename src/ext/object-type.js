import defineProperties from '../esm/define-properties.js';
import _type from '../esm/object-type.js';

defineProperties(Object.prototype, {
	/**
	 * Gets the object type for the current instance.
	 * 
	 * @returns {import('../typedef/global.js').Type} The object type
	 */
	type() {
		return _type(this);
	}
});