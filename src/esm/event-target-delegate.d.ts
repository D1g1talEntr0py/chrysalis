export default _delegateEventListener;
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
declare function _delegateEventListener(eventTarget: EventTarget, eventType: string, selector: string, listener: EventListener, options?: boolean | AddEventListenerOptions): EventListener;
//# sourceMappingURL=event-target-delegate.d.ts.map