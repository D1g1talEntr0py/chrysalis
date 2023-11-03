import _isOptionSupported from './event-is-option-supported.js';
import _delegateEventListener from './event-target-delegate.js';
import _type from './object-type.js';

/** @typedef {'capture'|'once'|'passive'|'signal'} AddEventListenerOption */
/** @typedef {'capture'|'once'|'passive'|'signal'|'detail'} AddCustomEventListenerOption */

/**
 * @typedef {Object} AddEventListenerOptions The options for the `addEventListener()` method
 * @property {boolean} [capture] The event handler is executed in the capturing phase
 * @property {boolean} [once] The event handler is removed immediately after it has been invoked the first time
 * @property {boolean} [passive] The event handler will not call `preventDefault()`
 * @property {AbortSignal} [signal] The event handler will be executed synchronously when calling `dispatchEvent()`
 */

/**
 * @typedef {Object} AddCustomEventListenerOptions The options for the `addEventListener()` method
 * @property {boolean} [capture] The event handler is executed in the capturing phase
 * @property {boolean} [once] The event handler is removed immediately after it has been invoked the first time
 * @property {boolean} [passive] The event handler will not call `preventDefault()`
 * @property {AbortSignal} [signal] The event handler will be executed synchronously when calling `dispatchEvent()`
 * @property {any} [detail] An extra option for the event listener. This can be used to pass data to the event listener.
 */

class Events {
	/** @constant {Object<string, AddEventListenerOption>} */
	static ListenerOption = { CAPTURE: 'capture', ONCE: 'once', PASSIVE: 'passive', SIGNAL: 'signal' };

	/**
	 * Attaches an event {@link EventListener} to the supplied {@link EventTarget}.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	 *
	 * @static
	 * @param {EventTarget} target The object to attach the event {@link EventListener} to.
	 * @param {string} type The type of event.
	 * @param {EventListener} listener The event listener function.
	 * @param {boolean|AddEventListenerOptions} [options] The options for attaching the {@link EventListener}.
	 * @returns {void}
	 */
	static addListener(target, type, listener, options) {
		if (!target) {
			throw new TypeError('The `target` parameter is required');
		}	else if (_type(type) != String) {
			throw new TypeError(`Invalid event type: ${type}`);
		}

		if (_type(options) != Boolean && Events.#getUnsupportedOptions(options).includes(Events.ListenerOption.ONCE)) {
			Events.#addEventListenerOnce(target, type, listener, options);
		} else {
			target.addEventListener(type, listener, options);
		}
	}

	/**
	 * Attaches an event {@link EventListener} to the supplied {@link EventTarget} that will be removed after the first call.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	 *
	 * @static
	 * @private
	 * @param {EventTarget} target The object to attach the event {@link EventListener} to.
	 * @param {string} type The type of event.
	 * @param {EventListener} listener The event listener function.
	 * @param {boolean|AddEventListenerOptions} [options] The options for attaching the {@link EventListener}.
	 * @returns {void}
	 */
	static #addEventListenerOnce(target, type, listener, options) {
		target.addEventListener(type, function eventListener(event) {
			target.removeEventListener(type, eventListener);
			listener.apply(this, [event]);
		}, options);
	}

	/**
	 * Delegates event handling by selector.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	 *
	 * @static
	 * @param {EventTarget} target The object to attach the event {@link EventListener} to.
	 * @param {string} type The type of event.
	 * @param {string} selector The selector to filter {@link HTMLElement} objects.
	 * @param {EventListener} listener The event listener function.
	 * @param {boolean|AddEventListenerOptions} [options] The options for attaching the {@link EventListener}.
	 * @returns {EventListener} The event listener use to filter and call the supplied listener.
	 */
	static delegateListener(target, type, selector, listener, options) {
		if (!target) {
			throw new TypeError('The `target` parameter is required');
		} else if (_type(type) != String) {
			throw new TypeError(`Invalid event type: ${type}`);
		}

		/** @type {EventListener} */
		let delegatingListener;

		if (_type(options) != Boolean && Events.#getUnsupportedOptions(options).includes(Events.ListenerOption.ONCE)) {
			delegatingListener = Events.#delegateEventListenerOnce(target, type, selector, listener, options);
		} else {
			delegatingListener = _delegateEventListener(target, type, selector, listener, options);
		}

		return delegatingListener;
	}

	/**
	 * Delegates event handling by selector that will be removed after the first call.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	 *
	 * @static
	 * @private
	 * @param {EventTarget} target The object to attach the event {@link EventListener} to.
	 * @param {string} type The type of event.
	 * @param {string} selector The selector to filter {@link HTMLElement} objects.
	 * @param {EventListener} listener The event listener function.
	 * @param {boolean|AddEventListenerOptions} [options] The options for attaching the {@link EventListener}.
	 * @returns {EventListener} The event listener use to filter and call the supplied listener.
	 */
	static #delegateEventListenerOnce(target, type, selector, listener, options) {
		const delegatingListener = _delegateEventListener(target, type, selector, function eventHandler(event) {
			target.removeEventListener(type, delegatingListener);
			listener.apply(this, [event]);
		}, options);

		return delegatingListener;
	}

	/**
	 * Dispatches an event to the supplied {@link EventTarget}.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail
	 *
	 * @static
	 * @param {EventTarget} target The object to dispatch the event to.
	 * @param {string} type The type of event.
	 * @param {any} [detail] The data to be passed to the event.
	 * @returns {boolean} Whether the event was dispatched or not
	 */
	static dispatch(target, type, detail) {
		return Events.#dispatch(target, type, { detail, bubbles: true });
	}

	/**
	 * Dispatches an event to the supplied {@link EventTarget}.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	 *
	 * @static
	 * @param {EventTarget} target The object to dispatch the event to.
	 * @param {string} type The type of event.
	 * @param {any} [detail] The data to be passed to the event.
	 * @returns {boolean} Whether the event was dispatched or not
	 */
	static dispatchListener(target, type, detail) {
		return Events.#dispatch(target, type, { detail });
	}

	/**
	 * Dispatches an event to the supplied {@link EventTarget}.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail
	 *
	 * @static
	 * @private
	 * @param {EventTarget} target The object to dispatch the event to.
	 * @param {string} type The type of event.
	 * @param {AddEventListenerOptions|AddCustomEventListenerOptions} [options] The options for dispatching the event.
	 * @returns {boolean} Whether the event was dispatched or not
	 */
	static #dispatch(target, type, options) {
		if (!target) {
			throw new TypeError('The `target` parameter is required');
		} else if (_type(type) != String) {
			throw new TypeError(`Invalid event type: ${type}`);
		}

		return target.dispatchEvent(options?.detail ? new CustomEvent(type, options) : new Event(type, options));
	}

	/**
	 * Removes an event {@link EventListener} from the supplied {@link EventTarget}.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#matching_event_listeners_for_removal
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#the_eventlistener_parameter
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#the_options_parameter
	 *
	 * @static
	 * @param {EventTarget} target The object to remove the event {@link EventListener} from.
	 * @param {string} type The type of event.
	 * @param {EventListener} listener The event listener function.
	 * @param {boolean|AddEventListenerOptions} [options] The options for removing the {@link EventListener}.
	 * @returns {void}
	 */
	static removeListener(target, type, listener, options) {
		target?.removeEventListener(type, listener, options);
	}

	/**
	 * Returns a list of unsupported options.\
	 * Supported options are: capture, once, passive
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	 *
	 * @private
	 * @static
	 * @param {Object} options The options to be checked
	 * @returns {Array} Array of unsupported options
	 */
	static #getUnsupportedOptions(options) {
		return options ? Object.keys(options).filter(option => !Events.#isOptionSupported(option)) : [];
	}

	/**
	 * Checks if an option is supported
	 * Supported options are: capture, once, passive
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	 *
	 * @private
	 * @static
	 * @param {string} optionName The name of the option to be checked
	 * @returns {boolean} Whether the option is supported or not
	 */
	static #isOptionSupported(optionName) {
		return _isOptionSupported(optionName);
	}
}

export default Events;