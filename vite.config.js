import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // Все запросы, начинающиеся с /api, будут перенаправляться
  //     '/api': {
  //       target: 'https://app.reqres.in',
  //       changeOrigin: true,
  //       // Убираем префикс /api перед отправкой на целевой сервер
  //       rewrite: (path) => path.replace(/^\/api/, ''), 
  //     },
  //   },
  // },
})
