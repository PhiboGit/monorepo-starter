import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests to backend
    },
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src'),
    },
  },
});
