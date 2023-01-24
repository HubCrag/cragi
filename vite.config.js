// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';


const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'build')

export default defineConfig({
    root: 'src',
    publicDir: 'dist',
    base: '',
    plugins: [
        handlebars({
            partialDirectory: resolve(root, 'partials'),
        }),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [resolve(process.cwd(), 'src/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',

            /**
             * custom insert position
             * @default: body-last
             */
            //inject: 'body-last' | 'body-first',

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            //customDomId: '__svg__icons__dom__',
        }),
    ],
    build: {
        // output dir for production build
        outDir,
        emptyOutDir: true,

        // emit manifest so PHP can find the hashed files
        manifest: true,

        // esbuild target
        target: 'es6',

        // our entry
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
               // about: resolve(root, 'about', 'index.html'),
            },
          
          
          output: {
                entryFileNames: `main.js`,
                chunkFileNames: `main.js`,
                assetFileNames: `main.css`
            }
        },

        // minifying switch
        minify: true,
        write: true
    },
});