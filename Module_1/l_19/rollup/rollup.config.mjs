import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
	input: './index.js',
	output: {
		file: './build/bundle.js',
		format: 'cjs',
	},
    plugins: [
        styles(),
        image(),
        babel({ babelHelpers: 'bundled' }),
        serve(),
        livereload()
    ]
};