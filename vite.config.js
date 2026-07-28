import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const pagesBase = isGitHubPages ? '/pampasfields/' : '/';

export default defineConfig({
  appType: 'mpa',
  base: pagesBase,
  plugins: [
    {
      name: 'github-pages-links',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          if (!isGitHubPages) return html;
          return html.replace(/href="\/(?!\/)/g, `href="${pagesBase}`);
        }
      }
    },
    {
      name: 'site-fonts',
      transformIndexHtml: {
        order: 'pre',
        handler() {
          return [
            { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' }, injectTo: 'head-prepend' },
            { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }, injectTo: 'head-prepend' },
            { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap' }, injectTo: 'head-prepend' }
          ];
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        discography: resolve(__dirname, 'discography/index.html'),
        biography: resolve(__dirname, 'biography/index.html'),
        lyrics: resolve(__dirname, 'lyrics/index.html'),
        lineat: resolve(__dirname, 'lineat/index.html'),
        press: resolve(__dirname, 'press/index.html'),
        transmission: resolve(__dirname, 'post/821495624623161344/watch-one-night-read-the-pan-dossier-listen/index.html')
      }
    }
  }
});
