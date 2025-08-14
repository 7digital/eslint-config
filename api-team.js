import globals from 'globals';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.commonjs,
                ...globals.mocha
            },

            ecmaVersion: 2023,
            sourceType: 'module'
        },

        rules: {
            indent: ['error', 2, {
                MemberExpression: 'off',
                SwitchCase: 1
            }],

            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-var': ['error'],
            'prefer-const': ['error'],
            yoda: ['error', 'never'],
            'array-bracket-spacing': ['error', 'never'],
            'arrow-parens': ['error', 'as-needed'],
            'arrow-spacing': ['error'],
            'comma-dangle': ['error', 'never'],
            'func-call-spacing': ['error', 'never'],
            'keyword-spacing': ['error'],

            'space-before-function-paren': ['error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }],

            'no-multiple-empty-lines': ['error', {
                max: 1
            }],

            'no-trailing-spaces': ['error'],
            'no-whitespace-before-property': ['error'],
            'object-curly-spacing': ['error', 'always'],
            eqeqeq: ['error', 'always'],
            'no-extra-semi': ['error'],
            curly: ['error', 'all'],
            'no-duplicate-imports': ['error'],
            'space-before-blocks': ['error'],
            'space-in-parens': ['error', 'never'],

            'brace-style': ['error', '1tbs', {
                allowSingleLine: true
            }]
        }
    },
    {
        files: ['**/test.js', '**/test-*.js', '**/*.test.js'],

        rules: {
            'no-unused-vars': ['error', {
                ignoreRestSiblings: true
            }]
        }
    }
];
