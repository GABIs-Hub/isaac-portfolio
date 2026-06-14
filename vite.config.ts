import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Auto-copy the user's photo if it exists in the conversation directory
const srcPhoto = "C:\\Users\\GABI's WORKSPACE\\.gemini\\antigravity-ide\\brain\\6208ef10-83f8-4af9-b8c3-0b129478ec36\\media__1780011470936.jpg";
const destPhoto = path.resolve(__dirname, 'public/images/isaac.jpg');

try {
  if (fs.existsSync(srcPhoto)) {
    const destDir = path.dirname(destPhoto);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(srcPhoto, destPhoto);
    console.log('Successfully copied Isaac Ogabi\'s photo to public/images/isaac.jpg');
  } else {
    console.log('Source photo not found at path:', srcPhoto);
  }
} catch (err) {
  console.error('Error copying photo:', err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
