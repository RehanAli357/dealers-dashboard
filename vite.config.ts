import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", viteTsconfigPaths()]],
      },
    }),
  ],
  server: {
    open: true,
    port: 3000,
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
