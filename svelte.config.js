/** @type {import('@sveltejs/kit').Config} */
import image from '@rollup/plugin-image';
import path from 'path';
import autoPreprocess from 'svelte-preprocess';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$styles: path.resolve('./src/styles'),
					$components: path.resolve('./src/lib/components')
				}
			}
		}
	},
	plugins: [image()],
	preprocess: autoPreprocess()
};

export default config;
