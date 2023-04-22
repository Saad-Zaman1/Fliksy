import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define your environment variable
const apiKey = '83345acb0d2019a7f792e6cd835ba373'; // Replace with your actual API key

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_API_KEY': JSON.stringify(apiKey),
  },
});