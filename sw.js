// Service worker mínimo: hace la web instalable y no guarda nada en caché,
// así tus clientes siempre ven la versión más reciente de los entrenamientos.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
