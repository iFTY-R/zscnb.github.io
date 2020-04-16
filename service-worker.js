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
    "url": "22.jpg",
    "revision": "55cd1d5d004353a18d5f5d533513545a"
  },
  {
    "url": "assets/css/0.styles.f4b31810.css",
    "revision": "e6f7cb11b85489784733d6b2e4c2696d"
  },
  {
    "url": "assets/img/1.94d74847.png",
    "revision": "94d748476ff3a8a524da9f1d8147df3f"
  },
  {
    "url": "assets/img/10.58fba363.png",
    "revision": "58fba363144861b98df8944fcc11239e"
  },
  {
    "url": "assets/img/11.f581e3bb.png",
    "revision": "f581e3bb6fd65c7ccea224edebe04c8c"
  },
  {
    "url": "assets/img/13.8c788342.png",
    "revision": "8c7883424c1ae136c7460c0aea02e4c7"
  },
  {
    "url": "assets/img/14.41830a2b.png",
    "revision": "41830a2b5fec86c38a8daf6983412c0b"
  },
  {
    "url": "assets/img/15.bc969a20.png",
    "revision": "bc969a207898e7dd6060593167e1f5b3"
  },
  {
    "url": "assets/img/16.fbba94ac.png",
    "revision": "fbba94ac4e47d540c2db6a14946b671d"
  },
  {
    "url": "assets/img/17.889e5917.png",
    "revision": "889e591790d162049a3d9622a7cbca0a"
  },
  {
    "url": "assets/img/18.d890616a.png",
    "revision": "d890616af54b2055e7e1cb3119fc49f6"
  },
  {
    "url": "assets/img/2.bc1fde6f.jpg",
    "revision": "bc1fde6f6e4be4692e5ef4966a1778e5"
  },
  {
    "url": "assets/img/20.e2de9bc8.png",
    "revision": "e2de9bc8e5cb1750db32c29ee84ad359"
  },
  {
    "url": "assets/img/21.47f2b028.png",
    "revision": "47f2b028198d70ed4ef04eb92fdefb56"
  },
  {
    "url": "assets/img/22.ecf1fd8e.png",
    "revision": "ecf1fd8e9dd4fe8aa0ee585f5007b6d3"
  },
  {
    "url": "assets/img/23.633a0418.png",
    "revision": "633a0418111f87eff99ab82e150b7d6a"
  },
  {
    "url": "assets/img/24.bfe26031.png",
    "revision": "bfe26031ab785161b1d58f6cf9927aaa"
  },
  {
    "url": "assets/img/26.8ae8e20c.png",
    "revision": "8ae8e20ccf065abb11a4416066f0c00f"
  },
  {
    "url": "assets/img/3.b1d98978.png",
    "revision": "b1d9897889e22ba63030a4c77220d8ad"
  },
  {
    "url": "assets/img/6.152389d1.png",
    "revision": "152389d1ce866aad1c6caf4292e6ec59"
  },
  {
    "url": "assets/img/6.e21624b3.jpg",
    "revision": "e21624b3ca734f63cea01d7457229e68"
  },
  {
    "url": "assets/img/7.e469247d.jpg",
    "revision": "e469247db52f577a8ff7203bb29a66b5"
  },
  {
    "url": "assets/img/8.5a3d2c85.png",
    "revision": "5a3d2c8568851169e460d18b385dcaad"
  },
  {
    "url": "assets/img/8.9ad028b5.png",
    "revision": "9ad028b5439a486adfe35e66db91d791"
  },
  {
    "url": "assets/img/9.01c53e69.jpg",
    "revision": "01c53e6934602313c2eba1e6e700f873"
  },
  {
    "url": "assets/img/9.086e934b.png",
    "revision": "086e934bb97891c180c1f05f0d4e8217"
  },
  {
    "url": "assets/img/bushu.7d8ab006.png",
    "revision": "7d8ab006a2d68c68f588166e972f7b37"
  },
  {
    "url": "assets/img/core.e2f46c1b.png",
    "revision": "e2f46c1b31c1a2d9582d76e0c2999f80"
  },
  {
    "url": "assets/img/default.081119b7.png",
    "revision": "081119b755f2691b4d949a8f2708c9b3"
  },
  {
    "url": "assets/img/flowers.1cc9f5d5.gif",
    "revision": "1cc9f5d556d81b6b82b0906eae845962"
  },
  {
    "url": "assets/img/git.ed1b27e2.png",
    "revision": "ed1b27e2436975c5e100187d353dceb7"
  },
  {
    "url": "assets/img/github-settings-pages.d74634f5.png",
    "revision": "d74634f5ea1a771f0dcbf6996c959bd7"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.64e93583.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "assets/img/knapsacks.22c4f19e.png",
    "revision": "22c4f19e2a23f2ad51f2ef1d62067d8e"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/log.21d903cb.png",
    "revision": "21d903cb410d4267131ca273e3e849b2"
  },
  {
    "url": "assets/img/new_us.2d9e091d.png",
    "revision": "2d9e091d43fbd1e4009c425163e1e4a6"
  },
  {
    "url": "assets/img/new.d0fd418c.png",
    "revision": "d0fd418ce5a764c7814ad69696862657"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/qq.8fe55783.png",
    "revision": "8fe5578315a3f824f49256fd3922bf88"
  },
  {
    "url": "assets/img/resend.c5b493be.png",
    "revision": "c5b493becde3617241e3b6c5dd635034"
  },
  {
    "url": "assets/img/self_work.c28ec026.png",
    "revision": "c28ec026880fc6cee275dd944266eb89"
  },
  {
    "url": "assets/img/setLogin.8b86a266.png",
    "revision": "8b86a266c09a9ed34c5bf0043b96307a"
  },
  {
    "url": "assets/img/setRule.59a883c3.png",
    "revision": "59a883c3d75dceb6170e80ed43dccf26"
  },
  {
    "url": "assets/img/vue.0f9a2334.png",
    "revision": "0f9a23344c7aa041bbb67e226686b510"
  },
  {
    "url": "assets/img/zsc.c864f25c.jpg",
    "revision": "c864f25c419ea7cb866992433b4266ad"
  },
  {
    "url": "assets/img/zz.bc42335a.jpg",
    "revision": "bc42335afc194096d5a0fe429ba9c486"
  },
  {
    "url": "assets/js/1.b62c7ef6.js",
    "revision": "def0229a68d35fbe6f2b1ab954be7cf9"
  },
  {
    "url": "assets/js/10.d68f2f86.js",
    "revision": "04ccc51369ff9baeda5bd532d375ea33"
  },
  {
    "url": "assets/js/11.7bb3f001.js",
    "revision": "c5d86cfed6891004cd6bc46ee66b3d3f"
  },
  {
    "url": "assets/js/12.9d9d4b4c.js",
    "revision": "ee0d8b3d4ae22962930410d32c3f848a"
  },
  {
    "url": "assets/js/13.db033e25.js",
    "revision": "3a62d0b6e419492453d6cb720dd3b06a"
  },
  {
    "url": "assets/js/14.cae82560.js",
    "revision": "27e1505ee3b9ff28f78b5af13f71c8a1"
  },
  {
    "url": "assets/js/15.3ddd39d6.js",
    "revision": "207e3e4d6bf77e18c889ced4146a565e"
  },
  {
    "url": "assets/js/16.b5bcb08e.js",
    "revision": "6523efbe1b0f097a9127c3ecceadcb07"
  },
  {
    "url": "assets/js/17.8d9e86a5.js",
    "revision": "71582e3d4c77e5027ec407e0c9392271"
  },
  {
    "url": "assets/js/18.347bfc28.js",
    "revision": "4f702577f68529758f31f3eec47521df"
  },
  {
    "url": "assets/js/19.82932f7e.js",
    "revision": "5f5af70d1b34c8f46fbec3d050e4c631"
  },
  {
    "url": "assets/js/2.05d99df9.js",
    "revision": "b0609d05bd8b527695d8ed05344da0ac"
  },
  {
    "url": "assets/js/20.86c28ec6.js",
    "revision": "420d74984b6d159f0190e2c333c0c58b"
  },
  {
    "url": "assets/js/21.d4789aa7.js",
    "revision": "d11ca0a661ce9312d906eb1bebbf4694"
  },
  {
    "url": "assets/js/22.296a79da.js",
    "revision": "58d4537faaf2aa2d2137ea19a12314fa"
  },
  {
    "url": "assets/js/23.3fe3c53c.js",
    "revision": "449dcd86301c76204586ce204cd07c99"
  },
  {
    "url": "assets/js/24.cff91ccc.js",
    "revision": "f7a367a1a7d02de3d0145514ff05c2c6"
  },
  {
    "url": "assets/js/25.282359a2.js",
    "revision": "970f9258e72788ac4cd5f2e1653bf8d3"
  },
  {
    "url": "assets/js/26.80c736cc.js",
    "revision": "6e5f18ce943202a42cd736f1f88608d4"
  },
  {
    "url": "assets/js/27.c425039e.js",
    "revision": "c49073cef7cd510910af4ce81d44a140"
  },
  {
    "url": "assets/js/28.1c0d40cd.js",
    "revision": "7918504c8d264a67e08e67591a45a339"
  },
  {
    "url": "assets/js/29.ff33a579.js",
    "revision": "95bd23a3ab576f5b84025ce71ecbe090"
  },
  {
    "url": "assets/js/30.af5eff60.js",
    "revision": "fb1cfa4271644eb0b31660a6e6b5d6e9"
  },
  {
    "url": "assets/js/31.2acdb40f.js",
    "revision": "d0fb37bd2f0902d6cfe27cf8d2427ab3"
  },
  {
    "url": "assets/js/32.17199c0e.js",
    "revision": "1a3f58e2af32b1a66c4945a657c746fa"
  },
  {
    "url": "assets/js/33.5af066a9.js",
    "revision": "6252a0da026c43df4da49c9e5a960d85"
  },
  {
    "url": "assets/js/34.f1f23506.js",
    "revision": "d358ae7059047bfe09db63a2a817a325"
  },
  {
    "url": "assets/js/35.e4e3b74c.js",
    "revision": "74f591c4ba9d29177b7bf290abcd2e71"
  },
  {
    "url": "assets/js/36.d481f3e3.js",
    "revision": "aa058bb6abdc52aa7e370b94729d1a94"
  },
  {
    "url": "assets/js/37.e59c5c7d.js",
    "revision": "f98f48667bc54e820f4278729fcc57a9"
  },
  {
    "url": "assets/js/38.d46b2403.js",
    "revision": "21be4ac7406f50c9c95d56f8a01831ed"
  },
  {
    "url": "assets/js/39.33e288e8.js",
    "revision": "bdbe43e6bb21ef571c1eb85df28c2360"
  },
  {
    "url": "assets/js/40.d66a3bb1.js",
    "revision": "acc3055b84d9e338cd6b9267b4cca2b1"
  },
  {
    "url": "assets/js/41.c1397c6d.js",
    "revision": "b124666c772ba72c582ce9a1f8a1bea7"
  },
  {
    "url": "assets/js/42.d54e5723.js",
    "revision": "3be9bae64ae9b01d18f4360023d751f6"
  },
  {
    "url": "assets/js/43.034fd430.js",
    "revision": "9dc1afc49607097f0dc40853f999b222"
  },
  {
    "url": "assets/js/44.27ef2a54.js",
    "revision": "9e65748c3bdc2c12f416b1cb767d5cf7"
  },
  {
    "url": "assets/js/45.dc4b8ad3.js",
    "revision": "1a5987493e2001726f2fd54f60d77001"
  },
  {
    "url": "assets/js/46.86bbfa55.js",
    "revision": "078991b39ec3774ec88d374884437cf5"
  },
  {
    "url": "assets/js/47.673794ed.js",
    "revision": "5f23b741251ab0e09d49e6027ceb6110"
  },
  {
    "url": "assets/js/48.2fc7858b.js",
    "revision": "433779037707e96eaf69dc89f99ad995"
  },
  {
    "url": "assets/js/49.a21764cd.js",
    "revision": "3ac41db22fc4c2b3d8ee8faed172c60f"
  },
  {
    "url": "assets/js/5.bb962056.js",
    "revision": "62ea556269df4730a2a0427c29e6d24d"
  },
  {
    "url": "assets/js/50.18fc05a7.js",
    "revision": "18753d0f43acd8f79d7a9d3738f96eb5"
  },
  {
    "url": "assets/js/51.59293242.js",
    "revision": "2e4efb4ec007e6393753c959a28a3647"
  },
  {
    "url": "assets/js/52.08786294.js",
    "revision": "48020e88b93ceaa9d4a7c7300cbda551"
  },
  {
    "url": "assets/js/53.caed1683.js",
    "revision": "78f426dde86bd5b48a7fdf477b563288"
  },
  {
    "url": "assets/js/54.5ed496a2.js",
    "revision": "ca4863bab89a63f6e6640083c08cd545"
  },
  {
    "url": "assets/js/55.55fba08a.js",
    "revision": "013d4f42c369173efb4240020e0445d3"
  },
  {
    "url": "assets/js/56.227908bc.js",
    "revision": "b823101d0057ec0137b20e360a4941b7"
  },
  {
    "url": "assets/js/57.62da922b.js",
    "revision": "dcaf3b566b752d651e9b8c6aae914941"
  },
  {
    "url": "assets/js/58.5d14dd99.js",
    "revision": "5fefb1f4b87f15da8690b6bb143810b8"
  },
  {
    "url": "assets/js/59.2d8dc912.js",
    "revision": "ff0ff2ed093b2bb851fdd4d4a8d4e887"
  },
  {
    "url": "assets/js/6.f248e8f8.js",
    "revision": "34dfabf7c7092009ba15b365f8993ba3"
  },
  {
    "url": "assets/js/60.1e01862c.js",
    "revision": "69cda183f6fe80368c9e68edcec72866"
  },
  {
    "url": "assets/js/61.572e79d7.js",
    "revision": "a513953b9526b0495566ab2b48be8a2a"
  },
  {
    "url": "assets/js/62.76d742a6.js",
    "revision": "a8005c01d3670895a5a3c14f10c344b0"
  },
  {
    "url": "assets/js/63.c7bc577f.js",
    "revision": "4e10e79e4a6db20b2075964fdc2ff988"
  },
  {
    "url": "assets/js/64.45bcf21d.js",
    "revision": "e0e2b060ab73b76ac4c875a0492f7f82"
  },
  {
    "url": "assets/js/65.6cccf69d.js",
    "revision": "884fc89caea51c2c6f392721a25eda61"
  },
  {
    "url": "assets/js/66.3c2a3756.js",
    "revision": "5c4f6309cd073f1014cfc53ff506d559"
  },
  {
    "url": "assets/js/67.ca65bb2d.js",
    "revision": "c5fca5f7c801d3bf006abb53c865047e"
  },
  {
    "url": "assets/js/68.75e4b392.js",
    "revision": "fefbffd48d997bbec4477d645b22f9f7"
  },
  {
    "url": "assets/js/69.5ae2ed7b.js",
    "revision": "7a91761588dcd28550d7485f369d76e9"
  },
  {
    "url": "assets/js/7.289c285c.js",
    "revision": "01c6c09aa2eee507dffd150f6294e439"
  },
  {
    "url": "assets/js/70.07f813c4.js",
    "revision": "eed1033307dabea24ae8b98a762e4c17"
  },
  {
    "url": "assets/js/71.84530ed2.js",
    "revision": "cd28763ef2d8786ecc5c7e4fc6d40e33"
  },
  {
    "url": "assets/js/72.de3f2cc5.js",
    "revision": "cb640769319d15c507027e7909e0b777"
  },
  {
    "url": "assets/js/73.d7bef855.js",
    "revision": "a45426a9647ba267490639a850661902"
  },
  {
    "url": "assets/js/74.17da9949.js",
    "revision": "9a499b9cf3610d36e7727e5cab7ec4d3"
  },
  {
    "url": "assets/js/75.057a783c.js",
    "revision": "7923a53353ba84aa985ab1e8db423c43"
  },
  {
    "url": "assets/js/76.28738a74.js",
    "revision": "e4ac314ab93628663a28b3f46c9bbab3"
  },
  {
    "url": "assets/js/77.55d529b9.js",
    "revision": "8f89c7c074e0fff4c12b9ea366442518"
  },
  {
    "url": "assets/js/78.37a61565.js",
    "revision": "d147014d5fb88d7b9f7e10d10169a8d8"
  },
  {
    "url": "assets/js/79.58227fb4.js",
    "revision": "a53c58901b1b6ab1c2d50815b6089d3a"
  },
  {
    "url": "assets/js/8.a23d3e7c.js",
    "revision": "3fb8871eed197061704dd30e1e2357e7"
  },
  {
    "url": "assets/js/9.d366bc68.js",
    "revision": "27e7d1a4af368192f3adb29aac724f8d"
  },
  {
    "url": "assets/js/app.6bc164f6.js",
    "revision": "6b68453b9c9901d9a8f7f55ba2b55497"
  },
  {
    "url": "assets/js/vendors~flowchart.f6b83f82.js",
    "revision": "8096d08a755c113a424be4ffeca20596"
  },
  {
    "url": "avatar.gif",
    "revision": "7dad9712ff4bf317dece7faadb71dc40"
  },
  {
    "url": "bg.png",
    "revision": "4c9b66b3ce8fbc8b722ab00c00ca36c8"
  },
  {
    "url": "bgm/father.png",
    "revision": "60787771b68508d93310494958d64a5c"
  },
  {
    "url": "bgm/fish.png",
    "revision": "d5b7cec0bf44373c8fd63c1375bd9790"
  },
  {
    "url": "bgm/ten.png",
    "revision": "41d0a4489017e126bdd3d12a8c08c183"
  },
  {
    "url": "blogImages/caijin.png",
    "revision": "84db6d3333b8a79af764de995e42c283"
  },
  {
    "url": "blogImages/zote.png",
    "revision": "1959d8fd06b599b7444f785000a99681"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "86ee07caa4e8b645942d1e89a6259fd0"
  },
  {
    "url": "categories/index.html",
    "revision": "aa82e74efb599c4c4c34cb8cef13e1d9"
  },
  {
    "url": "categories/杂集/index.html",
    "revision": "86809593709ebf9a9c8cc54ae555bd71"
  },
  {
    "url": "categories/杂集/page/2/index.html",
    "revision": "e6551b02f0383943358e9511bf6dd69d"
  },
  {
    "url": "comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "favicon.png",
    "revision": "050c81d82b386ad8747e4fc2d074974a"
  },
  {
    "url": "hero.png",
    "revision": "9a811530fbc6dd585239218fcaa706b4"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "624d0b966a43e1f89b43e53a3b8756d5"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e4f97a8e278e3c3bd356937e5018890c"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "45c67179ad46234ab3fdc2bf177162fb"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "79c3c4b734bf516e09f1cc4b306597b4"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "f1a26c16b25d881bc8f4b6de2db2f8b3"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "77cd549789f5bea5429edc2cd3711744"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "e7b85e6e9d3360528ab03d173e460e20"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "466208fd218b68d5e039596e696745ff"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e52da4aee1ebbcf1fbd8956431a6f182"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c0c293a15576cdaa867ccc291cbc1cf6"
  },
  {
    "url": "img/1.jpg",
    "revision": "7da82e266d52929efb51754589a15178"
  },
  {
    "url": "img/10.jpg",
    "revision": "dd0788ca1a37dd422136328824d62cb2"
  },
  {
    "url": "img/11.jpg",
    "revision": "4948bb47a16615e7718bc088e7d467ab"
  },
  {
    "url": "img/12.jpg",
    "revision": "576424636e2ac5ca0513af19f9d8a46b"
  },
  {
    "url": "img/2.jpg",
    "revision": "050875a3467250ca4ddc759f4a30fe04"
  },
  {
    "url": "img/3.jpg",
    "revision": "8e8007b1f9dc007758ee93b4aee6874f"
  },
  {
    "url": "img/4.jpg",
    "revision": "d1f2ad8f258037642df6a542da6d5113"
  },
  {
    "url": "img/5.jpg",
    "revision": "8ed9c07d27b986a7ff0fbfada7dd7723"
  },
  {
    "url": "img/6.jpg",
    "revision": "8df9ffbced5744d31a4f814bdd327479"
  },
  {
    "url": "img/7.jpg",
    "revision": "007a6822cf48596405cb860281baef88"
  },
  {
    "url": "img/8.jpg",
    "revision": "efd9c6ddc3b2a520fe49827e84a98242"
  },
  {
    "url": "img/9.jpg",
    "revision": "7b225a2d442c4360d39a8d964598d229"
  },
  {
    "url": "img/end.gif",
    "revision": "31573f1c2ff5e46eab991dde9e5da724"
  },
  {
    "url": "img/icon_slide_selected.png",
    "revision": "889f653c51fdf07beea3f6e3580d5f4d"
  },
  {
    "url": "img/me.jpg",
    "revision": "006a21b10ac4c1c998584b9a5bbe8101"
  },
  {
    "url": "img/monica1.jpg",
    "revision": "6c8f273fd4939a4a534a5502e5c60c32"
  },
  {
    "url": "img/monica2.jpg",
    "revision": "441c8a47d6cd8099921ac1a4b9906f93"
  },
  {
    "url": "img/monica4.jpg",
    "revision": "056a382a72925feb53859d14aa658816"
  },
  {
    "url": "img/monica5.jpg",
    "revision": "567123914713662cd0a6e8b0235579f4"
  },
  {
    "url": "index.html",
    "revision": "4d06788fd1ababf07b9614e157940547"
  },
  {
    "url": "js/addImg.js",
    "revision": "7d0d654188492b51edf3e2b2b3c533c8"
  },
  {
    "url": "js/canvas.js",
    "revision": "5e79a1522d67f8d9603c40b7e203ad9f"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "b1339ac2436e8df10dfcf88e80073df1"
  },
  {
    "url": "js/slider.js",
    "revision": "dab66adedba72127b57b260ec0a92652"
  },
  {
    "url": "logo.png",
    "revision": "a05aa467af1cb7c87b4341b842ada223"
  },
  {
    "url": "me.png",
    "revision": "ce94049f8b6a76da959f5d6d060ca5dc"
  },
  {
    "url": "tag/index.html",
    "revision": "e5dddb4bfad8aa1d5e4fb5cd43921ffc"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "151497bbf30eb4fcbc8bc21e0983d12e"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "52db13790c8ea96a78bf917a0ab5e6b9"
  },
  {
    "url": "tags/人生感悟/index.html",
    "revision": "7cb5a5481247d8beb0e2f26416ca3005"
  },
  {
    "url": "tags/人祸/index.html",
    "revision": "b2dd39e4aa237ee538c32048554b2229"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "86b186f913493ee2b74b1841f0beb22b"
  },
  {
    "url": "tags/反省/index.html",
    "revision": "0a156fb01a1f761f25780d98a355b58f"
  },
  {
    "url": "tags/味道/index.html",
    "revision": "6be8d2c6ae1e4f5aa92ba040988760db"
  },
  {
    "url": "tags/命运/index.html",
    "revision": "2e1e92b37d48d97e7b57458ab6f4807e"
  },
  {
    "url": "tags/基础/index.html",
    "revision": "56cd7824af191dc5653ad4352046576f"
  },
  {
    "url": "tags/天灾/index.html",
    "revision": "2ac72bb24bba06b37e31dd07d6a366bd"
  },
  {
    "url": "tags/失调/index.html",
    "revision": "2bb929d45c9917dd0c511e6064eaf187"
  },
  {
    "url": "tags/奈何天运/index.html",
    "revision": "17e2a22f42417fd0ab368ee787bec73d"
  },
  {
    "url": "tags/奉献/index.html",
    "revision": "3c68bcc6efbf30b57859809a88fd2220"
  },
  {
    "url": "tags/必会/index.html",
    "revision": "ffeca2e66fe0b2e0fb46a32ea8cc9e1a"
  },
  {
    "url": "tags/快乐/index.html",
    "revision": "b74a433ce26650bfce37cad488d8efed"
  },
  {
    "url": "tags/思悟/index.html",
    "revision": "0a2c4ea550742bcfbe7926c89b04dd61"
  },
  {
    "url": "tags/恸哭/index.html",
    "revision": "5ba4a79092f0a359c7cd36b91f1a22ca"
  },
  {
    "url": "tags/感动/index.html",
    "revision": "cf8a46f018dc957e426af525adabcd58"
  },
  {
    "url": "tags/承诺/index.html",
    "revision": "869f4014979a81a6f7ed5eec9fd6e288"
  },
  {
    "url": "tags/技能/index.html",
    "revision": "a04a65e37041c93521bf7f0466b88201"
  },
  {
    "url": "tags/无助/index.html",
    "revision": "e73bd5c259ccb5fc37477b5e7f7010e0"
  },
  {
    "url": "tags/无奈/index.html",
    "revision": "bf5d07973164d46c6e9b1648aa811d4e"
  },
  {
    "url": "tags/无私/index.html",
    "revision": "ee72665838a238c39a3c32627b1f7819"
  },
  {
    "url": "tags/比例/index.html",
    "revision": "fa52d5e97b3df55d86e1b27faa0538c5"
  },
  {
    "url": "tags/热情/index.html",
    "revision": "862c3693b17fa5d9a2ea7a7aa4665d8e"
  },
  {
    "url": "tags/经历/index.html",
    "revision": "ba61a1cf46d2262fe8ab15ffae36d6fb"
  },
  {
    "url": "tags/美文/index.html",
    "revision": "47816de6ed4fdabaa9550dd2ba48f3c7"
  },
  {
    "url": "tags/耐心/index.html",
    "revision": "42664b4ce7727baa31791ae23f16d251"
  },
  {
    "url": "tags/茫然/index.html",
    "revision": "4afc4f7904800e27c06874675df1a3fb"
  },
  {
    "url": "tags/要命/index.html",
    "revision": "251a309419ff444470912ffda0378086"
  },
  {
    "url": "tags/邂逅/index.html",
    "revision": "f23312a10cfb8999452fae00f621193a"
  },
  {
    "url": "tags/重点/index.html",
    "revision": "53294bb3f3158e952b7a396a48c73fe3"
  },
  {
    "url": "tags/随性/index.html",
    "revision": "2c0f8aaa50b5d34e7553819ef14c434e"
  },
  {
    "url": "tags/难受/index.html",
    "revision": "b03fe8b5568b92fca68a1e9d3e6737d1"
  },
  {
    "url": "tags/难点/index.html",
    "revision": "2122e4d28767122585c16cc2d5f6ac0b"
  },
  {
    "url": "tags/默默承受/index.html",
    "revision": "b0f249ee003255386de34224ee53c44d"
  },
  {
    "url": "timeline/index.html",
    "revision": "cdbe74a93592b65dbd2608abd5818249"
  },
  {
    "url": "views/blog/3D-introduction.html",
    "revision": "7eb2f79ae4be3cefdbdebd472c65a82a"
  },
  {
    "url": "views/blog/algorithm.html",
    "revision": "d3abb4dc171c230294576cc0c3da2e55"
  },
  {
    "url": "views/blog/design-modes.html",
    "revision": "4824b9faee683f4c36dd1ceb40cc0b0d"
  },
  {
    "url": "views/blog/index.html",
    "revision": "88da37a46eb3e2a6f9e5da41f9223d17"
  },
  {
    "url": "views/blog/leetcode.html",
    "revision": "05329dd7aec4b77744960e598d101dd2"
  },
  {
    "url": "views/blog/Sao-operation.html",
    "revision": "6be212940e74ceac2e8b51e0cb3c3c2a"
  },
  {
    "url": "views/blog/Source-code.html",
    "revision": "555eabc726f8540e6686b8f5d7bca0d3"
  },
  {
    "url": "views/blog/vuestudy.html",
    "revision": "cf4337e15996fe1e1fca559d69cb9171"
  },
  {
    "url": "views/contact.html",
    "revision": "9d643f1c3d2861461bbfcaba389106d0"
  },
  {
    "url": "views/demo/index.html",
    "revision": "a1c0b4fed08a51ab8a2d4eef7bb86ab9"
  },
  {
    "url": "views/deploy.html",
    "revision": "59736c5a3891fea50ff5769a8adaf95e"
  },
  {
    "url": "views/develop.html",
    "revision": "77b501bcd34fa4e5bf5d1eb8a7ff05b5"
  },
  {
    "url": "views/domain.html",
    "revision": "d055daf6b6cda040c33c765e20e39030"
  },
  {
    "url": "views/donate.html",
    "revision": "dc3d793229d03761244ef28159670ee1"
  },
  {
    "url": "views/essay/2020.html",
    "revision": "eef704780e2b3cb63d4ab36b8d5ac46f"
  },
  {
    "url": "views/essay/alone.html",
    "revision": "253220140f995b424e818e9b00aa6105"
  },
  {
    "url": "views/essay/enjoy.html",
    "revision": "6c3ea5f54a304b1f79469d66d21920aa"
  },
  {
    "url": "views/essay/failToGet.html",
    "revision": "50da78a981c655b2a12bbac182fcf7f3"
  },
  {
    "url": "views/essay/flower.html",
    "revision": "fa019dccdd56c32444faf9a098436d6d"
  },
  {
    "url": "views/essay/long-distance.html",
    "revision": "9e0c0e7c5404fa811a14e594d43da449"
  },
  {
    "url": "views/essay/maleMany.html",
    "revision": "3cda3a6dbcee5847afc47c442a5b995c"
  },
  {
    "url": "views/essay/original.html",
    "revision": "c205fd7d3d9432098c2cf8cb5e809418"
  },
  {
    "url": "views/essay/passBy.html",
    "revision": "848adc301b9476398f3711c9e475b50f"
  },
  {
    "url": "views/essay/realize.html",
    "revision": "ead0d4fa7fdec3aa9c0ca025f32cbab1"
  },
  {
    "url": "views/essay/salute.html",
    "revision": "ea5e194c597890c1bc74da911ff74be3"
  },
  {
    "url": "views/essay/self-alone.html",
    "revision": "28ee923d6ef69da1935134fda990dd96"
  },
  {
    "url": "views/essay/self-aware.html",
    "revision": "87f57c6b5daef3896a50c4a2ba8f801d"
  },
  {
    "url": "views/essay/suffering.html",
    "revision": "109d4a071040e5ef8ecea50cf92fd084"
  },
  {
    "url": "views/essay/taste.html",
    "revision": "00b227d518061fea42f9b354ad968755"
  },
  {
    "url": "views/essay/toothache.html",
    "revision": "7b7e22347417ec697f9dbe28f3661814"
  },
  {
    "url": "views/essay/whoIs.html",
    "revision": "d0183ed087e7ae24b7f35dd5cda1c099"
  },
  {
    "url": "views/github-actions.html",
    "revision": "5c5da004d8e785ec9be26175da398e25"
  },
  {
    "url": "views/notice.html",
    "revision": "b4ff100c1250a7363b996ca590345609"
  },
  {
    "url": "views/project.html",
    "revision": "6632cdb62ecd8f8b71e3b1234f7634de"
  },
  {
    "url": "views/pull-request.html",
    "revision": "42653025a9d188c585b5d4f6de36e45e"
  },
  {
    "url": "views/sofeware/autocadUse.html",
    "revision": "97c92ed54c45e6282d8d8311db099a3f"
  },
  {
    "url": "views/sofeware/category.html",
    "revision": "a7594aff693b15a88c050c0d9f084ca8"
  },
  {
    "url": "views/sofeware/configJs.html",
    "revision": "11765fadc9c9c4c6e53bc3624b618db6"
  },
  {
    "url": "views/sofeware/excelFunction.html",
    "revision": "4a0df8edf5a4a2cdbb4f5b8165497691"
  },
  {
    "url": "views/sofeware/home.html",
    "revision": "a325dde393e3c17dc44d8bde7811575a"
  },
  {
    "url": "views/sofeware/index.html",
    "revision": "d6dc36e658a230c33d8e89b5ca530424"
  },
  {
    "url": "views/sofeware/password.html",
    "revision": "982e4b93f69270819851f7fec7d28003"
  },
  {
    "url": "views/sofeware/pptSkills.html",
    "revision": "e13d5e15ae8f8c8db12df8bd0689f4ae"
  },
  {
    "url": "views/sofeware/tag.html",
    "revision": "513566b76073565039b2ed6afe4716a1"
  },
  {
    "url": "views/sofeware/valine.html",
    "revision": "0890c16a706b8fed915de9027883f20b"
  },
  {
    "url": "views/sofeware/wordSkills.html",
    "revision": "f5150fdc989ed4feb11083c04f3bbd1f"
  },
  {
    "url": "views/theme-example.html",
    "revision": "e98f6465c83e4c6b69d23d8e462bdc9b"
  },
  {
    "url": "views/todoList.html",
    "revision": "9eec1238f343ca0aac283ad43ebe2316"
  },
  {
    "url": "views/valine-admin.html",
    "revision": "c2b063b6a2bfbad387fe25e8bdbd0fd5"
  },
  {
    "url": "wxf.png",
    "revision": "492f6faeb66bf13a8c5a28e5e424c799"
  },
  {
    "url": "zfb.png",
    "revision": "2b5c69611b24b209072632e90ce1d2eb"
  },
  {
    "url": "zsm.jpg",
    "revision": "9d4c0000788c3b3d5d2f7b1d1ae8647b"
  },
  {
    "url": "创世纪.jpg",
    "revision": "9b0cdb556e80ce76ae1b4bae3a681a8c"
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
