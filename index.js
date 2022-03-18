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
function Parser(input, tabSize = 4) {
    // trim the input to remove any whitespace
    input = input.trim()
    let tab = '';
    for(let i = 0; i < tabSize; i++) {
        tab += ' ';
    }
    // regular expression for tabs
    let tabRegex = new RegExp(tab, 'g');
    // replace all new lines with \n and all tabs with \t and return the output and then replace all " with \"
    return input.replace(/\n/g, '\\n').replace(tabRegex, '\\t').replace(/"/g, '\\"').replace(/\t/g,'\\t');
}

module.exports = Parser;