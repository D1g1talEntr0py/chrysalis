import _defineProperties from '../esm/define-properties.js';
import _getOrInsert from '../esm/map-get-or-insert.js';

_defineProperties(Map.prototype, {
	/**
	 * Returns the value associated to the key, or inserts the key and the value
	 * produced by the producer function if the key does not exist in the map.
	 *
	 * @memberof Map.prototype
	 * @name getOrInsert
	 * @template K
	 * @template V
	 * @param {K} key The key to get or insert into the Map.
	 * @param {function(): V} producer The function to produce the value to insert into the Map.
	 * @returns {V} The value associated with the key, or the value produced by the producer function.
	 *
	 * @example
	 * ```js
	 * const map = new Map();
	 * const value = map.getOrInsert('key', () => 'value');
	 * console.log(value); // 'value'
	 * ```
	 */
	getOrInsert(key, producer) {
		return _getOrInsert(this, key, producer);
	}
});