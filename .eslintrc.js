module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['prettier', 'svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  extends: ['prettier', 'google'],
  rules: {

    /**********************/
    /* General Code Rules */
    /**********************/

    // Allow unresolved imports
    'import/no-unresolved': 'off',

    // Allow async-await
    'generator-star-spacing': 'off',

    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Prefer const over let
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],

    // No single if in an 'else' block
    'no-lonely-if': 'error',

    // Force curly braces for control flow,
    // including if blocks with a single statement
    curly: ['error', 'all'],

    // No async function without await
    'require-await': 'error',

    // Force dot notation when possible
    'dot-notation': 'error',

    'no-var': 'error',

    // Force object shorthand where possible
    'object-shorthand': 'error',

    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error',

    'comma-dangle': ['error', {
        'arrays': 'always',
    }],

    'indent': [2, 2, {'SwitchCase': 1}],

    'object-curly-spacing': [2, 'always', {
      'objectsInObjects': false,
      'arraysInObjects': false
    }],

    'no-tabs': 'off'
  }
}
