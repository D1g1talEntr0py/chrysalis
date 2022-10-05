export default _type;
export type Type = Object.prototype.constructor;
/** @typedef {Object.prototype.constructor} Type */
/**
 * Gets the object type for the current instance.
 *
 * @param {*} object The object to check
 * @returns {Type} The object type
 */
declare function _type(object: any): Object.prototype.constructor;
