import _isType from './object-is-type.js';

/**
 * Performs a deep merge of multiple objects.
 *
 * @param {...Object} objects The objects to merge
 * @returns {Object} The merged object
 */
const _objectMerge = (...objects) => {
	return objects.reduce((previousValue, currentValue) => {
		for (const [key, value] of Object.entries(currentValue)) {
			switch (true) {
				case Array.isArray(value) && Array.isArray(previousValue[key]): {
					previousValue[key] = [...new Set([...value, ...previousValue[key]])];
					break;
				}
				case _isType(value, Object) && _isType(previousValue[key], Object): {
					previousValue[key] = _objectMerge(previousValue[key], value);
					break;
				}
				default: previousValue[key] = value;
			}
		}

		return previousValue;
	}, {});
};

export default _objectMerge;