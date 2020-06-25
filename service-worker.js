/* service-worker.js — Service Worker */
var CACHE_NAME = 'poot-cache-v1';
var urlsToCache = [
    '/',
    'images/AMT-LOGO.png',
    '/scripts/index.js',
    '/styles/styles.css'
];

self.addEventListener('install', function(event) {
    console.log('service-worker v1 installing…');
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('service-worker v1 now ready to handle fetches!');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
  