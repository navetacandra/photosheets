// const cacheData = [
//     // Service Worker
//     '/sw.js',
//     // Page Assets
//     '/',
//     '/profile',
//     '/index.html',
//     '/DefaultUser.jpg',
//     // Config Assets
//     '/manifest.json',
//     '/browserconfig.xml',
//     // Bootstrap Assets
//     '/bootstrap/css/bootstrap.css',
//     '/bootstrap/js/bootstrap.js',
//     // React Assets
//     '/static/js/bundle.js',
//     '/static/js/0.chunk.js',
//     '/static/js/1.chunk.js',
//     '/static/js/main.chunk.js',
//     '/main.95bedfe2586d3b10e464.hot-update.js',
//     // React Production Build Assets
//     '/static/js/',
//     '/static/css/',
//     // Image Assets
//     '/image/android-icon-36x36.png',
//     '/image/android-icon-48x48.png',
//     '/image/android-icon-72x72.png',
//     '/image/android-icon-96x96.png',
//     '/image/android-icon-144x144.png',
//     '/image/android-icon-192x192.png',
//     '/image/android-icon-512x512.png',
//     '/image/apple-icon.png',
//     '/image/apple-icon-57x57.png',
//     '/image/apple-icon-60x60.png',
//     '/image/apple-icon-72x72.png',
//     '/image/apple-icon-76x76.png',
//     '/image/apple-icon-114x114.png',
//     '/image/apple-icon-120x120.png',
//     '/image/apple-icon-144x144.png',
//     '/image/apple-icon-152x152.png',
//     '/image/apple-icon-180x180.png',
//     '/image/apple-icon-precomposed.png',
//     '/image/ms-icon-70x70.png',
//     '/image/ms-icon-114x114.png',
//     '/image/ms-icon-150x150.png',
//     '/image/ms-icon-310x310.png',
//     '/image/favicon.ico',
//     '/image/favicon-16x16.png',
//     '/image/favicon-32x32.png',
//     '/image/favicon-96x96.png',
// ]
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
    // Normal Bootstrap
    '/bootstrap/css/bootstrap.css', '/bootstrap/css/bootstrap.css.map',
    //Bootstrap Grid
    '/bootstrap/css/bootstrap-grid.css', '/bootstrap/css/bootstrap-grid.css.map',
    //Bootstrap Grid Min
    '/bootstrap/css/bootstrap-grid.min.css', '/bootstrap/css/bootstrap-grid.min.css.map',
    //Bootstrap Reboot
    '/bootstrap/css/bootstrap-reboot.css', '/bootstrap/css/bootstrap-reboot.css.map',
    //Bootstrap Reboot Min
    '/bootstrap/css/bootstrap-reboot.min.css', '/bootstrap/css/bootstrap-reboot.min.css.map',
    //Bootstrap Min
    '/bootstrap/css/bootstrap.min.css', '/bootstrap/css/bootstrap.min.css.map',
    /*-----------------------------------------------------------------------------------------------------*/
    // Bootstrap Javascript
    '/bootstrap/js/bootstrap.js',
    '/bootstrap/js/bootstrap.js.map',
    '/bootstrap/js/bootstrap.min.js',
    '/bootstrap/js/bootstrap.min.js.map',
    '/bootstrap/js/bootstrap.bundle.js',
    '/bootstrap/js/bootstrap.bundle.js.map',
    '/bootstrap/js/bootstrap.bundle.min.js',
    '/bootstrap/js/bootstrap.bundle.min.js.map',
    '/bootstrap/js/bootstrap.esm.js',
    '/bootstrap/js/bootstrap.esm.js.map',
    '/bootstrap/js/bootstrap.esm.min.js',
    '/bootstrap/js/bootstrap.esm.min.js.map',
    /*-----------------------------------------------------------------------------------------------------*/
    // React Assets
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js',
    '/static/js/main.chunk.js',
    '/main.95bedfe2586d3b10e464.hot-update.js',
    /*-----------------------------------------------------------------------------------------------------*/
    // React Production Build Javascript Assets
    '/static/js/',
    '/static/js/',
    '/static/js/',
    // React Production Build Javascript Map Assets
    '/static/js/',
    '/static/js/',
    '/static/js/',
    // React Production Build Style Assets
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