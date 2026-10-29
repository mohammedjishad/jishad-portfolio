// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mohammedjishad.github.io',
  base: '/jishad-portfolio',
  build: {
    format: 'directory'
  }
});

