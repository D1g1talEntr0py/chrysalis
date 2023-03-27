import _type from './object-type.js';

/**
 * Performs a deep merge of multiple objects.
 *
 * @param {...Object} objects The objects to merge
 * @returns {Object} The merged object
 */
const _objectMerge = (...objects) => {
	const target = {};
	for (const source of objects) {
		if (_type(source) != Object) return undefined;

		let descriptor, sourceType;
		for (const property of Object.getOwnPropertyNames(source)) {
			descriptor = Object.getOwnPropertyDescriptor(source, property);
			if (descriptor.enumerable) {
				sourceType = _type(source[property]);
				if (sourceType == Object) {
					descriptor.value = _type(target[property]) == Object ? _objectMerge(target[property], source[property]) : { ...source[property] };
				} else if (sourceType == Array) {
					descriptor.value = Array.isArray(target[property]) ? [ ...new Set([ ...source[property], ...target[property] ]) ] : [ ...source[property] ];
				}

				target[property] = descriptor.value;
			}
		}
	}

	return target;
};

export default _objectMerge;