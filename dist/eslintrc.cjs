Object.defineProperty(exports, '__esModule', { value: true });

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:markdown/recommended',
        'plugin:promise/recommended',
        'plugin:n/recommended',
        'plugin:unicorn/recommended',
        // 'plugin:security/recommended-legacy',
        "plugin:@eslint-community/eslint-comments/recommended",
        'eslint-config-prettier'
    ],
    env: {
        'shared-node-browser': true,
        es2022: true
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    overrides: [
        {
            files: [
                '*.cjs'
            ],
            env: {
                commonjs: true
            },
            parserOptions: {
                sourceType: 'script'
            }
        }
    ]
};
var index = /*@__PURE__*/ getDefaultExportFromCjs(src);

exports.default = index;
