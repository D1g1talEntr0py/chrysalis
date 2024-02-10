import _type from './object-type.js';

/**
 * @param {null|boolean|number|string|Array|Object} o1 The first object to compare.
 * @param {null|boolean|number|string|Array|Object} o2 The second object to compare.
 * @returns {boolean} Whether the two objects are equal.
 */
const _equals = (o1, o2) => {
	if (o1 === o2) { return true }
	if (o1 === null ^ o2 === null || _type(o1) !== _type(o2)) { return false }
	if (typeof o1 !== 'object') { return o1 === o2 }

	const keys = Object.keys(o1);
	if ((o1.length ?? keys.length) !== (o2.length ?? Object.keys(o2).length)) { return false }

	for (const key of keys) {
		if (!_equals(o1[key], o2[key])) { return false }
	}

	return true;
};

export default _equals;