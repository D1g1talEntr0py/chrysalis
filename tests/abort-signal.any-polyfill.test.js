import { beforeAll, afterAll, describe, expect, it, jest } from '@jest/globals';

describe('AbortSignal.any', () => {
	let nativeAbortSignalAny;

	beforeAll(async () => {
		// AbortSignal polyfill
		if (typeof globalThis.AbortSignal.any !== 'undefined') {
			nativeAbortSignalAny = globalThis.AbortSignal.any;
			delete globalThis.AbortSignal.any;
		}
		await import('../src/ext/abort-signal.any-polyfill.js');
	});

	afterAll(() => {
		// AbortSignal polyfill
		if (nativeAbortSignalAny !== undefined) {
			globalThis.AbortSignal.any = nativeAbortSignalAny;
			nativeAbortSignalAny = null;
		}
	});

	it('should create a new AbortSignal that will be aborted when any of the provided signals are aborted', () => {
		const abortController1 = new AbortController();
		const abortController2 = new AbortController();
		const abortController3 = new AbortController();

		const anySignal = AbortSignal.any([abortController1.signal, abortController2.signal, abortController3.signal]);

		expect(anySignal.aborted).toBe(false);

		const abortEvent = new CustomEvent('abort', { detail: { cause: new DOMException('The request was aborted', 'AbortError') } });

		abortController1.abort(abortEvent);
		expect(anySignal.aborted).toBe(true);
		expect(anySignal.reason).toBe(abortController1.signal.reason);
	});

	it('should immediately abort if any of the provided signals are already aborted', () => {
		const abortController1 = new AbortController();
		const abortController2 = new AbortController();
		const abortController3 = new AbortController();

		abortController2.abort();

		const anySignal = AbortSignal.any([abortController1.signal, abortController2.signal, abortController3.signal]);

		expect(anySignal.aborted).toBe(true);
		expect(anySignal.reason).toBe(abortController2.signal.reason);
	});

	it('should remove event listeners when the anySignal is aborted', () => {
		const abortController1 = new AbortController();
		const abortController2 = new AbortController();
		const abortController3 = new AbortController();

		const signal1 = abortController1.signal;
		const signal2 = abortController2.signal;
		const signal3 = abortController3.signal;

		AbortSignal.any([signal1, signal2, signal3]);

		const removeEventListener1 = jest.spyOn(signal1, 'removeEventListener');
		const removeEventListener2 = jest.spyOn(signal2, 'removeEventListener');
		const removeEventListener3 = jest.spyOn(signal3, 'removeEventListener');

		abortController1.abort();

		expect(removeEventListener1).toHaveBeenCalled();
		expect(removeEventListener2).toHaveBeenCalled();
		expect(removeEventListener3).toHaveBeenCalled();
	});
});