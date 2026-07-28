import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        discography: resolve(__dirname, 'discography/index.html'),
        biography: resolve(__dirname, 'biography/index.html'),
        lyrics: resolve(__dirname, 'lyrics/index.html'),
        lineat: resolve(__dirname, 'lineat/index.html'),
        transmission: resolve(__dirname, 'post/821495624623161344/watch-one-night-read-the-pan-dossier-listen/index.html')
      }
    }
  }
});
