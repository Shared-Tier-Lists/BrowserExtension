import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                popup: "index.html",
                content: resolve(__dirname, 'src/content/content.ts')
            },
            output: {
                entryFileNames: '[name].js'
            }
        },
    }
})
