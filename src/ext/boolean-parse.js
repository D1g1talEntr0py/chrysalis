import _booleanParse from "../esm/boolean-parse.js";
import defineProperties from "../esm/define-properties.js";

defineProperties(Boolean, {
	/**
	 * Parses a string value to a boolean value.
	 *
	 * @returns {boolean} true if the string is "true" and false if the string is "false". If not either of those, an error is thrown.
	 */
	parse: _booleanParse
});