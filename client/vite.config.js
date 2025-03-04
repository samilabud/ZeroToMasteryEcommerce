import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: process.env.PORT || 3009, // ✅ Use Heroku’s PORT
  },
  build: {
    outDir: "dist", // ✅ Ensure build files are correctly placed
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 550,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["redux", "react-redux", "@reduxjs/toolkit"],
          stripe: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
          lodash: ["lodash", "lodash.memoize"],
          workbox: [
            "workbox-core",
            "workbox-routing",
            "workbox-strategies",
            "workbox-cacheable-response",
            "workbox-expiration",
          ],
          reduxPersist: ["redux-persist"],
          vendor: ["axios"],
        },
      },
    },
  },
});
