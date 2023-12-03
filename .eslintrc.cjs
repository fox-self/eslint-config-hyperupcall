/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:markdown/recommended',
		'eslint-config-prettier',
	],
	env: {
		'shared-node-browser': true,
		es2022: true, // Supported by Node.js v18
	},
	parserOptions: {
		ecmaVersion: 2022, // TODO: Should not need this
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.cjs'],
			env: {
				commonjs: true,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
}
