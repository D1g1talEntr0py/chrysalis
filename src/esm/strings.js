import _stringIsBlank from './string-is-blank.js';
import _stringIsEmpty from './string-is-empty.js';
import _stringSplice from './string-splice.js';
import StringTemplate from './string-template.js';

export default class Strings {
	static isEmpty(string) {
		return _stringIsEmpty(string);
	}

	static isBlank(string) {
		return _stringIsBlank(string);
	}

	static splice(string, index, count, add) {
		return _stringSplice(string, index, count, add);
	}

	static template(string, data) {
		return new StringTemplate(string, data);
	}
}