/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3de8a374016372d9b540a543a6b376dc"
  },
  {
    "url": "algorithm/linear/biDirectionalLinkList.html",
    "revision": "6f51e922d0943ce06b5425b98642fa24"
  },
  {
    "url": "algorithm/linear/circleLinkList.html",
    "revision": "7d373a72f7bc2ab9546dfb4b8f8e5948"
  },
  {
    "url": "algorithm/linear/linkList.html",
    "revision": "eb1a26a24df9490590729a472830e152"
  },
  {
    "url": "algorithm/linear/sequence.html",
    "revision": "4c04c7345dd72068a446958ab3de17c1"
  },
  {
    "url": "algorithm/linear/speedPointer.html",
    "revision": "3ee41bff77769409a5aa04b4370e74f9"
  },
  {
    "url": "algorithm/queue/queue.html",
    "revision": "446827c27d5fd0b9bb0cba3ad19286dd"
  },
  {
    "url": "algorithm/stack/bracketMatch.html",
    "revision": "9d5dfa6269d47a3199774f3981c21c39"
  },
  {
    "url": "algorithm/stack/stack.html",
    "revision": "5e9ec9d7688b359add5bd7a82a9a57b7"
  },
  {
    "url": "algorithm/symbol/symbolTable.html",
    "revision": "9d4c2d0aefbf8bdb2c07904eb5844f9d"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.aea18091.css",
    "revision": "aeeb7db0c33a4c3ff1d1839a8f5159eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5ff2c37f.js",
    "revision": "9fa213d6c9a5dae77d331f369e4a435b"
  },
  {
    "url": "assets/js/11.55c96dfe.js",
    "revision": "1628fd07b31d1a87a8494cfdf6a16d35"
  },
  {
    "url": "assets/js/12.6653e3a8.js",
    "revision": "d7d59cc2c255a6f8c7ea5c17e5d6ff28"
  },
  {
    "url": "assets/js/13.2c248042.js",
    "revision": "db0ed2e8cb72df7b6d82813ce7324a1d"
  },
  {
    "url": "assets/js/14.a6f0e006.js",
    "revision": "89797c6f59d3dcd27564b295dd2d8f15"
  },
  {
    "url": "assets/js/15.fe4ec15e.js",
    "revision": "2e42cf94715d2e8826c69eba0dde653b"
  },
  {
    "url": "assets/js/16.323681f8.js",
    "revision": "324b426c1ae9ea35d7e34efcb8587f4c"
  },
  {
    "url": "assets/js/17.df4ca178.js",
    "revision": "918604bd04918a5f5af60ae288098211"
  },
  {
    "url": "assets/js/18.b738ae39.js",
    "revision": "6c2cec05a7613fbb3f71273359565261"
  },
  {
    "url": "assets/js/19.92d6da09.js",
    "revision": "520bb603a0a34dad7aa613508edc7e5f"
  },
  {
    "url": "assets/js/20.09e2d99c.js",
    "revision": "b14e4769501d6b8d5d4822ea29bd7f28"
  },
  {
    "url": "assets/js/21.eaad7e9c.js",
    "revision": "e6999315779dea0808a205ea623c7e55"
  },
  {
    "url": "assets/js/22.c93c9406.js",
    "revision": "6f6030fe8e73fadd608c547545b16411"
  },
  {
    "url": "assets/js/23.ffe085eb.js",
    "revision": "7843a2180613454bd379ad350951870e"
  },
  {
    "url": "assets/js/24.45c3457a.js",
    "revision": "6ba085d07dc4ce589ab33070753b243c"
  },
  {
    "url": "assets/js/25.9cb90cf0.js",
    "revision": "de15f5fe7f6563a4da4411ea5aeb9494"
  },
  {
    "url": "assets/js/26.116fa35e.js",
    "revision": "85f330c80f56af677c9fe5f23a88a780"
  },
  {
    "url": "assets/js/27.9febe488.js",
    "revision": "044c7843e6cf835e012e549ddd95f7e1"
  },
  {
    "url": "assets/js/28.17888588.js",
    "revision": "d01829befb47d61c52b8eb17a5a50cc6"
  },
  {
    "url": "assets/js/29.fe3380b1.js",
    "revision": "ea95d1db58d8247cc5cf433f4d8063f1"
  },
  {
    "url": "assets/js/30.bd22d97e.js",
    "revision": "5e056e78ce8faca861ceebcf705f9348"
  },
  {
    "url": "assets/js/31.f25f0212.js",
    "revision": "c48c4268e165e65b3f123237c087451d"
  },
  {
    "url": "assets/js/32.7aa745a6.js",
    "revision": "5043b91bafa2d0f00720baab9ba44f34"
  },
  {
    "url": "assets/js/33.3314e331.js",
    "revision": "870664abb8f844ad4bc09e8b014a6ca9"
  },
  {
    "url": "assets/js/34.ffabcd92.js",
    "revision": "92833cedc8876c9f6731be741b25be92"
  },
  {
    "url": "assets/js/35.82315709.js",
    "revision": "b13e9f2ccd1d218d93123c51403a9d65"
  },
  {
    "url": "assets/js/36.45418460.js",
    "revision": "f536b87e38fd20af7f783d8a2e1c40f4"
  },
  {
    "url": "assets/js/37.643c716c.js",
    "revision": "50ceb684cd11c2dbe8daaaebbc185a68"
  },
  {
    "url": "assets/js/38.c8a2da3a.js",
    "revision": "510192c765e715507f83043b3597ccdd"
  },
  {
    "url": "assets/js/39.8d6af70a.js",
    "revision": "2230f70e95b6f9551fd53b7af2fb8f3b"
  },
  {
    "url": "assets/js/40.d93a0a34.js",
    "revision": "05596f93a50437906d07d2f283fa1e59"
  },
  {
    "url": "assets/js/41.a972eee0.js",
    "revision": "e854c5ff381d28e2a38be2163d7da4bf"
  },
  {
    "url": "assets/js/5.0a966701.js",
    "revision": "59e4d207a64b8482c08e191fbacc2af1"
  },
  {
    "url": "assets/js/6.90d99feb.js",
    "revision": "2a813878fdcb295e2383a6cf58f735f8"
  },
  {
    "url": "assets/js/7.2c1fcc9c.js",
    "revision": "5d92519c466d6505f028abe4a207c879"
  },
  {
    "url": "assets/js/8.a2251572.js",
    "revision": "0401e5d095be746d758b8de8252b00d5"
  },
  {
    "url": "assets/js/9.99564488.js",
    "revision": "821bf5aa40982bd3f18a23a47248de85"
  },
  {
    "url": "assets/js/app.5cc6f2d9.js",
    "revision": "837de95e7e9a18d18e0f8e09075604c0"
  },
  {
    "url": "assets/js/vendors~docsearch.674e6a95.js",
    "revision": "1f1b15103ffb88b051bbc5d419098648"
  },
  {
    "url": "assets/js/vendors~flowchart.2421bbe8.js",
    "revision": "d52deef6d1f6bbe4bf4ce36292b16b54"
  },
  {
    "url": "assets/js/vendors~notification.89c1aec2.js",
    "revision": "d242677648598cc2bbfd97154c2616c4"
  },
  {
    "url": "guide/assets.html",
    "revision": "8912f3985826d2f0b165c279667d0149"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "224b9707b0366ef477fcbc0dd15c0231"
  },
  {
    "url": "guide/deploy.html",
    "revision": "1154abd9ed250a51dd9ec4c7e252354c"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "b4bc2c762bafa002cc7a7371a73d4b60"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "c2db0cb661c0a8087545017cef0170f2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "68b4e491564c6b0ba0297f280f506ed3"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "df6e203935cc5be22e96034ff696a784"
  },
  {
    "url": "guide/i18n.html",
    "revision": "31bb13a7eecde14e77c0e10a72b21331"
  },
  {
    "url": "guide/index.html",
    "revision": "3fa94f033d849d4e3a5dc292930b8cab"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "b7b90bb4d096194e9357ae8f3b961676"
  },
  {
    "url": "guide/markdown.html",
    "revision": "57b621c927199bc535eef222d394da05"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "c11e8e49802bd3760ff7f06c1d209d5c"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "424767e28bb3b27d5c7d167cd294b856"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "3abb53b88e2862a023ce9f3d26b9439a"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
