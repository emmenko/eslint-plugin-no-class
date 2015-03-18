/**
 * @fileoverview Avoid using class inheritance, instead favor prototypes or object composition.
 * @author Nicola Molinari
 * @copyright 2015 Nicola Molinari. All rights reserved.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require('eslint').linter,
  ESLintTester = require('eslint-tester');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslint.defineRule('no-class', require('../../../lib/rules/no-class'));
eslintTester.addRuleTest('lib/rules/no-class', {

  valid: [
    {
      code: 'function foo() {}',
      ecmaFeatures: { classes: true }
    }
  ],

  invalid: [
    {
      code: 'class Foo { constructor() { this.foo = \'bar\'; } }',
      ecmaFeatures: { classes: true },
      errors: [{
        message: 'Unexpected class declaration',
        type: 'ClassDeclaration'
      }]
    }
  ]
});
