import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/pik-com',
  build: {
    outDir: 'docs',
  },
});
