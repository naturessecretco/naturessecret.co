import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react(), preact(), svelte(), astroI18next()],
  adapter: vercel()
});