const Parser = require('./index')

// The input string - a simple if statement
let input = `
const a = 10;
const b = 20;
if(a > b) {
    console.log(a);
} else {
    console.log(b);
}`

test('The Output of ' + input, () => {
    expect(Parser(input)).toEqual(`const a = 10;\\nconst b = 20;\\nif(a > b) {\\n\\tconsole.log(a);\\n} else {\\n\\tconsole.log(b);\\n}`)
})

// complex input - matrix multiplication
let complexInput = `
const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const c = [];
for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
        let sum = 0;
        for(let k = 0; k < a[i].length; k++) {
            sum += a[i][k] * b[k][j];
        }
        c[i][j] = sum;
    }
}
`
test('The Output of ' + complexInput, () => {
    expect(Parser(complexInput)).toEqual(`const a = [\\n\\t[1, 2, 3],\\n\\t[4, 5, 6],\\n\\t[7, 8, 9]\\n];\\nconst b = [\\n\\t[1, 2, 3],\\n\\t[4, 5, 6],\\n\\t[7, 8, 9]\\n];\\nconst c = [];\\nfor(let i = 0; i < a.length; i++) {\\n\\tfor(let j = 0; j < b.length; j++) {\\n\\t\\tlet sum = 0;\\n\\t\\tfor(let k = 0; k < a[i].length; k++) {\\n\\t\\t\\tsum += a[i][k] * b[k][j];\\n\\t\\t}\\n\\t\\tc[i][j] = sum;\\n\\t}\\n}`)
})

// test for "
let testForQuote = `
const a = "Hello World";
`
test('The Output of ' + testForQuote, () => {
    expect(Parser(testForQuote)).toEqual(`const a = \\"Hello World\\";`)
})


