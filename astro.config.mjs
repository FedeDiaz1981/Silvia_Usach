import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  output: 'server', // Cambiar de 'static' a 'server'
  integrations: [preact()],
});
