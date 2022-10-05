import _defineProperties from '../esm/define-properties.js';
import _delegateEventListener from '../esm/event-target-delegate.js';

_defineProperties(EventTarget.prototype, {
	/**
	 * Delegates event handling by selector.
	 *
	 * @param {string} eventType
	 * @param {string} selector
	 * @param {EventListener} listener
	 * @param {boolean|AddEventListenerOptions} [options]
	 * @memberOf EventTarget.prototype
	 * @name delegateEventListener
	 * @return {EventListener}
	 */
	delegateEventListener(eventType, selector, listener, options) {
		return _delegateEventListener(this, eventType, selector, listener, options);
	}
});