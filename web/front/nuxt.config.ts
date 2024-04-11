// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    alias: {
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css', '~/assets/css/normalize.css'],
    
  

    routeRules: {
        // Homepage pre-rendered at build time
        '/': { ssr: false },
        '/**':{ssr:false}
        /*
        // Products page generated on demand, revalidates in background, cached until API response changes
        'products': { swr: true },
        // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
        '/products/**': { swr: 3600 },
        // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
        '/blog': { isr: 3600 },
        // Blog post page generated on demand once until next deployment, cached on CDN
        '/blog/**': { isr: true },
        // Admin dashboard renders only on client-side
        '/admin/**': { ssr: false },
        // Add cors headers on API routes
        '/api/**': { cors: true },
        // Redirects legacy urls
        '/old-page': { redirect: '/new-page' }*/
    }
  
})
