/**
 *
 * @template K
 * @template V
 * @param {K} key
 * @param {V} value
 * @typedef {Map<K, V>} MultiMap
 * @extends Map
 */
export default class MultiMap<K, V> extends Map<K, V> {
    constructor();
    constructor(entries?: readonly (readonly [K, V])[]);
    constructor(iterable?: Iterable<readonly [K, V]>);

    /**
     *
     * @param {K} key
     * @returns {Set<V>}
     */
    get(key: K): Set<V>;

    /**
     * Returns an iterable of key, value pairs for every entry in the MultiMap.
     *
     * @returns {IterableIterator<[K, Set<V>]>}
     */
    entries(): IterableIterator<[K, Set<V>]>;

    /**
     * Returns an iterable of values in the MultiMap.
     *
     * @returns {IterableIterator<Set<V>>} The {@link IterableIterator} of values.
     */
    values(): IterableIterator<Set<V>>;

    /**
     * Executes a provided function once per each key/value pair in the MultiMap, in insertion order.
     *
     * @param {function(Set<V>, K, MultiMap<K, V>): void} callback The function called on each iteration.
     * @param {any} [thisArg] Optional object when binding 'this' to the callback.
     */
    forEach(callbackfn: (value: Set<V>, key: K, multiMap: MultiMap<K, V>) => void, thisArg?: any): void;

    /** Returns an iterable of entries in the MultiMap. */
    [Symbol.iterator](): IterableIterator<[K, Set<V>]>;
}

// export type MultiMap<K, Set<V>> = Map<K, Set<V>>;
