'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6f679f26b8c381864e29f1dacfb6b9fb",
"assets/AssetManifest.bin.json": "f00c6d86363e6b6ac0a54df9f0bbc70c",
"assets/AssetManifest.json": "2f5250c1c4baed06cc68389f8bd2a106",
"assets/assets/App%2520bar/fb.png": "457525925dcf341074df743b4b845c88",
"assets/assets/App%2520bar/ins.png": "d2582662ced219b18d495972a33a1141",
"assets/assets/App%2520bar/logo.png": "7b1bc5363e361843d4690012ffe5a6f5",
"assets/assets/App%2520bar/yt.png": "ccfb63a0aa82897bc1707e496f5ad188",
"assets/assets/Category/Bedroom/banner.png": "05c7ae0360e75abc74868a80315da00b",
"assets/assets/Category/Bedroom/cot1.png": "93cd046b33b712f37d1523fffe70f1d1",
"assets/assets/Category/Bedroom/cot2.png": "62a1e91c8e38b8715b280223c91ba589",
"assets/assets/Category/Bedroom/cot3.png": "2894df6f37699ddd390893de71d29c15",
"assets/assets/Category/Bedroom/DRESSING%2520TABLE1.png": "121ba1a08400c1ba38e7c8f1cfcbb572",
"assets/assets/Category/Bedroom/DRESSING%2520TABLE2.png": "005c6b3fa29e0111d7743239f6eec7b4",
"assets/assets/Category/Bedroom/DRESSING%2520TABLE3.png": "57d5844024f0bca31852fe6c798444f3",
"assets/assets/Category/Bedroom/WARDROBE.png": "bef0048a74910ace9607b5982b705b9a",
"assets/assets/Category/Bedroom/WARDROBE1.png": "69ceadba3d1226d09b5362dee9cfb4ba",
"assets/assets/Category/Bedroom/WARDROBE2.png": "41a15c523799f259db84c962e8aba0fe",
"assets/assets/Category/Corridor/banner.png": "c5fdf008334f970d4de16f7d7b3c73a6",
"assets/assets/Category/Corridor/BENCH1.png": "51688fa37e4b622af0bce9d5a1d369ac",
"assets/assets/Category/Corridor/BENCH2.png": "5deaf4f2fe32e951cad9e9d075fe0e51",
"assets/assets/Category/Corridor/BENCH3.png": "6b2952983ee02a246f3316b8ad68053f",
"assets/assets/Category/Corridor/table.png": "88ec0668ae5af41c24a894dc6f272f27",
"assets/assets/Category/Dining%2520Room/banner.png": "5d11321431f2b5c79a9e3e5bb4ae719d",
"assets/assets/Category/Dining%2520Room/chair1.png": "73672f4c2b7b610d91aa3be692d86072",
"assets/assets/Category/Dining%2520Room/chair2.png": "4fc9cedb2120f7d4fc54ddb2126ecd46",
"assets/assets/Category/Dining%2520Room/chair3.png": "060440165e9d16679ca5142349879261",
"assets/assets/Category/Dining%2520Room/chair4.png": "d7c7561025ebc0872b6700d726ed1089",
"assets/assets/Category/Dining%2520Room/chair5.png": "a0e8ee6de87c27e9085bb7cef14a6321",
"assets/assets/Category/Dining%2520Room/table1.png": "842e2b8dc11e402f0dce3bdcd158b0f7",
"assets/assets/Category/Dining%2520Room/table2.png": "782e672ee70f642451d5005cf8942fec",
"assets/assets/Category/Dining%2520Room/table3.png": "8a5781261aaed7d600b61d28ed8f06e5",
"assets/assets/Category/Dining%2520Room/table4.png": "2f5405b4daa595b568a9f24e597a61ea",
"assets/assets/Category/Living%2520Room/banner.png": "3a6f688e58e483d0ea4ae64a5b7223e7",
"assets/assets/Category/Living%2520Room/sofa1.png": "f72f2fdb3b91695d013922ccc2c406c1",
"assets/assets/Category/Living%2520Room/sofa2.png": "99e11fd77d5d0cec24e453b3049e8025",
"assets/assets/Category/Living%2520Room/sofa3.png": "e477d43453a9d1a9a62520729762aba3",
"assets/assets/Category/Living%2520Room/sofa4.png": "dee8714cd9f5d2125a6a961eca9c7a7e",
"assets/assets/Category/Living%2520Room/sofa5.png": "a3082f6189b2a74583a3bf90e88523cb",
"assets/assets/Category/Living%2520Room/table1.png": "154888c3e2a08140fc2a092b6e210ac5",
"assets/assets/Category/Living%2520Room/table2.png": "00543224f6731173a1e759a85833b2ce",
"assets/assets/Category/Living%2520Room/table3.png": "a43e0dc7e9c9f639c2e8176707081b61",
"assets/assets/Category/Living%2520Room/table4.png": "5911e5a32559a3cf713fa36859d54695",
"assets/assets/FreshArrivals/fa1.png": "1977b049ccb1429e1f2f41307d7ab845",
"assets/assets/FreshArrivals/fa2.png": "a850a932bc4953773c8f9364be84aa2b",
"assets/assets/FreshArrivals/fa3.png": "31608c991d7ba592bd1babdb2c97998e",
"assets/assets/FreshArrivals/fa4.png": "9a57d48a70b2225099e0f9fd5b794b59",
"assets/assets/FreshArrivals/fa5.png": "183d2e72c72814c378c8b4461ec65d32",
"assets/assets/FreshArrivals/fa6.png": "e7a0b81459c85d881dac94815df8c40a",
"assets/assets/FreshArrivals/fa7.png": "ae67abe4495c59c6797a6011f4033351",
"assets/assets/FreshArrivals/fa8.png": "313eae653f0b9a117090288ec6ac6ce6",
"assets/assets/FurnitureCollection/1.png": "46066d5564c3eb61ca6eff787f845b60",
"assets/assets/FurnitureCollection/2.png": "280076c366e56fdc1dab0e6666d5f54b",
"assets/assets/FurnitureCollection/3.png": "73cb9348f15cb938893fc215cbcd11dc",
"assets/assets/FurnitureCollection/4.png": "b20d242eff7b40e241c8f18370893fb6",
"assets/assets/FurnitureCollection/5.png": "5134ff3f09624521c5d6411201155cb5",
"assets/assets/Home%2520banner/image%25201.png": "3f58b6da879a257812736c4cd6db79f8",
"assets/assets/Home%2520banner/image%25202.png": "0b392a7627e5b3e81cd7bde2488286e7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dbbb47f7fc1d114282aa102eda5db197",
"assets/NOTICES": "fbe3a54b3fc3b69fb8977d83f9212a08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7a844960ec55c4f2ecbd9d20293aaf4b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "03d4d10f4ba51a280d186f2da3b9b456",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
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
"flutter_bootstrap.js": "e062c15d70f0bbc294de166a4de90971",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b22ae047141b6568df38e2ec94ad7d3c",
"/": "b22ae047141b6568df38e2ec94ad7d3c",
"main.dart.js": "3f2a25d9bb7b17ef3cebc1a044986fc1",
"manifest.json": "726e18143d874133361ec15ed65eb1af",
"version.json": "9000146ed883eb4013c9db0777ff410e"};
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
