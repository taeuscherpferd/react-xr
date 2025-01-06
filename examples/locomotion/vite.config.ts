import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  base: '/xr/examples/locomotion/',
  resolve: {
    alias: [{ find: '@react-three/xr', replacement: path.resolve(__dirname, '../../packages/react/xr/src/index.ts') }],
    dedupe: ['@react-three/fiber', 'three'],
  },
})
