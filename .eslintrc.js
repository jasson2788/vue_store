module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/eslint-recommended",
        '@jasson2788/eslint-config-typescript'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'jsdoc/check-param-names': 0,
        'jsdoc/check-tag-names': 0,
        'jsdoc/check-types': 0,
        'jsdoc/newline-after-description': 0,
        'jsdoc/require-description-complete-sentence': 0,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 0,
        'jsdoc/require-param': 0,
        'jsdoc/require-param-description': 0,
        'jsdoc/require-param-name': 0,
        'jsdoc/require-param-type': 0,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 0,
        'jsdoc/require-jsdoc': 0
    }
};