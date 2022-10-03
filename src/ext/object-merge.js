import defineProperties from '../esm/define-properties.js';
import _objectMerge from '../esm/object-merge.js';

defineProperties(Object, {
	/**
	 * Performs a deep merge of multiple objects.
	 * 
	 * @param {...Object} objects The objects to merge
	 * @returns {Object} The merged object
	 */
	merge: _objectMerge
});