import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:list"; @import "/src/styles/global.scss";`,
      },
    },
  },
});