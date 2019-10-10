// Add this file for Progressive web app.

// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAME = 'myapp-cache-v1';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ' + key);
                        return caches.delete(key);
                    }
                }))
            )
    );
});
// A list of local resources we always want to be cached.
var PRECACHE_URLS = [
    'index.html',
    './', // Alias for index.html
];
// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', event => {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => cache.addAll(PRECACHE_URLS))
                .then(self.skipWaiting())
        );
    }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
});
