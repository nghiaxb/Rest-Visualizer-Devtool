import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.config'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        crx({ manifest }),
        viteStaticCopy({
            targets: [
                { src: 'src/manifest.json', dest: '.' },
                { src: 'icons', dest: '.' },
            ],
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                // UI entries
                devtools: resolve(__dirname, 'src/devtools/panel.html'),
                popup: resolve(__dirname, 'src/popup/index.html'),
                options: resolve(__dirname, 'src/options/index.html'),
                // Script entries
                background: resolve(__dirname, 'src/background/background.ts'),
                content: resolve(__dirname, 'src/content/content.ts'),
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
    },
})
