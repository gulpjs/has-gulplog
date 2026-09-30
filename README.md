<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# has-gulplog

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Check if gulplog is available before attempting to use it.

## Usage

```js
const hasGulplog = require("has-gulplog");

hasGulplog(); // true if gulplog is available
```

## API

### `hasGulplog()`

Checks if gulplog is available.

Returns `true` if gulplog is installed and available or `false` if it is not available.

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/has-gulplog.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/has-gulplog
[npm-image]: https://img.shields.io/npm/v/has-gulplog.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/has-gulplog/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/has-gulplog/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/has-gulplog
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/has-gulplog/main.svg?style=flat-square
<!-- prettier-ignore-end -->
