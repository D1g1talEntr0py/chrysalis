// @ts-nocheck
/**
 * Defines properties of an Object using Object.defineProperty if the browser supports it.
 * This is used to keep from having to add the function directly to the prototype of the Object
 *
 * @param {Object} object - The Object to add properties to
 * @param {Object} properties - The properties to add to the Object
 * @param {Object} [descriptors] 
 * @param {boolean} [descriptors.configurable=true]
 * @param {boolean} [descriptors.enumerable=false]
 * @param {boolean} [descriptors.writable=false]
 * @param {boolean} [override=false]
 */
 const defineProperties = (object, properties, { configurable = true, enumerable = false, writable = false } = {}, override = false) => {
	for (const [ property, value ] of Object.entries(properties)) {
		if (override || !object.hasOwnProperty(property)) {
			Object.defineProperty(object, property, {	configurable: configurable,	enumerable: enumerable,	writable: writable,	value: value	});
		}
	}
};

export default defineProperties;