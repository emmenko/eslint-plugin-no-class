<h1 align="center">This repository is deprecated and not maintained anymore</h1>

# eslint-plugin-no-class

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Linting rule for ESLint:
- [no-class](docs/rules/no-class.md)

## When do I need this?
Normally you don't need this rule if you disable `classes` in your `ecmaFeatures` configuration.
If you are using `babel-eslint` as a parser though, it won't work since `Acorn` doesn't support `ecmaFeatures`
specific flags and simply ignores it (see [discussion](https://github.com/babel/babel-eslint/issues/53)).

So if you want to forbid the use of `class`, and you are using `babel-eslint` you should install this rule.


## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```bash
$ npm i eslint
$ npm i eslint-plugin-no-class
```

## Configuration

Add `plugins` section and specify `eslint-plugin-no-class` as a plugin.

```json
{
  "plugins": [
    "no-class"
  ]
}
```

Finally, enable the rule.

```json
{
  "rules": {
    "no-class/no-class": 2
  }
}
```

[npm-url]: https://npmjs.org/package/eslint-plugin-no-class
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-no-class.svg?style=flat-square

[travis-url]: https://travis-ci.org/emmenko/eslint-plugin-no-class
[travis-image]: http://img.shields.io/travis/emmenko/eslint-plugin-no-class/master.svg?style=flat-square
