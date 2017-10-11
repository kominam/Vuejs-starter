module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'ecmaVersion': 6
  },
  plugins: ['vue'],
  rules: {}
}
