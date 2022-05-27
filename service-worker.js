/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2015/10/29/1.SS/index.html","ac5b4791ef34a0e7a0394b84003706e2"],["/2015/10/30/7.hexo搭建/index.html","5c0de57ab4e687c37250521b7298c934"],["/2015/11/03/4.Google拼音的搜狗皮肤/index.html","098ad39404304e7a42a1f02f249e5834"],["/2015/11/18/2.My-tool/index.html","dae27544dccadcaa8e6fca8f7b40981a"],["/2015/12/02/3.购买域名/index.html","903e42873a56abb29221df40998860ae"],["/2016/01/04/5.WIN10一次错误关机导致0xc000000e错误/index.html","e89a2b2aa8207358ac9fc908497121d2"],["/2016/05/11/6.搭建MineCraft服务器/index.html","c301e51c6be90834f8b214a71d569093"],["/2016/09/12/0.健身/index.html","a2f1c70c2718d27946a35ecbed249693"],["/2017/05/07/8.Npm/index.html","22fa8827f19a2d2cf1eaf19a78711ed5"],["/2017/05/13/9.PS+HTML+CSS/index.html","d38453f54ba0a88edbfd1bca3d061b55"],["/2017/05/15/10.JS笔记/index.html","41da2a248d3ca4d042e230f5cb8993c1"],["/2017/05/15/11.hasOwnProperty/index.html","b632daf36e7fc636e606183da2d83590"],["/2017/05/20/13.DOM艺术/index.html","2d8a5991f949eb5a3926595bd40cc061"],["/2017/05/20/14.架构/index.html","a7e3f4819ff7fbe5e51d08e713d883a3"],["/2017/05/22/12.Github for windows代理/index.html","1b73a290af205d33fad527273e6042a0"],["/2017/07/12/15.JS this指向/index.html","253cae3d9d50986d367ad81372ae83be"],["/2017/07/25/16.SASS部分使用方法/index.html","e668e1aea4813e658368542f6d7ca0e2"],["/2017/07/25/17.hexo-admin/index.html","0e2691da8e0fa7f6468e635b0e8eade8"],["/2017/09/12/18.yarn食用/index.html","b651d5a109bd24ab5057d17eed6b971e"],["/2017/10/10/20.Vue搭建阿里云/index.html","408d27cf5ac6d6ada803bb4081a96e93"],["/2017/11/10/21.APIcloud记录/index.html","1bde02e0b2e6d3ff58854aab3c1be3d4"],["/2017/12/01/22.Node-Express入手/index.html","34075f99ae16cec6ebb6acf03d09ec11"],["/2017/12/07/23.electron入手/index.html","445dc067db5752fbc1ebc5255ad0fab2"],["/2018/03/10/24.MongoDB/index.html","ef8b68308eeff5c39a946be220dbb89e"],["/2018/04/15/19.Vue/index.html","a5fd1c4b61c414bd6b7c7ee00bdb5fdd"],["/2018/07/16/26.APP与VUE通信/index.html","865b2fd7c45f1d4deaa39b4df694fea1"],["/2018/10/25/28.svg icon/index.html","ba7540549b543eb0379adb8b0755f1d0"],["/2018/11/06/29.条件编译/index.html","53f79491e88850f99768ac04557779d2"],["/2018/11/20/30.docker/index.html","a3c18aaaa70cde8046c0b2da91eef6f5"],["/2018/11/28/31.js/index.html","33d56d697ffb0dce0586c03bd0f86246"],["/2019/01/15/25.常用代码片段/index.html","822b1d677b0784265ca92e2f4441a5d4"],["/2019/01/22/32.Vue缓存数据并滚动到列表/index.html","0a4e407d801d845adeef84a6834e428f"],["/2019/03/30/33.版本更新问题/index.html","af868aba8c6c9496c4c57ba7cba406c8"],["/2019/04/25/34.老项目升级vue-cli3.0/index.html","5902dade23b1a4ba5dd5bfd08b601739"],["/2019/06/15/35.Vue,react单页项目更新后的白屏问题，及微信浏览器的坑 - 副本/index.html","9845a4d359505daed9b85f3e6c2d7408"],["/2019/07/09/36.kubernetes尝鲜并搭建服务/index.html","9ff83444ec27cebf41e576e5587019f1"],["/2019/07/10/37.webpack配置/index.html","392890b8b5bfe88e0bbc85e2c35eab62"],["/2019/08/02/27.记录/index.html","88e91f32c16a0c0cbe8c5ca3a813e01a"],["/2019/08/10/38.小程序event/index.html","b45bd2eb637bff3aed965b9aa9665a6f"],["/2019/12/01/39.微信分享的坑/index.html","e26d1612c7c418831d88fd16001bf6a4"],["/2019/12/03/40.前端错误日志记录/index.html","527ed9708d3a3bdcc734e38bd3883452"],["/2019/12/13/41.前端自动化测试/index.html","cda2f0bae764b5a521f23b508cabb58e"],["/2019/12/26/42.Vue computed原理/index.html","55eacc04d4957eda18f73e20b9697d6e"],["/2020/01/10/43.golang/index.html","eabf3f26b3ebcdf62008a3967decd597"],["/2020/04/13/44.mysql 主从搭建/index.html","2b51856047981d6a8d0179659a91bbc4"],["/2020/04/13/45.从docker 到 k8s/index.html","6e13b3a0d606823292c690e89ca16f82"],["/2020/04/13/46.使用docker构建本地开发环境/index.html","98eecc060800c0d5a8adbc3e4aa316df"],["/2020/05/16/46.使用docker构建本地开发环境/index.html","bf78bb8f407623e92bb650bf0489df63"],["/2020/06/25/47.electron 增量与全量更新/index.html","a481678e55b66f235728bec43a5e247e"],["/2020/06/25/48.webp 格式在 safari 下兼容/index.html","28291e6e912cda627acb9edbc2ab871e"],["/2020/11/21/49.OMV-nas/index.html","8c76c8f5908e6a1b38fcd83a1bee1d2f"],["/2021/09/22/50.rxjs/index.html","5899aeee7b58ba44da0138ccac9a1505"],["/2022/03/08/51.群晖搭建思源笔记/index.html","49755e7f76965ab5c7fc0082047273a1"],["/2022/04/12/52.CICD/index.html","ac2d33b30ab7892e5eceb6ec8da8c884"],["/2022/04/29/53.Nginx 优化/index.html","86bcfa1db3b9fcf130526a27d43818b8"],["/archives/2015/10/index.html","cdc34d40215dbd245fe7818d33e51743"],["/archives/2015/11/index.html","c6190414fb9fb226a53f27e86f99eadb"],["/archives/2015/12/index.html","0d75f04abb85c69baf1bc697a245e649"],["/archives/2015/index.html","dde5a0dc1a73e9aae2a2db3b053acf5d"],["/archives/2016/01/index.html","3573c2f0adce097368bf944dfe041372"],["/archives/2016/05/index.html","b2d80d3b49a26464f464070033f23ca3"],["/archives/2016/09/index.html","a2dc678a093076041857e21294cd21b3"],["/archives/2016/index.html","71f6e85f4b83e9cbe3d0dcbed709e493"],["/archives/2017/05/index.html","a135e3c423ba691e295560bdd494f4a6"],["/archives/2017/07/index.html","1f9d313f3cb0efef31145708e4e565e6"],["/archives/2017/09/index.html","0043aac551c28126dac8e796464f8fdf"],["/archives/2017/10/index.html","8f82e1da45ea9099047f1eb1828c977e"],["/archives/2017/11/index.html","9586b12b17e600e698b897a5051e8454"],["/archives/2017/12/index.html","5e6973c6cb17f68a11f77653398bc013"],["/archives/2017/index.html","37a0fc941f6cbd30a5bbb2e7a14b2c73"],["/archives/2017/page/2/index.html","1a510783ac3d2ecad3f13f5904184703"],["/archives/2018/03/index.html","e2d5a8fc44333b6e5ecc1b71087091d2"],["/archives/2018/04/index.html","538b4b2c21389ce193fdf8156d152006"],["/archives/2018/07/index.html","89bcaba33fd5639d35fc6f5178b3b0d6"],["/archives/2018/10/index.html","4f6c77d34c9ceb0ab89c723a459cba1c"],["/archives/2018/11/index.html","5c5bbd334aaca59ba37fedc1e26c48cd"],["/archives/2018/index.html","f971eb17603e876f244ed90ede8401b1"],["/archives/2019/01/index.html","08e343d8bc41c8b9e1130a4148554626"],["/archives/2019/03/index.html","bfe96e71056dc200992fd612ffaec488"],["/archives/2019/04/index.html","2757e522acafa950e4616e88f24b955a"],["/archives/2019/06/index.html","0cd2d85b9f1fa5db00a1c79519c08934"],["/archives/2019/07/index.html","d6652240ac7c6c447572c97462e83157"],["/archives/2019/08/index.html","846917df205983792e2bbe3071a8aea6"],["/archives/2019/12/index.html","a2443e639a95c9da6ee7c3c7d24b82e7"],["/archives/2019/index.html","a847e01b03cbd6131fd0b01c35c5bfec"],["/archives/2019/page/2/index.html","abe9dc829d15b00974d55b9edfdec7f1"],["/archives/2020/01/index.html","4ea42b95fb96adc20dbca0910982a43c"],["/archives/2020/04/index.html","e1a5bf0878678ed93c4a3296d7ce3559"],["/archives/2020/05/index.html","a462c369c23d6ddc2b5bb5b0749fca1d"],["/archives/2020/06/index.html","e333262ac2eeaca00dad311a5bb3a250"],["/archives/2020/11/index.html","f686d4951ae7905dac408858ee881076"],["/archives/2020/index.html","6aa8d79888ced9771d37bf83f4a28e59"],["/archives/2021/09/index.html","3d7bd097ffbe398ffed3429ce152dc32"],["/archives/2021/index.html","2da85afe5a6efacb1b2970d30cca7267"],["/archives/2022/03/index.html","fc6e86be5d07a117e031bfb47e35a6cc"],["/archives/2022/04/index.html","6684789171e76e5e10b60f5bd0a081f7"],["/archives/2022/index.html","7d43a4a1886ce0d781db2a9cb1f8d469"],["/archives/index.html","88a4d1a1a0c3d092d8c6240de5d8f730"],["/archives/page/2/index.html","61c6a8f5e153600b9b9a297d41c129a0"],["/archives/page/3/index.html","a4d65f1f24150fcb4d187010d0638e38"],["/archives/page/4/index.html","c03ffb831e8e0b8c4c60486a2bd7a743"],["/archives/page/5/index.html","d62e217a2d31264caa5d0ffa035c1691"],["/archives/page/6/index.html","2a929aadc52f1c9ddc75f04cb66f6fb4"],["/archives/page/7/index.html","9e938804f7cb28b46db79c4afb363db8"],["/avatar/192.jpg","2bec195f02031d7d951854fe96fab4aa"],["/css/index.css","43c755c01fee0296fc47db70e840709a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/192.jpg","2bec195f02031d7d951854fe96fab4aa"],["/images/48.jpg","b640232f0f719b0ffcd95ab45699371d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","4d05373a3e296e1993a360389f871c36"],["/js/copy.js","8efc045fae7dfd586a0663630a60a875"],["/js/fancybox.js","234fabbf3507fea5faa54a52a283fe0c"],["/js/fireworks.js","5a3be45d15dde8a768a77c7e154867f4"],["/js/head.js","dd1e570d90a3a89bfe8746f084da3958"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","85efdd8144882f926c67bffc2cc67def"],["/js/search/algolia.js","9d3a2476173ded75fd9583d2fb8de60c"],["/js/search/local-search.js","2391db42817efa5b9f6cfb7fa703ae19"],["/js/sidebar.js","9a909b8f22c192ae6118bafa1ed29e5c"],["/js/third-party/anime.min.js","f258ee6f938947e043c7e0984cd7e2b2"],["/js/third-party/jquery.fancybox.min.js","f72c4665d138b80c7b15caedd51c6a2b"],["/js/third-party/jquery.min.js","473957cfb255a781b42cb2af51d54a3b"],["/js/third-party/reveal/head.min.js","f0ca67ae6f81278adea64b8fff513c34"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","ed230503435d0ce148056d911361d911"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","1581449f04ded4a6c658352189ab2862"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","cfee25b2ec5647d57cb347f8042b83eb"],["/js/utils.js","946deebb9969951e319a5cf0e477a337"],["/page/2/index.html","ae1b4f3e391fa4257fb24824bc649824"],["/page/3/index.html","e3246d846f343090164ed1491378589a"],["/page/4/index.html","23e5a9039de91a4588943668118ea304"],["/page/5/index.html","4eedcbf5dab4f6be7997a0bfea2b1b6b"],["/page/6/index.html","044484d2327ce4a0659cc8907f0e5627"],["/page/7/index.html","059801a439d517247b46b3b8a8a1de26"],["/tags/APIcloud/index.html","33d41003377250cdba2da22603dedb92"],["/tags/CSS/index.html","0a7c387e515afab01646a19c52064fef"],["/tags/DOM/index.html","70ffa25ee9cce55df59729d2b760f196"],["/tags/ES6/index.html","7bd36565c4316aed5bd070a552f99efb"],["/tags/Git/index.html","8d138ba5ccd40ef2343985941f485236"],["/tags/JS/index.html","029cc4812c530ec83aeec8c6aa815c7f"],["/tags/Linux/index.html","d0fcb949aa9766428fa8c2125be8907d"],["/tags/MineCraft/index.html","a25b6d1120f950372bcb0a1b9ab2bc17"],["/tags/Npm/index.html","d76a1384a3e6f9be58c9b26049e841ad"],["/tags/SASS/index.html","ff4786b0d4e90057dce8756a2ac31c9d"],["/tags/SS/index.html","80551a5299ef8c677e3b4aa9a8ad260d"],["/tags/Vue/index.html","1b4c957ba874a98831a53b6acfc6bb87"],["/tags/hexo/index.html","581d39aec491cffef6ec17f731c101ec"],["/tags/index.html","5714ec584416bc874516f883ef355685"],["/tags/node/index.html","b600b7188e7ddaa6f961cf4391afd8bc"],["/tags/yarn/index.html","c07219300a8a42f82756497dc0421ebf"],["/tags/教程/index.html","03ac8397e3b4d08ec59afeaf08e1481f"],["/tags/杂谈/index.html","3cda37ded6addf039202cfef512b8484"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://flands.com"});




