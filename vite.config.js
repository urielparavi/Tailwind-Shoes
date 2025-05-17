import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSvgr from 'vite-plugin-svgr';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  // We add this manualy to change the default port from 5173 to 3000
  server: {
    port: 3000,
  },
});
