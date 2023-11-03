/**
 * Appends a script tag to document.head.
 *
 * @param {string} src The src attribute value.
 * @param {Object} [attributes] Optional attributes.
 * @param {boolean} [attributes.async=false] The optional async attribute.
 * @param {function(Event)} [attributes.onload=() => {}] The optional onload event handler function.
 */
const _injectScript = (src, { async = false, onload = () => {} } = {}) => {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = src;
	script.async = async;
	script.onload = onload;

	document.head.appendChild(script);
};

/**
 * Appends a link tag to document.head.
 *
 * @param {string} href The href attribute value.
 * @param {string} rel The rel attribute value.
 * @param {Object} [attributes] Optional attributes.
 * @param {string} [attributes.type] The optional type attribute.
 * @param {string} [attributes.media] The optional media attribute.
 * @param {function(Event)} [attributes.onload=() => {}] The optional onload event handler function.
 */
const _injectLink = (href, rel, { type, media, onload = () => {} } = {}) => {
	const link = document.createElement('link');
	link.href = href;
	link.rel = rel;
	if (type) { link.type = type; }
	if (media) { link.media = media; }
	link.onload = onload;

	document.head.appendChild(link);
};

/**
 * Appends a link tag to document.head for a stylesheet.
 *
 * @param {any} href The href attribute value.
 * @param {function(Event)} [onload] The optional onload event handler function.
 * @returns {undefined}
 */
const _injectStyleSheet = (href, onload) => _injectLink(href, 'stylesheet', { type: 'text/css', onload });

export { _injectScript, _injectLink, _injectStyleSheet };
