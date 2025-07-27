import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// import packageJson from './package.json';
// const repoName = packageJson.name;

export default defineConfig({
    // For GitHub Pages
    // base: `/${repoName}/`,

    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
    ],
});