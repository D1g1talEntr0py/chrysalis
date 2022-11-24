import { describe, expect, test } from '@jest/globals';
import { _objectMerge } from '../modules.js';

describe('_objectMerge', () => {
	const obj = { headers: { Accept: 'application/json' } };
	const defaults = { headers: {} };

	test('Merge Nested Objects', () => expect(_objectMerge(obj, defaults)).toEqual({ headers: { Accept: 'application/json' } }));
});