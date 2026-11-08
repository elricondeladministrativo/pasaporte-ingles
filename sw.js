// Guarda el juego en el teléfono para que funcione sin internet.
// Cambiá VERSION cuando subas una versión nueva del juego.
const VERSION = "pasaporte-v1";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Muestra lo guardado al instante y, si hay internet, actualiza la copia para la próxima vez.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(VERSION).then(cache =>
      cache.match(e.request).then(hit => {
        const net = fetch(e.request)
          .then(res => { if (res.ok || res.type === "opaque") cache.put(e.request, res.clone()); return res; })
          .catch(() => hit);
        return hit || net;
      })
    )
  );
});
