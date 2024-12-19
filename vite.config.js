import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        sourceMap: true,
        additionalData: `
          @import "@/assets/sass/index.scss";
        `,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/index.[hash].js',
        assetFileNames: (info) => {
          if (info.name.endsWith('.woff2')) {
            return `assets/${info.name}`;
          }
          return `assets/index.css`;
        },        
        manualChunks: undefined,
      },
    },
  },
});
