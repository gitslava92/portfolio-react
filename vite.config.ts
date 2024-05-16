/* eslint-disable */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';


const plugins = [
  react(),
  viteTsconfigPaths(),
  svgrPlugin(),
  eslint({
    exclude: ['/virtual:/**', 'node_modules/**'],
  }),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',

    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
});
