/**
 * Delegates event handling by selector.
 *
 * @param {EventTarget} eventTarget
 * @param {string} eventType
 * @param {string} selector
 * @param {EventListener} listener
 * @param {boolean|AddEventListenerOptions} [options]
 * @memberOf EventTarget.prototype
 * @name delegateEventListener
 * @return {EventListener}
 */
const _delegateEventListener = (eventTarget, eventType, selector, listener, options) => {
	/**
	 * 
	 * @param {Event} event 
	 */
	const eventListener = (event) => {
		// @ts-ignore
		if (event.target && event.target.matches(selector)) {
			listener.call(event.target, event);
		}
	};

	eventTarget.addEventListener(eventType, eventListener, options);

	return eventListener;
};

export default _delegateEventListener;