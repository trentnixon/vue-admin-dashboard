module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        vueIndentScriptAndStyle: true
      }
    ]
  }
};
