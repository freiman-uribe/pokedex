import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://freiman-uribe.github.io/pokedex", // Cambia esto por la URL de tu repositorio en GitHub Pages
});
