self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('5s-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './img/icon-192.png',
        './img/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
