/**
 * Appends a script tag to document.head.
 *
 * @param {string} src The src attribute value.
 * @param {Object} [attributes] Optional attributes.
 * @param {boolean} [attributes.async=false] The optional async attribute.
 * @param {function(Event)} [attributes.onload=() => {}] The optional onload event handler function.
 */
export function injectScript(src: string, { async, onload }?: {
    async?: boolean;
    onload?: (arg0: Event) => any;
}): void;
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
export function injectLink(href: string, rel: string, { type, media, onload }?: {
    type?: string;
    media?: string;
    onload?: (arg0: Event) => any;
}): void;
/**
 * Appends a link tag to document.head for a stylesheet.
 *
 * @param {any} href The href attribute value.
 * @param {function(Event)} [onload] The optional onload event handler function.
 * @returns {undefined}
 */
export function injectStyleSheet(href: any, onload?: (arg0: Event) => any): undefined;
