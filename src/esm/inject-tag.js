
/**
 * Appends a script tag to document.head.
 * 
 * @param {string} src
 * @param {Object} [attributes]
 * @param {boolean} [attributes.async=false]
 * @param {() => void} [attributes.onload=() => {}]
 */
 // @ts-ignore
 const injectScript = (src, { async = false, onload = () => {} } = {}) => {
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
 * @param {string} href
 * @param {string} rel
 * @param {Object} [attributes]
 * @param {string} [attributes.type]
 * @param {string} [attributes.media]
 * @param {() => void} [attributes.onload=() => {}]
 */
 // @ts-ignore
 const injectLink = (href, rel, { type, media, onload = () => {} } = {}) => {
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
 * @param {any} href
 * @param {any} [onload]
 */

 const injectStyleSheet = (href, onload) => injectLink(href, 'stylesheet', { type: 'text/css', onload });

export { injectScript, injectLink, injectStyleSheet };