import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'build',
  manifest: {
    name: 'Rick&Morty',
    short_name: 'R&M',
    theme_color: '#2196f3',
    background_color: '#2196f3',
    display: 'standalone',
    orientation: 'portrait',
    start_url: '/index.html',
    icons: [
      {
        src: 'assets/android-chrome-192x192.png',
        size: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/android-chrome-512x512.png',
        size: '512x512',
        type: 'image/png',
      },
    ],
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2020',
    outDir: 'build',
    rollupOptions: {
      // input: {
      //   ...pagesInput,
      // },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }

          if (/\.(ttf|otf|fnt|woff)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  server: {
    port: 3030,
    host: '0.0.0.0',
    hmr: true,
  },
  plugins: [react(), vitePWA],
})
