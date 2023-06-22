module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'google',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'react',
    ],
    // Please list in alphabetical order
    // Please comment the rule you wish to disable, do not delete the configs set in the rules
    'rules': {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', {
            'ts-ignore': 'allow-with-description',
            'ts-expect-error': 'allow-with-description',
        }],
        'camelcase': 'off',
        'eqeqeq': ['error', 'always'],
        'indent': ['error', 4],
        'max-len': ['error', { 'code': 120 }],
        'max-len': 'off',
        'no-console': ['error', { 'allow': ['warn', 'error', 'debug'] }],
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': 0,
        'require-jsdoc': 'off',
        'quotes': 'off',
        'valid-jsdoc': ['error', { 'requireParamType': false, 'requireReturn': false }],
    },
};
