import _construct from './object-construct.js';
import _objectIsEmpty from './object-is-empty.js';
import _defineProperties from './define-properties.js';
import _isType from './object-is-type.js';
import _objectMerge from './object-merge.js';
import _type from './object-type.js';

export default class Objects {
	static construct(Class, ...args) {
		return _construct(Class, ...args);
	}

	static isEmpty(object) {
		return _objectIsEmpty(object);
	}

	static defineProperties(object, propertyKeys, { configurable, enumerable, writable } = {}, override) {
		_defineProperties(object, propertyKeys, { configurable, enumerable, writable }, override);
	}

	static type(object) {
		return _type(object);
	}

	static isType(object, type) {
		return _isType(object, type);
	}

	static merge(...objects) {
		return _objectMerge(...objects);
	}
}