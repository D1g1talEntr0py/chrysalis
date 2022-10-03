const isEmptyRegEx = /^\s*$/;
/**
 * Checks to see if the string is blank.
 *
 * @param {string} string The string to check.
 * @returns {boolean} true if the string is all blanks, false otherwise.
 */
const _stringIsBlank = (string) => !string || isEmptyRegEx.test(string);

export default _stringIsBlank;