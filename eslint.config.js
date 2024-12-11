const antfu = require('@antfu/eslint-config').default;

module.exports = antfu(
  {
    rules: {
      'node/prefer-global/process': 'off',
      'style/brace-style': 'off',
      'style/comma-dangle': 'off',
      'style/indent': 'off',
      'style/member-delimiter-style': 'off',
      'style/semi': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-duplicate-enum-values': 'off',
      'ts/prefer-literal-enum-member': 'off',
      'antfu/no-const-enum': 'off',
      'style/arrow-parens': 'off',
      curly: 'off',
      'jsdoc/check-param-names': 'off',
      'n/prefer-global/process': 'off',
      'style/operator-linebreak': 'off',
      'style/quote-props': 'off',
      'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'vue/no-reserved-component-names': 'off',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/v-on-event-hyphenation': 'off',
      'vue/valid-v-slot': ['error', { allowModifiers: true }]
    },
    languageOptions: {
      globals: {
        APP_VERSION: 'readonly',
        APP_ENVIRONMENT: 'readonly'
      }
    }
  },
  {
    files: ['**/*.spec.{ts,tsx,js,jsx}'],
    rules: {
      'ts/explicit-function-return-type': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/no-unsafe-assignment': 'off',
      'style/quotes': 'off',
      'ts/unbound-method': 'off',
      'no-new': 'off',
      'vue/one-component-per-file': 'off',
      'vue/require-default-prop': 'off'
    }
  }
);
