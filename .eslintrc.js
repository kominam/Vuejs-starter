module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  plugins: ['vue'],
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  rules: {
    'vue/jsx-uses-vars': 2,
    "no-console": 0,
    'import/no-extraneous-dependencies': 0,
    "import/extensions": ["error", "always", {
      "js": "never",
      "vue": "never"
    }],
    "no-param-reassign": [2, { "props": false }],
    "no-shadow": 0,
  },
}
