// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root: 'src',
    publicDir: 'dist',
    plugins: [
        handlebars({
            partialDirectory: resolve(root, 'partials'),
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