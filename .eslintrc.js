module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: [
    require.resolve('dev-hook-utils/dist/hooks/eslintrc.js')
  ],
  globals: {
    APP_VERSION: true,
    $: true,
    Cropper: true,
    angular: true,
    process: true,
    my: true,
    RongIMLib: true,
    RongIMClient: true,
  },
  rules: {
    // allows unary operators ++ and -- in the afterthought (final expression) of a for loop
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 5, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 5, multiline: true, consistent: true }
    }],
    /**
     * 允许warn和error级别的抛错
     * https://eslint.org/docs/rules/no-console#disallow-the-use-of-console-no-console
     */
    'no-console': ["error", {
      allow: ["warn", "error"]
    }],
    /**
     * specify the maximum length of a line in your program
     * http://eslint.org/docs/rules/max-len
     */
    'max-len': ['error', 300, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'import/no-unresolved': [
      'off'
    ],
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/extensions': ['off', 'never'],
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'class-methods-use-this': 0,
    // http://eslint.org/docs/rules/no-mixed-operators 同优先级允许混合
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],
    'no-warning-comments': ['error', {
      'terms': ['todo', 'fixme'],
      'location': 'anywhere'
    }]
  },
  "plugins": [
    "react",
    "babel"
  ],
};
