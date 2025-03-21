import 'globals';
import { defineConfig } from 'eslint/config';
import langJs from '@eslint/js';
import '@eslint/markdown';
import 'eslint-plugin-mdx';
import 'eslint-plugin-promise';
import 'eslint-plugin-n';
import 'eslint-plugin-security';
import '@eslint-community/eslint-plugin-eslint-comments/configs';
import 'eslint-plugin-unicorn';
import 'eslint-plugin-regexp';
import 'eslint-plugin-no-unsanitized';
import 'eslint-plugin-perfectionist';
import 'eslint-config-prettier';

/**
 * @import { RuleEntry } from '@eslint/config-helpers'
 */
// TODO: import-x

// const config = {
// 	"extends": [
// 		"plugin:import/recommended",
// 		"plugin:mdx/recommended",
// 	],
// 	"env": {
// 		"shared-node-browser": true,
// 		"es2022": true
// 	},
// 	"parserOptions": {
// 		"ecmaVersion": 2022,
// 		"sourceType": "module"
// 	},
// 	"overrides": [
// 		{
// 			"files": ["*.cjs"],
// 			"env": {
// 				"commonjs": true
// 			},
// 			"parserOptions": {
// 				"sourceType": "script"
// 			}
// 		}
// 	]
// }

// editing
// commit
// release
/** @returns {RuleEntry} */
function modeSwitch(/** @type {Record<'edit' | 'commit' | 'release', unknown | undefined>} */ toggles) {
	const possibleModes = ['edit', 'commit', 'release'];
	const currentMode = 'edit';
	if (!possibleModes.includes(currentMode)) {
		throw new Error(`Expected the current mode to be ${new Intl.ListFormat().format(possibleModes).map((/** @type {string} */ item) => `"${item}"`)}. Found "${currentMode}"`)
	}


	// if (currentMode === 'edit' && toggles.edit)

	return toggles[currentMode]
}


var index = defineConfig([
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
				release: ['error']
			}),
			'for-direction': ['error'],
		}
	},
	// langJs.meta.name.
	// ...langMarkdown.configs.recommended,
	// {
	// ...langMdx.flat,
	// 	processor: langMdx.createRemarkProcessor({
	// 		lintCodeBlocks: true,
	// 	}),
	// },
	// pluginPromise.configs['flat/recommended'],
	// pluginNode.configs["flat/recommended-script"],
	// pluginSecurity.configs.recommended,
	// pluginComments.recomended,
	// pluginUnicorn.configs['flat/recommended'],
	// pluginRegexp.configs["flat/recommended"],
	// pluginNoUnsanitized.configs.recommended,
	// pluginPerfectionist.configs['recommended-natural'],
	// configPrettier
]);

export { index as default };
