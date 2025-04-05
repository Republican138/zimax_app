'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "80808b5a6d08272b384c287ce83b9f38",
"assets/AssetManifest.bin.json": "ebbdc7b1ca117f3c11b85fe60af41e7d",
"assets/AssetManifest.json": "b3a7dcc315d6910e37df828598f1bfa6",
"assets/assets/15.jpg": "115155e5116dd8cd59ebfcbde75647d6",
"assets/assets/17.jpg": "7c59e97c2ee43daa5a7dbb15e104bf13",
"assets/assets/2.jpg": "295ef950e3788e713f24dc4fd5735d02",
"assets/assets/23.jpg": "f55fe5d68518606827672e3f5a7cdd8d",
"assets/assets/3.jpg": "f1a6ad0bba01cb1be1fe57b249139ab2",
"assets/assets/37.jpg": "c2a13c9e185e3548c79d0183a71aa51d",
"assets/assets/44.jpg": "ab5db90c36adbb38e32d585e3f715a29",
"assets/assets/45.jpg": "23f5abb5f0f693ef0f77e00c0799d512",
"assets/assets/47.jpg": "18c851c23755f820dc7fe97f6a6f7391",
"assets/assets/65446.jpg": "e2d3e855532280dcffbce05f30f0b425",
"assets/assets/9.jpg": "d1e4319faf8e6474783d7c3134db511f",
"assets/assets/addition.png": "8c418e83bf2e2810aa8fa9198af0f7d0",
"assets/assets/ads.png": "4ec94b26fc404d3870edd2c9781d1ac4",
"assets/assets/blur.jpg": "6dea4d4b4e8f84be31bf5df701b4404c",
"assets/assets/bookmark.png": "7af1ee32163cd561c99176a10a6cbd52",
"assets/assets/chat%2520(1).png": "e7db96888302cbba31ab312955246c62",
"assets/assets/chat.png": "e8bf29d12fc0ff70e3d60805313a8443",
"assets/assets/comment.png": "6dbb1d674e1ebf71f143579708bc97a3",
"assets/assets/events.png": "92b599fcb98ec5c57e5502a12241d795",
"assets/assets/favourite.png": "28e5a7fd19a5d077c200cccf461d3605",
"assets/assets/flower.jpg": "58529b821aa5c5d3f630ae2be648ed58",
"assets/assets/heart.png": "9b4f95a31b89f99e1b8a86f566718f58",
"assets/assets/home%2520(1).png": "6e05281652284249ebfffe04f4710820",
"assets/assets/home.png": "a42208ed8bb8b649b9e1a73237964b38",
"assets/assets/image33.jpg": "e185fd5cb56d5249777da0a96a5797af",
"assets/assets/image34.jpg": "d0edeed9d9c55efcf9ccf6ba621f19f8",
"assets/assets/image35.jpg": "757bc7df82ba788c5e854573d1be52da",
"assets/assets/image36.jpg": "6dea4d4b4e8f84be31bf5df701b4404c",
"assets/assets/image37.jpg": "61b6195477ee43540d84f079fd7bcfaf",
"assets/assets/images/pfp15.jpg": "312bec5acfccd14b37f506c3e2144878",
"assets/assets/images/pfp2.jpg": "ebb52b0b8236bf7fa9663a4522769f00",
"assets/assets/images/pfp3.jpg": "8e0fb108feafa914de1192f7fda06dae",
"assets/assets/images/pfp4.jpg": "d8e45221c2b8d394029f340d91e4347b",
"assets/assets/images/pfp5.jpg": "697fb021a6bfab92502e96b47a2e0186",
"assets/assets/images/pfp6.jpg": "f22daf84159331a52b9c8cd3cf75e257",
"assets/assets/images/pfp7.jpg": "c43a4c5c90e7b9b3ec49d3189c820a59",
"assets/assets/images/pfp8.jpg": "b15992bc25b5ab63ee2fd97bab6dd829",
"assets/assets/images/pfp9.png": "f35b8992784b7b0afa947fa00aed77a3",
"assets/assets/images1.jpg": "b24bde3d320e2ebe95876aaeec5c46f9",
"assets/assets/images2.jpeg": "c82b9f1f59e7c83f87c525dbc2701700",
"assets/assets/images3.jpeg": "f8b5a54d90bdcef9d52cbad60789ab99",
"assets/assets/images4.jpeg": "ceb3de22a2727b3fbdd7131dce4f81c0",
"assets/assets/images5.jpeg": "1ae6e1b61a37d469f310864d17245b66",
"assets/assets/img1.png": "cf08a93beafaf120a2ec93be3f6a756e",
"assets/assets/img2.jpg": "551505b44f9988420c42be99e0193d7e",
"assets/assets/img4.jpeg": "c2854dcb3acc8a4ac6d8ea7139c16e31",
"assets/assets/link.png": "62260798a3011e5088bc78e6ffc3a8df",
"assets/assets/mail.png": "8f0212e7a9a53853932cdfd9734f640e",
"assets/assets/media.png": "ef4d4e179a289e85d6d88aed20b30ea4",
"assets/assets/media1.jpg": "ccd7b987c539c0112d5421e77bf30f48",
"assets/assets/media2.jpg": "9b6a0cf72c46f56b77e2f69bce54338f",
"assets/assets/media3.jpg": "e385309f3e85f6c07b071b93208484ed",
"assets/assets/media4.jpg": "f0d562aba4526e17662f20fa22d93899",
"assets/assets/megaphone.png": "f0143353ee4ae9ee581f46057f4dac3d",
"assets/assets/message.png": "d9504bf6217e62f90bdf4b06e548bd52",
"assets/assets/more.png": "ff6bf2c9a2d5662b4cbf8d19452c059a",
"assets/assets/people%2520(1).png": "3a0719e5ff7beb667f51df8f2932af0e",
"assets/assets/people-1.png": "e62c0311eca2bf95d6024c1c98c8e903",
"assets/assets/people.png": "85b5b9dc5e4e5df63ec498b30a508043",
"assets/assets/pfp1.jpeg": "0d9ffa7b5babf9562466a0f033499a69",
"assets/assets/pfp10.jpg": "2c9c329a3f9cddabc19030bae4ea1f60",
"assets/assets/phone-call.png": "7147ca19cb88338682ba6ede7f2f6f53",
"assets/assets/poll.png": "93f8d984542d20f6c661ed5e34261348",
"assets/assets/resource.jpg": "4f6800996e82d27ecb4733563540cc46",
"assets/assets/search.png": "c02fc5fcd5920b8766c73f4c701edd64",
"assets/assets/send.png": "018e0d97b12116f506cbd8f172c0195c",
"assets/assets/share.png": "711c458a7c1810b97d84fcf42e94c9c3",
"assets/assets/smile.png": "aee9d06d32c0786f58a6435ad69cb23a",
"assets/assets/tti3.jpg": "c49aa2de8accaae0e0f8bd6f183f38a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2daff1db9a990bc90d45c9974ea7529a",
"assets/NOTICES": "f270a169da045170e235796aaf534729",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8ef06dd56c1c66f193f325111d406ed8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5736d3c45d73bc452d3bc0a9d7955cb0",
"/": "5736d3c45d73bc452d3bc0a9d7955cb0",
"main.dart.js": "4d0c4446a4db967439faac80c3926939",
"manifest.json": "f5c095d708ddafc42a3267655499171e",
"version.json": "e1bf7ef9865708a8c7faef4c2949ff4d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
