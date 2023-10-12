import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      // Define tus variables de entorno y sus valores aquí
      'process.env.REACT_APP_URL': JSON.stringify('http://api.weatherapi.com/v1/current.json?aqi=no'),
      'process.env.REACT_APP_KEY': JSON.stringify('7fb895cb9a8f4e0d8d6184704231509'),
    })
  
  
  ],
  
})
