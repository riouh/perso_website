import preprocess from 'svelte-preprocess';
import adapter_static from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';

const adapter = adapter_static({
	pages: 'build',
	assets: 'build',
	fallback: 'index.html',
	precompress: false,
	strict: true
});

const prep = preprocess({
	postcss: {
		plugins: [autoprefixer()]
	}
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: prep,
	kit: { adapter, prerender: { entries: ['/'] } }
};

export default config;
