import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import {BASE_PATH} from "./src/config/constants";

export default defineConfig({
    base: BASE_PATH,

    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
    ],
});