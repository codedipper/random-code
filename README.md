# random-code
## About
Generates a random code/id.\
One simple function and zero dependencies.\
Made with love by codedipper.
## Installing
`npm i @codedipper/random-code --save`
## Browser
Simple copy and paste any of the following script tags into your HTML:\
`<script src="https://cdnjs.cloudflare.com/ajax/libs/random-code/2.1.0/browser.min.js"></script>`\
`<script src="https://cdnjs.cloudflare.com/ajax/libs/random-code/2.1.0/browser.js"></script>`\
Then use the `generateCode()` function and use it as normal.
## Usage
```js
const generate = require("@codedipper/random-code");

console.log(generate(10)); // Will generate ten character code.
console.log(generate(4)); // Will generate four character code.
console.log(generate(4, ["a", "b", "c"]));
// ^ Will generate four character code with those characters.
```
