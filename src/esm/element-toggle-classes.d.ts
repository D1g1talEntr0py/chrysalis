export default _toggleElementClasses;
export type ClassListEntry = {
    [x: string]: boolean;
};
/** @typedef {Object<string, boolean>} ClassListEntry */
/**
 * Toggles a list of classes utilizing the "force" parameter to either add or remove the class.
 *
 * @example
 * { 'foo': true } - Will add the 'foo' class if it does not exist.
 * { 'bar': false } - Will remove the 'bar' class if it exists.
 * @param {Element} element The {@link Element} to toggle classes.
 * @param {...(ClassListEntry|string)} classListEntries The list of class entries or class names to toggle.
 */
declare function _toggleElementClasses(element: Element, ...classListEntries: (ClassListEntry | string)[]): void;
//# sourceMappingURL=element-toggle-classes.d.ts.map