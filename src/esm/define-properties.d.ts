export default _defineProperties;
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
declare function _defineProperties(object: any, properties: any, { configurable, enumerable, writable }?: {
    configurable?: boolean;
    enumerable?: boolean;
    writable?: boolean;
}, override?: boolean): void;
