import type {Config} from 'tailwindcss';

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        extend: {
          colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
          }
        },
    },
    plugins: [],
} satisfies Config;