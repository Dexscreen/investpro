import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // IMPORTANT for Fleek/GitHub Pages, makes asset URLs relative
  plugins: [react()],
});
