export default class StringTemplate {
    /**
     * Creates an immutable, reusable string template which can be formatted with different data.
     *
     * @param {string} template The string template.
     */
    constructor(template: string);
    _template: string;
    /**
     * Appends to the existing template and returns a new {@link StringTemplate} instance.
     *
     * @param {string} value The string to append to the existing template.
     * @returns {StringTemplate} A new {@link StringTemplate} instance.
     */
    append(value: string): StringTemplate;
    /**
     * Formats the template with the provided data object.
     *
     * @param {Object} data The data for the placeholders in the template.
     * @returns {string} The formatted string.
     */
    format(data: any): string;
}
