const js = require('@eslint/js');
const globals = require('globals');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['build/**', 'node_modules/**', 'src/**', 'public/**'],
  },
  js.configs.recommended,
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: globals.browser,
    },
    rules: {
      'no-console': 'off',
    },
  },
  eslintConfigPrettier,
];
