import Benchmark from 'benchmark';
// import stringify from 'safe-stable-stringify';
// import ObjectWriter from '../src/esm/string-serializer.js';
// import _generateCacheKey from '../src/esm/generate-cache-key.js';
// import _stringify from '../src/esm/stringify.js';

const obj = { a: 1, b: '2', c: true, d: null, e: undefined, typedArray: new Uint8Array([1, 2, 3]), f: { g: 3 }, h: [4, 2] };
// const objectWriter = new ObjectWriter();
// const obj = { a: 1, b: '2', c: true, d: null, e: undefined, f: { g: 3 }, h: [4, 2] };
// const arr = [1, '2', true, null, undefined];
// const str = 'test';
// const num = 123;
// const bool = true;
// const nul = null;
// const undef = undefined;
// const date = new Date(2020, 0, 1);
// const func = () => {};
// const sym = Symbol('test');
// const map = new Map([['a', 1], ['b', 2]]);
// const set = new Set([1, 2]);
const keys = Object.keys(obj);


const _forTraditional = (obj) => {
	const result = [];
	for (let i = 0; i < keys.length; i++) {
		const value = obj[keys[i]];
		result[i] = value;
	}
};

const _forOf = (obj) => {
	const result = [];
	let value;
	for (const key of keys) {
		value = obj[key];
		result.push(value);
	}
};

const _forOptimized = (obj) => {
	const result = [];
	for (let i = 0, length, value; i < length; i++) {
		value = obj[keys[i]];
		result[i] = value;
	}
};

const _forOptimal = (obj) => {
	const result = [];
	for (let i = 0, length, value; i < length && (value = obj[keys[i]]); i++) {
		result[i] = value;
	}
};

const _while = (obj) => {
	const result = [];
	let i = 0, length, value;
	while (i < length && (value = obj[keys[i]])) {
		result[i++] = value;
	}
};

new Benchmark.Suite('for')
	.add('traditional', () => _forTraditional(obj))
	.add('of', () => _forOf(obj))
	.add('optimized', () => _forOptimized(obj))
	.add('optimal', () => _forOptimal(obj))
	.add('while', () => _while(obj))
	.on('cycle', event => console.log(String(event.target)))
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	.run({ async: true });

// new Benchmark.Suite('stringify object')
// 	.add('stringify', () => _stringify(obj))
// 	.add('safe-stable-stringify', () => stringify(obj))
// 	.add('generate-cache-key', () => _generateCacheKey(obj))
// 	// .add('ObjectWriter', () => objectWriter.toJson(obj))
// 	// .add('JSON.stringify', () => JSON.stringify(obj))
// 	.on('cycle', event => console.log(String(event.target)))
// 	.on('complete', function () {
// 		console.log('Fastest is ' + this.filter('fastest').map('name'));
// 	})
// 	.run({ async: true });

// new Benchmark.Suite('stringify array')
// 	.add('stringify', () => _stringify(arr))
// 	.add('JSON.stringify', () => JSON.stringify(arr))
// 	.on('cycle', event => console.log(String(event.target)))
// 	.run();