# sheetify-variables
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

A [sheetify][sheetify-url] transform to add support for
[W3C-style CSS variables](http://www.w3.org/TR/css-variables/) syntax.
Uses [`rework-vars`][rework-vars-url] to perform the transformation.

__N.B.__ This is not a polyfill. This transform aims to provide a future-proof way
of using a limited subset of the features provided by native CSS variables.

## Installation
```bash
npm install sheetify-variables
```

## Usage
As a sheetify transform:
```js
sheetify('path/to/my/index.css')
  .transform(variables({preserve: true}))
  .bundle();
```

## Options
#### map
Optionally, you may pass an object of variables to the JavaScript function.
```js
var myVars = {
  'app-bg-color': 'white'
};

variables({map: myVars});
```
#### preserve
Setting preserve to true will preserve the variable definitions and references
in the output, so that they can be used by supporting browsers.
```js
variables({preserve: true});
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/sheetify-variables.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sheetify-variables
[travis-image]: https://img.shields.io/travis/yoshuawuyts/sheetify-variables.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/sheetify-variables
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/sheetify-variables.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/sheetify-variables?branch=master
[downloads-image]: http://img.shields.io/npm/dm/sheetify-variables.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/sheetify-variables

[sheetify-url]: https://github.com/requireio/sheetify
[rework-vars-url]: https://github.com/reworkcss/rework-vars
