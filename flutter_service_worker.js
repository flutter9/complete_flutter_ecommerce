'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/images/google.png": "fa23c1a79abaebba83e43c41ef3bb3ce",
"/assets/images/lg.png": "a5a414180cd331f7c3a1dbb5e207e902",
"/assets/images/login.svg": "72577c29d32a62626d7a2ea1de3b9ef7",
"/assets/images/img.png": "695771ecb049785c325ebf3792ba9945",
"/assets/images/home.jpg": "d2c1f2c140746735d1ee594fa9e9ec93",
"/assets/images/m2.jpg": "7b3a75a83820d1e6ed9893da8b60ad42",
"/assets/images/flutter_ecommerce.jpg": "d8f8d42ed4fdafec677749c3984c3a3a",
"/assets/images/goog.png": "2f252228d41ae2d200e068c8717b71db",
"/assets/images/img2.png": "184be644c43718b50bae3067c105e55c",
"/assets/images/img1.png": "5ae95829d48cad2931edf0c96ff314e5",
"/assets/images/ggg.png": "894a294491fa4f62cc4ed8618a0e0a08",
"/assets/images/signup.svg": "b2a671b9d77cf65947cf676fa4ff20d2",
"/assets/images/sign.jpg": "3282f1c70eabb8cd65cbcf45fe4e4c53",
"/assets/images/m1.jpeg": "d475c2aa58d06350a3d0b1395fedb345",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "4584db9e3e5da9a191a005e32c8282b3",
"/assets/LICENSE": "2ac7e92b73b44f3c182689a61d70ec90",
"/main.dart.js": "78583347bb16ce6a2618f49fe1cdf91c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
