self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('whats-any').then(function(cache) {
     return cache.addAll([
       'index.js' , "index.html' , 'whatsapp-1623579_1280.png'
        ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
