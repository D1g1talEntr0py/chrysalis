/**
 * Gets the object type for the current instance.
 * 
 * @param {*} object The object to check
 * @returns {import('../typedef/global.js').Type} The object type
 */
const _type = (object) => object?.constructor ?? object?.prototype?.constructor ?? globalThis[Object.prototype.toString.call(object).slice(8, -1)] ?? object;

export default _type;