//sw
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('biology-dictionary-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/dictionary(3).js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
