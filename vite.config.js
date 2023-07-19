import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  setupBuild() {
    return {
      rollupOptions: {
        external: ['graphql'],
        output: {
          globals: {
            graphql: 'window.graphql',
          },
        },
      },
    };
  },
  optimizeDeps: {
    include: ['@apollo/client'],
  },
  // Add a server proxy if needed
  server: {
    proxy: {
      '/api': {
        target: 'https://graphqlzero.almansi.me',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
