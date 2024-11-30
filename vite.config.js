import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export configuration for Vite server

export default defineConfig({
  plugins: [react()], // Adding React plugin to support JSX and React features
  server: {
    port: 3001, 
    open: true, // Automatically open app
  },
  build: {
    outDir: 'dist', // Output directory for the build files
    emptyOutDir: true, // Empty output directory first
  },
  resolve: {
    alias: {
      '@': '/src', // '@' to refer to 'src'
    },
  },
});
