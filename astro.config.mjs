import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 4321
    },
    output: 'server',
    adapter: deno()
});