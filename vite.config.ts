import path from 'path';
import { fileURLToPath } from 'url'; // Necessário para usar path com import
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Recriando __dirname pois ele não existe nativamente em módulos ES (import)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    return {
      // Adicionado: Define a base URL para o nome do seu repositório
      base: '/portfolio-web/', 

      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        },
        build: {
          outDir: 'dist',
          emptyOutDir: true,
        }
      }
    };
});