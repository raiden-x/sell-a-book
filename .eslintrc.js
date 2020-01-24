module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'jsx-a11y',
        'import',
    ],
    rules: {
        'max-len': ['error', 100],
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
        'no-mixed-operators': 'off',
        "object-curly-newline": [0, {
          "ObjectExpression": "never",
          "ObjectPattern": { "multiline": true },
          "ImportDeclaration": "never",
          "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }],
        "react/jsx-props-no-spreading": [0, {}],
        "react/prop-types": [0, {}],
        'prefer-destructuring': [
          'error',
          {
            VariableDeclarator: {
              array: false,
              object: true,
            },
            AssignmentExpression: {
              array: true,
              object: false,
            },
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/react-in-jsx-scope': 'off',
        'prefer-arrow-callback': 'error',
      },
};