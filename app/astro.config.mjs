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
import mdx from "@astrojs/mdx";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import webmanifest from "astro-webmanifest";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://naturessecret.co",
  output: "server",
  integrations: [tailwind(), react(), preact(), svelte(), astroI18next(), mdx(), robotsTxt(), sitemap(), solidJs(), prefetch(), webmanifest({
    name: 'Natures Secret',
    icon: 'src/images/your-icon.svg',
    short_name: 'App',
    description: 'Here is your app description',
    start_url: '/',
    theme_color: '#3367D6',
    background_color: '#3367D6',
    display: 'standalone'
  }), purgecss(), compress(), partytown()],
  adapter: vercel()
});