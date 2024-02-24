// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel'
// import adapter from '@sveltejs/adapter-netlify';
import { resolve } from 'path';
import {
	vitePreprocess
} from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
		vitePreprocess()
	]
};

export default config;