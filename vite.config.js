import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Testpage_Sri_murugan/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}); 