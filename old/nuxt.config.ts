import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'vercel',
        routeRules: {
            '/': { static: true },
            'static': {
                headers: {
                    'Cache-Control': 'public, s-maxage=0'
                }
            }
        }
    },

    app: {
        head: {
            charset: 'utf-8',
            title: 'Get Rezume',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" },
                { name: "description", content: "Get Your Resume" }
            ],
            link: [],
            script: []
        },
        rootId: "_app",
        buildAssetsDir: "static"
    },

    vite: {
        plugins: [
            ViteImageOptimizer()
        ]
    },

    experimental: {
        componentIslands: true
    },

    components: {
        global: true
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

    plugins: [
        { src:'~/plugins/vercel.ts', mode: 'client' }
    ],

    runtimeConfig: {
        devApiKey: process.env.DEV_API_KEY,
        DATABASE: process.env.DATABASE || 'resumedb-dev'
    },

    appConfig: {
    },

    modules: [
        ['@nuxtjs/robots', {}]
    ],
});
