/**
 * Checks if an option is supported by the browser.
 * Supported options are: 'capture', 'once', 'passive', 'signal'
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters
 *
 * @param {string} optionName The name of the option to be checked
 * @returns {boolean} Whether the option is supported or not
 */
const _isOptionSupported = (optionName) => {
	let optionSupported = false;

	try {
		new EventTarget().addEventListener('option-test', () => { }, { get [optionName]() { return optionSupported = true } });
	} catch (e) {
		optionSupported = false;
	}

	return optionSupported;
};

export default _isOptionSupported;