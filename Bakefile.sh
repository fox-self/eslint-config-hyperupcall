# shellcheck shell=bash

task.version() {
	local version="$1"
	bake.assert_not_empty 'version'

	pnpm version "$version"
}

task.publish() {
	pnpm publish
}
