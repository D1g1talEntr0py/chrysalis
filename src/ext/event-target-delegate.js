import _defineProperties from '../esm/define-properties.js';
import _delegateEventListener from '../esm/event-target-delegate.js';

_defineProperties(EventTarget.prototype, {
	/**
	 * Delegates event handling by selector.
	 *
	 * @memberof EventTarget.prototype
	 * @name delegateEventListener
	 * @param {string} eventType The type of event.
	 * @param {string} selector The selector to filter {@link HTMLElement} objects.
	 * @param {EventListener} listener The event listener function.
	 * @param {boolean|AddEventListenerOptions} [options] The options for attaching the {@link EventListener}.
	 * @returns {EventListener} The event listener use to filter and call the supplied listener.
	 */
	delegateEventListener(eventType, selector, listener, options) {
		return _delegateEventListener(this, eventType, selector, listener, options);
	}
});