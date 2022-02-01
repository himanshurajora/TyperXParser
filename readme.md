## Typerx Parser

Yes as simple as that.

I had some issues while creating the typerx project, so I created this parser library

**What was the problem?**

It was very hard to create diffrent tests because I had to write all code and then replace newlines and tabs with \n and \t.

**How did I solve it?**

Well I just made a simple Parser

I know What you're thinking : 🤔 Hey Himanshu This is technically not a parser, it's just replacing newlines and tabs with \n and \t.

Well my friend you are right and wrong. Technically it is a parser, because it making language conversion.
I am calling that \t\n Programming Language.

``` npm install typerxparser ``` to install the library

Example 1:

Input : ``` console.log(Parser(`const a = "Hello World"`)) ```

Output : *const a = \\"Hello World\\"*

Example 2: 

Input :

```
let input = `
const a = 10;
const b = 20;
// check if a is greater than b
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

console.log("Program Ended");
`

let output = Parser(input)
console.log(output)

```

Output : const a = 10;\nconst b = 20;\n// check if a is greater than b\nif (a > b) {\n\tconsole.log(a);\n} else {\n\tconsole.log(b);\n}\n\nconsole.log(\\"Program Ended\\");

Made by Vedik Dev - Himanshu Jangid

For Dev Just for me

See ya