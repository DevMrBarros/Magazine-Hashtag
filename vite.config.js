import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // Define a URL base para a aplicação, útil quando ela está hospedada em um subdiretório
  base: "/magazineHashtag/",

  // Lista de plugins a serem usados
  plugins: [],

  // Configurações de resolução de arquivos
  resolve: {
    /* Você pode adicionar configurações específicas de resolução aqui */
  },

  // Configurações para processamento de CSS
  css: {
    postcss: {
      plugins: [tailwindcss], // Usa o plugin Tailwind CSS para processamento de CSS
    },
  },

  // Configurações de construção
  build: {
    rollupOptions: {
      // Configura os arquivos de entrada para a construção
      input: {
        main: resolve(__dirname, "./index.html"), // Arquivo HTML principal
        checkout: resolve(__dirname, "./checkout.html"), // Arquivo HTML para o checkout
        pedidos: resolve(__dirname, "./pedidos.html"), // Arquivo HTML para os pedidos
      },
    },
  },
});
