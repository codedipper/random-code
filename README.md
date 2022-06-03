# random-code
## About
Generates a random code/id.\
One simple function and zero dependencies.\
Made with love by codedipper.
## Installing
`npm i @codedipper/random-code`
## Browser
Simply copy and paste any of the following script tags into your HTML:\
`<script src="https://cdnjs.cloudflare.com/ajax/libs/random-code/2.2.1/browser.min.js"></script>`\
`<script src="https://cdnjs.cloudflare.com/ajax/libs/random-code/2.2.1/browser.js"></script>`\
Then use the `gen()` function as normal.
## Usage
```js
const gen = require("@codedipper/random-code");

console.log(gen(10)); // Will generate ten character code.
console.log(gen(4)); // Will generate four character code.
console.log(gen(4, "0123456789"));
// ^ Will generate four character code with those specfic characters.
```
