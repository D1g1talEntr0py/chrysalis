export default _defineProperties;
/**
 * Defines properties of an Object using Object.defineProperty if the browser supports it.
 * This is used to keep from having to add the function directly to the prototype of the Object
 *
 * @param {Object} object The Object to add the property keys to
 * @param {Object<PropertyKey>} propertyKeys The property keys to add.
 * @param {PropertyDescriptor} [descriptors] The descriptors for the property being defined or modified.
 * @param {boolean} [descriptors.configurable=true] Controls if the property can be changed, deleted. Other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, the value can be changed, and writable can be changed to false).
 * @param {boolean} [descriptors.enumerable=false] Controls if this property shows up during enumeration of the object.
 * @param {boolean} [descriptors.writable=false] Controls if the value associated with the property may be changed with an assignment operator.
 * @param {boolean} [override=false] Controls whether or not the property will replace an existing property with the same name.
 */
declare function _defineProperties(object: any, propertyKeys: any, { configurable, enumerable, writable }?: PropertyDescriptor, override?: boolean): void;
