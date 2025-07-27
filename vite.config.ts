import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import {APP_PATH} from "./src/config/constants";

export default defineConfig({
    base: APP_PATH,

    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
    ],
});