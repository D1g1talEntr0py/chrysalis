/**
 * Appends a script tag to document.head.
 *
 * @param {string} src
 * @param {Object} [attributes]
 * @param {boolean} [attributes.async=false]
 * @param {() => void} [attributes.onload=() => {}]
 */
export function injectScript(src: string, { async, onload }?: {
    async?: boolean;
    onload?: () => void;
}): void;
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
export function injectLink(href: string, rel: string, { type, media, onload }?: {
    type?: string;
    media?: string;
    onload?: () => void;
}): void;
/**
 * Appends a link tag to document.head for a stylesheet.
 *
 * @param {any} href
 * @param {any} [onload]
 */
export function injectStyleSheet(href: any, onload?: any): void;
