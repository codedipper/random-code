# random-code
## About
Generates a random code/id.\
One simple function and zero dependencies.\
Made with love by codedipper.
## Installing
`npm i @codedipper/random-code --save`
## Usage
```js
const generate = require("@codedipper/random-code");

console.log(generate(10)); // Will generate ten character code.
console.log(generate(4)); // Will generate four character code.
console.log(generate(4, ["a", "b", "c"]));
// ^ Will generate four character code with those characters.
```
