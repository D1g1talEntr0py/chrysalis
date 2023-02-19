export default _isType;
export type Type = Object.prototype.constructor;
/** @typedef {Object.prototype.constructor} Type */
/**
 * Gets the object type for the provided instance.
 *
 * @param {*} object The instance to compare.
 * @param {Type} type The type to compare.
 * @returns {boolean} true if the provided instance is the type provided, false otherwise.
 */
declare function _isType(object: any, type: Object.prototype.constructor): boolean;
//# sourceMappingURL=object-is-type.d.ts.map