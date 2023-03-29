import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/* global process */
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? "/headphone/" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
