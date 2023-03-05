import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
    },

    app: {
        head: {
            charset: 'utf-8',
		        viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
            title: 'Resume',
            htmlAttrs: {
                lang: 'en'
            }
        },
        rootId: "_app",
        buildAssetsDir: "static",
    },

    vite: {
        plugins: [
            ViteImageOptimizer()
        ]
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: [
        '/global.css'
    ],

    typescript: {
        shim: false
    },

    runtimeConfig: {
    }
});
