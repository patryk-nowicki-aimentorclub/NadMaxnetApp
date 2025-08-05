import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NadMaxnetApp/', // <--- ZMIENIONO NA NOWĄ NAZWĘ REPOZYTORIUM
  // Add the React plugin to support JSX and TSX files.
  plugins: [react()],

  // Configure path aliases for easier imports.
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    }
  }
});