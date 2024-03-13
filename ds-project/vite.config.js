import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/user/signup":'http://localhost:5000',
      "/user/signin":'http://localhost:5000',
      "/user/signout":'http://localhost:5000',

    },
  },
  plugins: [react()],
})
