import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/neshaybahs-chatroom/',   // ⬅ replace with your repo name
})
