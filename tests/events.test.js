import Events from '../src/esm/events.js';
import { JSDOM } from 'jsdom';
import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';

class MockEventTarget {
	constructor() {
		this.listeners = {};
	}

	addEventListener(type, listener, options) {
		if (options && options.once) {
			throw new Error('Unsupported option');
		} else {
			this.listeners[type] = listener;
		}
	}

	dispatchEvent(event) {
		const listener = this.listeners[event.type];
		if (listener) {
			listener(event);
		}
	}
}

let _customEvent;
let _event;
let window;
let document;
let button;

beforeEach(() => {
	({ window } = new JSDOM('<!DOCTYPE html><button id="testButton"></button>'));
	document = window.document;
	_customEvent = globalThis.CustomEvent;
	_event = globalThis.Event;
	globalThis.CustomEvent = window.CustomEvent;
	globalThis.Event = window.Event;
	button = document.querySelector('#testButton');
});

afterEach(() => {
	document = null;
	globalThis.CustomEvent = _customEvent;
	globalThis.Event = _event;
	button = null;
});

describe('Events', () => {
	describe('addListener', () => {
		test('should add an event listener to an EventTarget', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'click', mockCallback);
			button.click();

			expect(mockCallback).toHaveBeenCalled();
		});

		test('should throw a TypeError if target is null or undefined', () => {
			const mockCallback = jest.fn();

			expect(() => {
				Events.addListener(null, 'click', mockCallback);
			}).toThrow(TypeError);
		});

		test('should throw a TypeError if event type is not a string', () => {
			const mockCallback = jest.fn();

			expect(() => {
				Events.addListener(button, {}, mockCallback);
			}).toThrow(TypeError);
		});

		test('should add an event listener to an EventTarget with capture option', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'click', mockCallback, { capture: true });
			button.click();

			expect(mockCallback).toHaveBeenCalled();
		});

		test('should add an event listener to an EventTarget with capture option as boolean', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'click', mockCallback, true);
			button.click();

			expect(mockCallback).toHaveBeenCalled();
		});

		test('should add an event listener to an EventTarget with once option', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'click', mockCallback, { once: true });
			button.click();
			button.click();

			expect(mockCallback).toHaveBeenCalledTimes(1);
		});

		test('should add an event listener to an EventTarget with passive option', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'click', mockCallback, { passive: true });
			button.click();

			expect(mockCallback).toHaveBeenCalled();
		});
	});

	describe('dispatch', () => {
		test('should dispatch an event to an EventTarget', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'customEvent', mockCallback);

			Events.dispatch(button, 'customEvent');

			expect(mockCallback).toHaveBeenCalled();
		});

		test('should dispatch an event with detail to an EventTarget', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'customEvent', mockCallback);

			Events.dispatch(button, 'customEvent', { data: 'Hello, World!' });

			expect(mockCallback).toHaveBeenCalled();
			expect(mockCallback.mock.calls[0][0].detail.data).toBe('Hello, World!');
		});

		test('should dispatch a custom event to an EventTarget', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'customEvent', mockCallback);

			Events.dispatch(button, 'customEvent', { bubbles: true, cancelable: true });

			expect(mockCallback).toHaveBeenCalled();
		});

		test('should not dispatch an event if the target is null or undefined', () => {
			expect(() => Events.dispatch(null, 'customEvent', { data: 'Hello, World!' })).toThrow(TypeError);
		});

		test('should not dispatch an event if the type is not a string', () => {
			expect(() => Events.dispatch(button, {}, { data: 'Hello, World!' })).toThrow(TypeError);
		});
	});

	describe('delegateListener', () => {
		test('should delegate an event listener to an EventTarget', () => {
			const mockCallback = jest.fn();
			const div = document.createElement('div');
			button.appendChild(div);

			Events.delegateListener(button, 'click', 'div', mockCallback);
			div.click();

			expect(mockCallback).toHaveBeenCalled();
		});

		test('should delegate an event listener to an EventTarget with capture option', () => {
			const mockCallback = jest.fn();
			const delegatingListener = Events.delegateListener(button, 'click', '#testButton', mockCallback, { capture: true });
			button.click();

			expect(mockCallback).toHaveBeenCalled();
			expect(delegatingListener).toBeDefined();
		});

		test('should delegate an event listener to an EventTarget with once option', () => {
			const mockCallback = jest.fn();
			const delegatingListener = Events.delegateListener(button, 'click', '#testButton', mockCallback, { once: true });
			button.click();
			button.click();

			expect(mockCallback).toHaveBeenCalledTimes(1);
			expect(delegatingListener).toBeDefined();
		});

		test('should delegate an event listener to an EventTarget with unsupported option', () => {
			const mockCallback = jest.fn();
			const delegatingListener = Events.delegateListener(button, 'click', '#testButton', mockCallback, { unsupportedOption: true });
			button.click();

			expect(mockCallback).toHaveBeenCalled();
			expect(delegatingListener).toBeDefined();
		});

		test('should throw an error if target is null or undefined', () => {
			const mockCallback = jest.fn();

			expect(() => Events.delegateListener(null, 'click', '#testButton', mockCallback)).toThrow(TypeError);
		});

		test('should not dispatch an event if the type is not a string', () => {
			expect(() => Events.delegateListener(button, {}, { data: 'Hello, World!' })).toThrow(TypeError);
		});
	});

	describe('dispatchListener', () => {
		test('should dispatch a custom event to an EventTarget and call the listener', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'customEvent', mockCallback);

			Events.dispatchListener(button, 'customEvent', { data: 'Hello, World!' });

			expect(mockCallback).toHaveBeenCalled();
			expect(mockCallback.mock.calls[0][0].detail.data).toBe('Hello, World!');
		});
	});

	describe('removeListener', () => {
		test('should remove an event listener from an EventTarget', () => {
			const mockCallback = jest.fn();
			Events.addListener(button, 'click', mockCallback);
			Events.removeListener(button, 'click', mockCallback);
			button.click();

			expect(mockCallback).not.toHaveBeenCalled();
		});

		test('should remove a delegated event listener from an EventTarget', () => {
			const mockCallback = jest.fn();
			const div = document.createElement('div');
			button.appendChild(div);

			Events.delegateListener(button, 'div', 'click', mockCallback);
			Events.removeListener(button, 'div:click', mockCallback);
			div.click();

			expect(mockCallback).not.toHaveBeenCalled();
		});
	});

	describe('unsupportedOptions', () => {
		/** @type {EventTarget} */
		let target;
		let handler;

		beforeEach(() => {
			target = EventTarget;
			globalThis.EventTarget = MockEventTarget;
			target = new MockEventTarget();
			handler = jest.fn();
		});

		afterEach(() => {
			globalThis.EventTarget = target;
			target = null;
			handler = null;
		});

		test('addListener should add listener even when "once" option is unsupported', () => {
			Events.addListener(button, 'click', handler, { once: true });
			button.click();
			button.click();

			expect(handler).toHaveBeenCalledTimes(1);
		});

		test('delegateListener should add listener even when "once" option is unsupported', () => {
			const delegatingListener = Events.delegateListener(button, 'click', '#testButton', handler, { once: true });
			button.click();
			button.click();

			expect(handler).toHaveBeenCalledTimes(1);
			expect(delegatingListener).toBeDefined();
		});
	});
});
