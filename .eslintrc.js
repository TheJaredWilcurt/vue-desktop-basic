module.exports = {
    'root': true,
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
          'experimentalObjectRestSpread': true
        }
    },
    'env': {
        'browser': true,
        'node': true
    },
    'globals': {
        'jsdom': true,
        'Promise': true
    },
    'plugins': [
        'vue'
    ],
    'extends': 'plugin:vue/recommended',
    'rules': {
        'arrow-parens':                ['off'],
        'brace-style':                 ['error', '1tbs', { 'allowSingleLine': true }],
        'comma-dangle':                ['error', 'never'],
        'comma-spacing':               ['error', { 'before': false, 'after': true }],
        'comma-style':                 ['error', 'last'],
        'curly':                       ['error'],
        // allow async-await
        'generator-star-spacing':      ['off'],
        // 2 space indentation to match .editorconfig
        'indent':                      ['error', 2, { 'SwitchCase': 1 }],
        'keyword-spacing':             ['error', { 'before': true, 'after': true }],
        // allow debugger during development
        'no-console':                  process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger':                 process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-multi-spaces':             ['error'],
        'no-unused-vars':              ['error'],
        // Only allow let and const, no var
        'no-var':                      ['error'],
        'object-curly-spacing':        ['error', 'always'],
        'one-var':                     ['error', 'never'],
        'quotes':                      ['error', 'single'],
        'semi':                        ['error', 'always'],
        'space-before-blocks':         ['error', 'always'],
        'space-before-function-paren': ['error', 'always'],
        'space-in-parens':             ['error', 'never'],
        'space-infix-ops':             ['error'],
        'spaced-comment':              ['error', 'always'],
        // Vue Linter Options
        'vue/attribute-hyphenation':    ['error', 'never'],
        'vue/html-closing-bracket-newline':
                                        ['error', {
                                            'singleline': 'never',
                                            'multiline': 'always'
                                        }],
        'vue/html-closing-bracket-spacing':
                                        ['error', {
                                            'startTag': 'never',
                                            'endTag': 'never',
                                            'selfClosingTag': 'always'
                                        }],
        'vue/html-indent':              ['error', 2, {
                                            'attribute': 1,
                                            'closeBracket': 0
                                        }],
        'vue/html-self-closing':        ['error', {
                                            'html': {
                                                'void': 'always',
                                                'normal': 'never',
                                                'component': 'always'
                                            }
                                        }],
        'vue/max-attributes-per-line':  ['error', {
                                            'singleline': 3,
                                            'multiline': {
                                                'max': 1,
                                                'allowFirstLine': false
                                            }
                                        }],
        'vue/name-property-casing':     ['error', 'PascalCase'],
        'vue/order-in-components':      ['error', { 'order': [
                                            'el',
                                            'name',
                                            ['template', 'render'],
                                            'parent',
                                            'functional',
                                            ['delimiters', 'comments'],
                                            ['components', 'directives'],
                                            'extends',
                                            'mixins',
                                            'inheritAttrs',
                                            'model',
                                            ['props', 'propsData'],
                                            'data',
                                            'methods',
                                            'computed',
                                            'filters',
                                            'watch',
                                            'LIFECYCLE_HOOKS',
                                            'renderError'
                                        ]}],
        'vue/prop-name-casing':         ['error', 'camelCase']
    }
};
