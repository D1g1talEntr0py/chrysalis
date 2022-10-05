export default _toggleElementClasses;
export type ClassListEntry = {
    [x: string]: boolean;
};
/** @typedef {Object.<string, boolean>} ClassListEntry */
/**
 * Toggles a list of classes utilizing the "force" parameter to either add or remove the class
 * { 'foo': true } - Will add the 'foo' class if it does not exist
 * { 'bar': false } - Will remove the 'bar' class if it exists
 *
 * @param {Element} element The {@link Element} to toggle classes.
 * @param {...(ClassListEntry|string)} classListEntries
 */
declare function _toggleElementClasses(element: Element, ...classListEntries: (ClassListEntry | string)[]): void;
