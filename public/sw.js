const cacheData = [
    /*-----------------------------------------------------------------------------------------------------*/
    // Service Worker
    '/sw.js',
    /*-----------------------------------------------------------------------------------------------------*/
    // Page Assets
    '/',
    '/profile',
    '/index.html',
    '/DefaultUser.jpg',
    /*-----------------------------------------------------------------------------------------------------*/
    // Config Assets
    '/manifest.json',
    '/browserconfig.xml',
    // Bootstrap Assets
    /*-----------------------------------------------------------------------------------------------------*/
    '/bootstrap/css/',
    '/bootstrap/js/',
    /*-----------------------------------------------------------------------------------------------------*/
    // React Assets
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js',
    '/static/js/main.chunk.js',
    '/main.95bedfe2586d3b10e464.hot-update.js',
    /*-----------------------------------------------------------------------------------------------------*/
    // React Production Build Javascript Assets
    '/static/css/',
    /*-----------------------------------------------------------------------------------------------------*/
    // Image Assets
    '/image/android-icon-36x36.png',
    '/image/android-icon-48x48.png',
    '/image/android-icon-72x72.png',
    '/image/android-icon-96x96.png',
    '/image/android-icon-144x144.png',
    '/image/android-icon-192x192.png',
    '/image/android-icon-512x512.png',
    '/image/apple-icon.png',
    '/image/apple-icon-57x57.png',
    '/image/apple-icon-60x60.png',
    '/image/apple-icon-72x72.png',
    '/image/apple-icon-76x76.png',
    '/image/apple-icon-114x114.png',
    '/image/apple-icon-120x120.png',
    '/image/apple-icon-144x144.png',
    '/image/apple-icon-152x152.png',
    '/image/apple-icon-180x180.png',
    '/image/apple-icon-precomposed.png',
    '/image/ms-icon-70x70.png',
    '/image/ms-icon-114x114.png',
    '/image/ms-icon-150x150.png',
    '/image/ms-icon-310x310.png',
    '/image/favicon.ico',
    '/image/favicon-16x16.png',
    '/image/favicon-32x32.png',
    '/image/favicon-96x96.png',
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('siteCacheV3').then(cache => {
            return cache.addAll(cacheData)
        })
    )
})

self.addEventListener('active', e => {
    e.waitUntil(
        caches.keys().then(cacheName => {
            return Promise.all(
                cacheName.filter(cacheName => cacheName !== 'site-cache')
                .map(cacheName => {
                    return caches.delete(cacheName)
                })
            )
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                return res
            }
            return fetch(e.request)
        })
    )
})