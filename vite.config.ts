import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "./src/route-tree.gen.ts",
      routesDirectory: "./src/routes",
      routeToken: "layout",
    }),
    react(),
    // ...
  ],
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/devices": "http://localhost:3000",
    },
  },
});
