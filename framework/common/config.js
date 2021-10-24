const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

const ALLOWED_FR = ['shopify', 'bigcommerce', 'shopify_local'];

exports.withFrameworkConfig = function (defaultConfig = {}) {
	let framework = defaultConfig?.framework?.name;
	const tsPath = path.join(process.cwd(), 'tsconfig.json');

	if (framework === ALLOWED_FR[2]) framework = ALLOWED_FR[0];

	const frameworkNextConfig = require(path.join(
		`${process.cwd()}/framework/`,
		framework,
		'next.config'
	));
	const tsConfig = require(tsPath);

	tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
	tsConfig.compilerOptions.paths['@framework/*'] = [
		`framework/${framework}/*`,
	];

	fs.writeFileSync(
		tsPath,
		prettier.format(JSON.stringify(tsConfig), {
			parser: 'json',
			tabWidth: 4,
		})
	);

	const config = merge(defaultConfig, frameworkNextConfig);

	return config;
};
