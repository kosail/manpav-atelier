// @ts-check
import {defineConfig, fontProviders} from "astro/config";

// https://astro.build/config
export default defineConfig({
  // site: "https://kosail.github.io",
  // base: "/manpav-atelier",
  site: "http://localhost:4321",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-playfair-display",
    },
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
    },
  ],
});
