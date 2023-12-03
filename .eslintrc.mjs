/** @type {import('eslint').ESLint.ConfigData} */
export default {
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
