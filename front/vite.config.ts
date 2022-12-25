import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/feather-icons/dist/icons',
					dest: 'icons'
				}
			]
		})
	]
};

export default config;
