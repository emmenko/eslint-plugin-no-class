eslint-plugin-no-class
===================

Linting rule for ESLint:
- [no-class](docs/rules/no-class.md)

# When do I need this?
Normally you don't need this rule if you disable `classes` in your `ecmaFeatures` configuration.
If you are using `babel-eslint` as a parser though, it won't work since `Acorn` doesn't support `ecmaFeatures`
specific flags and simply ignores it (see [discussion](https://github.com/babel/babel-eslint/issues/53)).

So if you want to forbid the use of `class`, and you are using `babel-eslint` you should install this rule.


# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```bash
$ npm i eslint
$ npm i eslint-plugin-no-class
```

# Configuration

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
    "no-class": 2
  }
}
```
