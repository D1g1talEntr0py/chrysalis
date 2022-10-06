/**
 * Delegates event handling by selector.
 *
 * @param {EventTarget} eventTarget The object to attach the event {@link EventListener} to.
 * @param {string} eventType The type of event.
 * @param {string} selector The selector to filter {@link HTMLElement} objects.
 * @param {EventListener} listener The event listener function.
 * @param {boolean|AddEventListenerOptions} [options] The options for attaching the {@link EventListener}.
 * @returns {EventListener} The event listener use to filter and call the supplied listener.
 */
const _delegateEventListener = (eventTarget, eventType, selector, listener, options) => {
	/**
	 * The event listener use to filter and call the supplied listener.
	 *
	 * @param {Event} event The event
	 */
	const eventListener = (event) => {
		if (event.target && event.target.matches(selector)) {
			listener.call(event.target, event);
		}
	};

	eventTarget.addEventListener(eventType, eventListener, options);

	return eventListener;
};

export default _delegateEventListener;