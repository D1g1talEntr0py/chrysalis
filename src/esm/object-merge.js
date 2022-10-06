import _isType from './object-is-type.js';

/**
 * Performs a deep merge of multiple objects.
 *
 * @param {...Object} objects The objects to merge
 * @returns {Object} The merged object
 */
const _objectMerge = (...objects) => {
	return objects.reduce((prev, obj) => {
		Object.keys(obj).forEach(key => {
			const pVal = prev[key];
			const oVal = obj[key];

			if (Array.isArray(pVal) && Array.isArray(oVal)) {
				prev[key] = [...new Set([...oVal, ...pVal])];
			}	else if (_isType(pVal, Object) && _isType(oVal, Object)) {
				prev[key] = _objectMerge(pVal, oVal);
			}	else {
				prev[key] = oVal;
			}
		});

		return prev;
	}, {});
};

export default _objectMerge;