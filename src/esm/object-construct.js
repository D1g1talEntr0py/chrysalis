/**
 * Construct an object with the given arguments.
 *
 * @param {any} value The value to construct.
 * @param {Array<any>} [args=[]] The arguments to pass to the constructor.
 * @returns {any} The constructed object.
 */
const _construct = (value, args = []) => {
	try {
		return Reflect.construct(value, args);
	} catch (error) {
		return value(...args);
	}
};

export default _construct;