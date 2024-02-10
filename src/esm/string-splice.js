/**
 * Inserts characters at a specific index and returns a new instance.
 * The original string is not modified.
 *
 * @param {string} string The string to splice.
 * @param {number} start The index where the characters are inserted.
 * @param  {...string} chars The characters to insert.
 * @returns {string} A new string with the characters inserted at the specified index.
 */
const _stringSplice = (string, start, ...chars) => {
	const charArray = Array.from(string);
	charArray.splice(start, 0, ...chars);
	
	return charArray.join('');
};

export default _stringSplice;