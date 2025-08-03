//sw
// sw.js
const CACHE_NAME = 'biology-dictionary-cache-v1';
const urlsToCache = [
  '/', // Root URL for index.html
  '/index.html',
  '/dictionary.js',
  'https://fonts.googleapis.com/icon?family=Material+Icons' // Google Material Icons
];

// ইনস্টলেশন ইভেন্ট: ফাইলগুলো ক্যাশে সেভ করা
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Cache failed:', error);
      })
  );
});

// ফেচ ইভেন্ট: ক্যাশ থেকে রিসোর্স সরবরাহ করা
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // ক্যাশে থাকলে ক্যাশ থেকে রিটার্ন করুন
        if (response) {
          return response;
        }
        // নতুবা নেটওয়ার্ক থেকে ফেচ করুন
        return fetch(event.request).then(networkResponse => {
          // API কলগুলো ক্যাশ করবেন না, কারণ এগুলো ডায়নামিক
          if (event.request.url.includes('parseapi.back4app.com')) {
            return networkResponse;
          }
          // অন্যান্য রিসোর্স ক্যাশে সেভ করুন
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
      .catch(() => {
        // অফলাইনে থাকলে ফলব্যাক পেজ দেখান
        return caches.match('/index.html');
      })
  );
});

// অ্যাক্টিভেট ইভেন্ট: পুরানো ক্যাশ পরিষ্কার করা
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
