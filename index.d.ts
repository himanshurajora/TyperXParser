
/**
 * The Parser will generate a string where replacing all new lines with \n and all tabs with \t
 * @param {string} input - The input string
 * @param {number} tabSize - The size of the tab in spaces (defaults to 4)
 * @returns {string} - The output string
 * @example
 * Parser('const a = 10;\nconst b = 20;\nif(a > b) {console.log(a);} else {console.log(b);}')
 * // returns 'const a = 10;\tconst b = 20;\tif(a > b) {console.log(a);} else {console.log(b);}'
 * @author Himanshu Jangid
 * @version 0.0.1
 */
export default function Parser(input: string, tabSize: number) : string
