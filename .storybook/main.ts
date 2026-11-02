import type { StorybookConfig } from '@storybook/sveltekit';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-docs',
			// Tableaux, cases à cocher et barrés GitHub dans les pages MDX.
			options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } }
		}
	],
	framework: '@storybook/sveltekit',
	viteFinal: async (config) => {
		config.plugins = config.plugins ?? [];
		config.plugins.push(tailwindcss());
		return config;
	}
};
export default config;
