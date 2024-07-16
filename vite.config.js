import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // or '/subdirectory/' if your app is deployed in a subdirectory
  plugins: [react()],
})
