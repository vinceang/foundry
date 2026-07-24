// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // keep dev captures identical to production frames
  devToolbar: { enabled: false },
});
