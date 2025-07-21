const CACHE_NAME = 'web-components-v1';
const WC_URLS = [
  'http://localhost:3002/web-components-vite/web-components.umd.js',
  'http://localhost:3002/web-components-vite/web-components.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(WC_URLS))
  );
});

self.addEventListener('fetch', (event) => {
  if (WC_URLS.some(url => event.request.url.includes(url))) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version or fetch from network
          return response || fetch(event.request);
        })
    );
  }
});