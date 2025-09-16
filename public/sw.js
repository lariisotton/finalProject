
// Service Worker para cache e funcionalidade offline
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) =>
      cache.addAll(['/listar', '/manifest.json', '/icons/icon-192.png', '/icons/icon-512.png']) // Adicione aqui todos os recursos que deseja cachear
    )
  );
  self.skipWaiting();
});



// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});


// Interceptação de requisições para servir do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
