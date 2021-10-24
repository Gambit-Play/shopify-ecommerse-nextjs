const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
	reactStrictMode: true,
	framework: {
		name: 'shopify_local',
	},
});

console.log('next.config.js', JSON.stringify(module.exports, null, 4));
