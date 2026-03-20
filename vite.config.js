import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jerrys-electric-services/',
  plugins: [react()]
})