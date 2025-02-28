import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000,

    // proxy API requests to the backend (used outside of VSCODE)
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        //take the /api and replace it with an empty string in link
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
});
