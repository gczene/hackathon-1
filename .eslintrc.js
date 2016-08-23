var path = require('path');

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    'node': true,
    'es6': true
  },
  rules: {
    eqeqeq: 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-extra-parens': ['error', 'all'],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'valid-jsdoc': 'error',
    'block-scoped-var': 'error',
    complexity: ['error'],
    'consistent-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'vars-on-top': 'error',
    'no-catch-shadow': 'error',
    'no-use-before-define': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    camelcase: 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    indent: ['error', 2],
    'key-spacing': [
      'error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'keyword-spacing': ['error', {before: true}],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      120,
      {
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    'new-cap': ['error', {newIsCap: true, capIsNew: false}],
    'newline-after-var': ['error', 'always'],
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': 'error',
    'no-plusplus': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': 'error',
    'one-var-declaration-per-line': ['error', 'initializations'],
    'one-var': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'quote-props': ['error', 'as-needed'],
    quotes: [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never'}],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'template-curly-spacing': 'error'
  }
};