module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  parserOptions: {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'ecmaVersion': 6
  },
  plugins: ['vue'],
  rules: {}
}
