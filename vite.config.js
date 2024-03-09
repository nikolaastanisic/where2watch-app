import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@scss/", replacement: "/src/scss/" },
      { find: "@pages/", replacement: "/src/pages/" },
      { find: "@components/", replacement: "/src/components/" },
      { find: "@helpers/", replacement: "/src/helpers/" },
      { find: "@assets/", replacement: "/src/assets/" },
    ],
  },
});
