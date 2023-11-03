import _delegateEventListener from '../src/esm/event-target-delegate';
import { JSDOM } from 'jsdom';
import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';

describe('_delegateEventListener', () => {
	let window;
	let document;
	let eventTarget;
	let listener;
	let _mouseEvent;

	beforeEach(() => {
		// setup a new JSDOM and reset eventTarget and listener before each test
		({window} = new JSDOM('<!DOCTYPE html><div id="target"><button class="btn">Click me!</button></div>'));
		document = window.document;
		globalThis.MouseEvent = window.MouseEvent;
		eventTarget = document.getElementById('target');
		listener = jest.fn();
	});

	afterEach(() => {
		// cleanup
		document = null;
		globalThis.MouseEvent = _mouseEvent;
		eventTarget = null;
		listener = null;
	});

	test('should call listener when event target matches selector', () => {
		const eventType = 'click';
		const selector = '.btn';

		_delegateEventListener(eventTarget, eventType, selector, listener);
		const button = document.querySelector(selector);
		button.dispatchEvent(new MouseEvent(eventType, { bubbles: true }));

		expect(listener).toBeCalledTimes(1);
	});

	test('should not call listener when event target does not match selector', () => {
		const eventType = 'click';
		const selector = '.no-such-class';

		_delegateEventListener(eventTarget, eventType, selector, listener);
		const button = document.querySelector('.btn');
		button.dispatchEvent(new MouseEvent(eventType, { bubbles: true }));

		expect(listener).not.toHaveBeenCalled();
	});

	test('should call listener with correct context', () => {
		const eventType = 'click';
		const selector = '.btn';

		_delegateEventListener(eventTarget, eventType, selector, listener);
		const button = document.querySelector(selector);
		button.dispatchEvent(new MouseEvent(eventType, { bubbles: true }));

		expect(listener).toHaveBeenCalledWith(expect.any(MouseEvent));
		expect(listener.mock.instances[0]).toBe(button);
	});
});
