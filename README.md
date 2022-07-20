# random-code
## About
Generates a random code/id.\
One simple function and zero dependencies.\
Node.js v6 required for CJS.
## Browser
Simply copy and paste the following tag into your HTML:\
`<script src="https://rc.revvy.de/3.0.0/browser.min.js"></script>`\
Then use the `gen()` function as normal.
## Example
```js
const gen = require("@codedipper/random-code");
// import gen from "@codedipper/random-code";

console.log(gen()); // Will generate ten character code.
console.log(gen(4)); // Will generate four character code.
console.log(gen(4, "0123456789"));
// ^ Will generate four character code with those specific characters.
```
