# eslint-config-hyperupcall

Edwin's [ESLint](https://eslint.org) configuration.

## Install

```sh
pnpm i -D \
	eslint @eslint/markdown @eslint/css @eslint/json eslint-config-prettier @hyperupcall/eslint-config \
	eslint-plugin-import eslint-plugin-promise \
	eslint-plugin-n eslint-plugin-unicorn eslint-plugin-security \
	@eslint-community/eslint-plugin-eslint-comments eslint-plugin-regexp \
	eslint-plugin-perfectionist eslint-plugin-no-unsanitized eslint-plugin-mdx
```

## Usage

In `.eslintrc.json`:

```json
{
	"extends": ["@hyperupcall/eslint-config"]
}
```
