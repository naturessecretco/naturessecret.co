import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), react(), sitemap(), mdx(), image(), prefetch()],
  output: "server",
  adapter: vercel()
});