export default _arrayInsert;
/**
 * Inserts the entry in a sorted array in the correct position. The array must be sorted in ascending order to work
 *
 * @param {Array} array The Array to insert an entry.
 * @param {*} entry The entry to add to the array.
 * @param {string} [property] The name of the property to use as the compare if the entry is an Object.
 */
declare function _arrayInsert(array: any[], entry: any, property?: string): void;
