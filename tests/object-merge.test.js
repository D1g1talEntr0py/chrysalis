import { describe, expect, test } from '@jest/globals';
import { _objectMerge } from '../modules.js';

describe('_objectMerge', () => {
	const config = { headers: { Accept: ['application/json'] } };
	const defaults = { path: '/api/music/artists', headers: {} };

	test('Merge 2 objects', () => expect(_objectMerge(config, defaults)).toEqual({ path: '/api/music/artists', headers: { Accept: ['application/json'] } }));
	test('Merge 3 objects', () => expect(_objectMerge({ path: '/api/music/artists' }, defaults, config)).toEqual({ path: '/api/music/artists', headers: { Accept: ['application/json'] } }));
	test('Merge objects containing arrays', () => expect(_objectMerge({ path: '/api/music/artists', headers: { Accept: ['text/xml'] } }, defaults, config)).toEqual({ path: '/api/music/artists', headers: { Accept: ['application/json', 'text/xml'] } }));
});