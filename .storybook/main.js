module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				// Add the sass loader to process scss files
				'sass-loader',
			],
		});

		return config;
	},
};