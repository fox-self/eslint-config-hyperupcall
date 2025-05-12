import globals from 'globals'
import { defineConfig } from 'eslint/config'
import langJs from '@eslint/js'
// @ts-expect-error
import langMarkdown from '@eslint/markdown'
import langCss from '@eslint/css'
import langJson from '@eslint/json'
// import langMdx from 'eslint-plugin-mdx' // TODO
import pluginPromise from 'eslint-plugin-promise'
import pluginNode from 'eslint-plugin-n'
import pluginSecurity from 'eslint-plugin-security'
import pluginComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginRegexp from 'eslint-plugin-regexp'
import pluginNoUnsanitized from 'eslint-plugin-no-unsanitized'
import pluginPerfectionist from 'eslint-plugin-perfectionist'
import configPrettier from 'eslint-config-prettier'

/**
 * @import { RuleEntry } from '@eslint/config-helpers'
 */
// TODO: import-x

const CurrentMode = process.env.HYPERUPCALL_LINT_MODE || 'release'

export default defineConfig([
	// https://github.com/eslint/eslint/tree/main/packages/js
	langJs.configs.recommended,
	{
		rules: {
			'array-callback-return': modeSwitch({
				edit: ['off'],
				commit: ['error'],
				release: ['error'],
			}),
			'constructor-super': modeSwitch({
				edit: ['warn'],
				commit: ['error'],
				release: ['error'],
			}),
			'for-direction': ['error'],
			'getter-return': modeSwitch({
				edit: ['off'],
				commit: ['error'],
				release: ['error'],
			}),
		},
	},

	// https://github.com/eslint-community/eslint-plugin-promise
	pluginPromise.configs['flat/recommended'],

	// https://github.com/eslint-community/eslint-plugin-n
	pluginNode.configs['flat/recommended-script'],

	// https://github.com/eslint-community/eslint-plugin-security
	pluginSecurity.configs.recommended,

	// https://github.com/eslint-community/eslint-plugin-eslint-comments
	pluginComments.recomended,

	// https://github.com/sindresorhus/eslint-plugin-unicorn
	pluginUnicorn.configs['flat/recommended'],

	// https://www.npmjs.com/package/eslint-plugin-regexp
	pluginRegexp.configs['flat/recommended'],

	// https://github.com/mozilla/eslint-plugin-no-unsanitized
	pluginNoUnsanitized.configs.recommended,

	// https://github.com/azat-io/eslint-plugin-perfectionist
	pluginPerfectionist.configs['recommended-natural'],

	// https://github.com/prettier/eslint-config-prettier
	configPrettier,

	// https://github.com/eslint/markdown
	...langMarkdown.configs.recommended,
	{
		files: ['**/*.md'],
		plugins: {
			langMarkdown,
		},
		language: 'markdown/commonmark',
		rules: {},
	},

	// https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx
	// ...langMdx.flat,
	// 	processor: langMdx.createRemarkProcessor({
	// 		lintCodeBlocks: true,
	// 	}),
	// },

	// https://github.com/eslint/css
	{
		files: ['**/*.css'],
		language: 'css/css',
		...langCss.configs.recommended,
	},

	// https://github.com/eslint/json
	{
		plugins: {
			langJson,
		},
	},
	{
		files: ['**/*.json'],
		ignores: ['package-lock.json'],
		language: 'json/json',
		...langJson.configs.recommended,
	},

	{
		files: ['**/*.jsonc'],
		language: 'json/jsonc',
		...langJson.configs.recommended,
	},

	{
		files: ['**/*.json5'],
		language: 'json/json5',
		...langJson.configs.recommended,
	},
])

/**
 * @param {Record<'edit' | 'commit' | 'release', unknown | undefined>} toggles
 * @returns {RuleEntry}
 */
function modeSwitch(toggles) {
	const possibleModes = ['edit', 'commit', 'release']
	const currentMode = 'edit'
	if (!possibleModes.includes(CurrentMode)) {
		throw new Error(
			`Expected the current mode to be ${new Intl.ListFormat().format(possibleModes).map((/** @type {string} */ item) => `"${item}"`)}. Found "${CurrentMode}"`,
		)
	}

	// if (currentMode === 'edit' && toggles.edit)

	return /** @type RuleEntry */ (toggles[currentMode])
}
