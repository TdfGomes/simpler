module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['react', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/no-unused-prop-types': 'warn',
    'react/no-multi-comp': ['warn', { ignoreStateless: true }],
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  },
};
