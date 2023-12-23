# eslint-config-hyperupcall

Edwin's [ESLint](https://eslint.org) configuration.

## Install

```sh
pnpm i -D eslint \
	eslint-config-prettier \
	eslint-plugin-import eslint-plugin-markdown eslint-plugin-promise eslint-plugin-n eslint-plugin-unicorn eslint-plugin-security @eslint-community/eslint-plugin-eslint-comments \
	@hyperupcall/eslint-config
```

## Usage

In `.eslintrc.json`:

```json
{
	"extends": ["@hyperupcall/eslint-config"]
}
```
