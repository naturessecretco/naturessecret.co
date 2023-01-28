import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(),  prefetch(), react()],
  adapter: vercel(),
  output: "server"
});