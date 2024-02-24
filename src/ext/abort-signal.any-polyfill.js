import _defineProperties from '../esm/define-properties.js';

const abort = 'abort';
const listenerOptions = { once: true, passive: true };

/** ლ(ಠ益ಠლ) Firefox?!?! */
_defineProperties(AbortSignal, {
	/**
	 * Creates a new `AbortSignal` that will be aborted when any of the provided signals are aborted.
	 *
	 * @memberof AbortSignal
	 * @name AbortSignal.any
	 * @param {AbortSignal[]} signals The signals to listen to.
	 * @returns {AbortSignal} A new `AbortSignal` that will be aborted when any of the provided signals are aborted.
	 */
	any(signals) {
		const controller = new AbortController();
		/** @type {Array<[AbortSignal, EventListener]>} */
		const listeners = [];

		for (const signal of signals) {
			if (signal.aborted) {
				// Abort immediately if any are already aborted
				controller.abort(signal.reason);
			} else {
				/** @type {EventListener} */
				const listener = ({ target: { reason } }) => controller.abort(reason);
				signal.addEventListener(abort, listener, listenerOptions);
				listeners.push([ signal, listener ]);
			}
		}

		controller.signal.addEventListener(abort, () => {
			listeners.forEach(([ abortSignal, eventListener ]) => abortSignal.removeEventListener(abort, eventListener, listenerOptions));
		}, listenerOptions);

		return controller.signal;
	}
}, { writable: true, configurable: true });