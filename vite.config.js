import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  customBlue:"#4b6897",
  plugins: [react(),
    tailwindcss(),
  ],
 
}) ;
 
 