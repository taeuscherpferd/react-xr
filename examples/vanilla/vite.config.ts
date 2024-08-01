import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: [{ find: '@pmndrs/xr', replacement: path.resolve(__dirname, '../../packages/xr/src/index.ts') }],
    dedupe: ['three'],
  },
})