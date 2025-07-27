import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
// import {PROJECT_NAME} from "./src/config/constants";

export default defineConfig({
    // For GitHub Pages
    // base: `/${PROJECT_NAME}/`,

    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
    ],
});