'use strict';
const BASE=new URL('./',self.location.href);
const PREFIX='mentor-carreira-360:'+BASE.pathname+':';
const CACHE=PREFIX+'rc0.17-v1';
const INDEX=new URL('index.html',BASE).href;
const FILES=['index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'].map(path=>new URL(path,BASE).href);
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(url=>new Request(url,{cache:'reload'})))));
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{for(const key of await caches.keys()){if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);}await self.clients.claim();})());
});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==BASE.origin)return;
 if(request.mode==='navigate'&&(url.pathname===BASE.pathname||url.pathname===new URL(INDEX).pathname)){
  event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok)return response;}catch{}return (await caches.open(CACHE)).match(INDEX).then(r=>r||Response.error());})());return;
 }
 if(!FILES.includes(url.href))return;
 event.respondWith((async()=>{const cache=await caches.open(CACHE);return (await cache.match(request))||fetch(request);})());
});
