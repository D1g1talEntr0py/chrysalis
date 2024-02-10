import EvictingCache from 'evicting-cache';
import _generateCacheKey from './generate-cache-key.js';

/**
 * @typedef Cache
 * @property {(key: string) => boolean} has Returns true if the cache contains the specified key.
 * @property {(key: string) => any} get Gets the value associated with the specified key.
 * @property {(value: any) => void} put Inserts a new value into the cache.
 * @property {(key: string, producer: (...args: any) => any) => any} getOrPut Gets the value associated with the specified key, or inserts a new value if the key does not exist.
 */

/**
 * Memoizes a function.
 * Memoization is an optimization technique used primarily to speed up computer programs by storing the results of
 * expensive function calls and returning the cached result when the same inputs occur again.
 * This implementation uses a cache with a fixed capacity.
 * When the cache is full, the least recently used item is evicted.
 * This implementation uses a custom key generator to serialize the arguments.
 * The value is used as a unique key for the memoization cache.
 *
 * @param {Function} fn The function to memoize.
 * @param {number} [capacity=100] The maximum number of items to store in the cache.
 * @param {Cache} [cache=new EvictingCache(capacity)] The cache to use.
 * @returns {Function} The memoized function.
 */
const _memoize = (fn, capacity, cache = new EvictingCache(capacity)) => (...args) => cache.getOrPut(_generateCacheKey(args), () => fn.apply(this, args));

export default _memoize;