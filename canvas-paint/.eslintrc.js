module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-plusplus": 0,
    "no-mixed-operators": 0,
    "no-use-before-define": 0,
    "max-len": 0,
    "linebreak-style": 0
  },
};
