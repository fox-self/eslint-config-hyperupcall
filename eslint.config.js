import globals from 'globals'
import langJs from "@eslint/js";
import langMarkdown from "@eslint/markdown";
import langMdx from 'eslint-plugin-mdx'
import pluginPromise from 'eslint-plugin-promise'
import pluginNode from "eslint-plugin-n"
import pluginSecurity from 'eslint-plugin-security'
import pluginComments from "@eslint-community/eslint-plugin-eslint-comments/configs"
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginRegexp from "eslint-plugin-regexp"
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";
import pluginPerfectionist from 'eslint-plugin-perfectionist'
import configPrettier from "eslint-config-prettier";

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

const config = [
	langJs.configs.recommended,
	...langMarkdown.configs.recommended,
	{
	...langMdx.flat,
		processor: mdx.createRemarkProcessor({
			lintCodeBlocks: true,
		}),
	},
	pluginPromise.configs['flat/recommended'],
	pluginNode.configs["flat/recommended-script"],
	pluginSecurity.configs.recommended,
	pluginComments.recomended,
	pluginUnicorn.configs['flat/recommended'],
	pluginRegexp.configs["flat/recommended"],
	pluginNoUnsanitized.configs.recommended,
	pluginPerfectionist.configs['recommended-natural'],
	configPrettier
]

export default config
