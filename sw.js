const C='fx-assist-v2-5';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icon.svg']))));
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('fx-assist-')&&k!==C).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus'in c)return c.focus()}if(self.clients.openWindow)return self.clients.openWindow('./')}))});
self.addEventListener('fetch',e=>{if(new URL(e.request.url).origin===location.origin)e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
