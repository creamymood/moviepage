import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // 또는 '0.0.0.0' 으로 외부 접속 허용
    port: 3000,         // 원하는 포트 번호로 변경 (예: 3000)
  },
})
