export default _delegateEventListener;
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
declare function _delegateEventListener(eventTarget: EventTarget, eventType: string, selector: string, listener: EventListener, options?: boolean | AddEventListenerOptions): EventListener;
