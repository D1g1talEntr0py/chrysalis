/**
 * Returns the value associated to the key, or inserts the key and the value
 * produced by the producer function if the key does not exist in the map.
 *
 * @template K
 * @template V
 * @module map-get-or-insert
 * @param {Map<K, V>} map The Map to get or insert the key and value into.
 * @param {K} key The key to get or insert into the Map.
 * @param {function(): V} supplier The function to supply the value to insert into the Map.
 * @returns {V} The value associated with the key, or the value produced by the producer function.
 *
 * @example
 * ```js
 * const map = new Map();
 * const value = _getOrInsert(map, 'key', () => 'value');
 * console.log(value); // 'value'
 * ```
 */
const _getOrInsert = (map, key, supplier) => {
	let value = map.get(key);

	if (value === undefined) {
		value = supplier();
		map.set(key, value);
	}

	return value;
};

export default _getOrInsert;