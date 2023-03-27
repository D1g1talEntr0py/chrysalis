import { describe, expect, test } from '@jest/globals';
import { _objectMerge, _arrayRemove } from '../modules.js';

describe('_objectMerge', () => {
	const config = { headers: { Accept: ['application/json'] } };
	const defaults = { path: '/api/music/artists', headers: { 'Content-Type': 'application/json' } };

	const merged = _objectMerge(config, defaults);

	test('Pass invalid parameters', () => expect(_objectMerge(5)).toBeUndefined());
	test('Merge 2 objects', () => expect(_objectMerge(config, defaults)).toEqual({ path: '/api/music/artists', headers: { Accept: ['application/json'], 'Content-Type': 'application/json' } }));
	test('Merge 3 objects', () => expect(_objectMerge({ path: '/api/music/artists' }, defaults, config)).toEqual({ path: '/api/music/artists', headers: { Accept: ['application/json'], 'Content-Type': 'application/json' } }));
	test('Merge objects containing arrays', () => expect(_objectMerge({ path: '/api/music/artists', headers: { Accept: ['text/xml'] } }, defaults, config)).toEqual({ path: '/api/music/artists', headers: { Accept: ['application/json', 'text/xml'], 'Content-Type': 'application/json' } }));
	test('Merge creates new arrays', () => {
		const newObject = _objectMerge(defaults, config, { path: '/api/music/artists', headers: { Accept: ['text/xml'] } });
		const index = newObject.headers['Accept'].findIndex((accept) => accept == 'application/json');
		_arrayRemove(newObject.headers['Accept'], index);
		return expect(config.headers.Accept).toStrictEqual(['application/json']);
	});
	test('Merge creates new objects', () => {
		const newObject = _objectMerge(merged, { path: '/api/music/artists' });
		delete newObject.headers['Content-Type'];
		return expect(merged.headers['Content-Type']).toBe('application/json');
	});
	test('Config was not modified', () => expect(config).toStrictEqual({ headers: { Accept: ['application/json'] } }));
	test('Defaults were not modified', () => expect(defaults).toStrictEqual({ path: '/api/music/artists', headers: { 'Content-Type': 'application/json' } }));
});