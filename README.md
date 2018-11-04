# 🍉 Eat Fruit

Package to print some random fruit I eat.

This repository contains the source code for my tutorial: [Bundling Your JavaScript Library with Rollup](https://bagja.net/blog/bundling-your-javascript-library-with-rollup).

In that tutorial, you'll learn how to bundle your JavaScript library using [Rollup](https://rollupjs.org/):

* Learn various output formats
* Rollup configuration file
* Three-shaking feature
* Working with a third-party library from NPM
* Integrating Babel with Rollup
* Minifying bundle file
* Publishing bundles to NPM

## Installation

Run the following command to install this package through NPM:

```bash
$ npm i eat-fruit

# Or if you use Yarn
$ yarn add eat-fruit
```

You can also use this library on the browser directly:

```html
<!-- For development -->
<script src="https://unpkg.com/eat-fruit@latest/dist/eat-fruit.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/eat-fruit@latest/dist/eat-fruit.umd.min.js"></script>
```

## Quick Start

On Node.js:

```js
const eatFruit = require('eat-fruit');

eatFruit(); // "I eat 🍉."
```

If you load the `umd` bundle on the browser, you can access the `eatFruit` function globally:

```js
window.eatFruit(); // "I eat 🍉."

// Or simply
eatFruit();
```

## License

MIT © [Risan Bagja Pradana](https://bagja.net)
