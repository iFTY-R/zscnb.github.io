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
    "url": "assets/css/0.styles.e3c7dc1a.css",
    "revision": "403ef4111cfb95dfc13856f600720ec9"
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
    "url": "assets/img/gzh.461267e1.jpg",
    "revision": "461267e1ba94e712e656d4e5d75ff168"
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
    "url": "assets/img/resend.c5b493be.png",
    "revision": "c5b493becde3617241e3b6c5dd635034"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
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
    "url": "assets/img/zz.bc42335a.jpg",
    "revision": "bc42335afc194096d5a0fe429ba9c486"
  },
  {
    "url": "assets/js/1.ab6c0229.js",
    "revision": "91eafa47f75a80f82f502c36df0a7fa6"
  },
  {
    "url": "assets/js/10.69bc1ec8.js",
    "revision": "b95c4eb6b4e405a75ec2222eee7b8689"
  },
  {
    "url": "assets/js/11.fcfb7d85.js",
    "revision": "e6cd8893745ca837fc935b32eb02cde3"
  },
  {
    "url": "assets/js/12.16cca752.js",
    "revision": "968dc028f4a9c64f744b33e4a88d659a"
  },
  {
    "url": "assets/js/13.3fcd55d1.js",
    "revision": "2c563d6d415842d6fe87d5d2a49beb21"
  },
  {
    "url": "assets/js/14.11e58187.js",
    "revision": "caf0b4cc3adc203b02e08ed22acf5b91"
  },
  {
    "url": "assets/js/15.9be98402.js",
    "revision": "19e0196462255b96c65be234d6982fe7"
  },
  {
    "url": "assets/js/16.c4b23601.js",
    "revision": "80df66bc9c9ea3b0838edef6a0a5187a"
  },
  {
    "url": "assets/js/17.1dcea34b.js",
    "revision": "576cef77359ee62852d96b9601016291"
  },
  {
    "url": "assets/js/18.cb6dc1c3.js",
    "revision": "b9b011a2c2acecc1699e7202f8895f68"
  },
  {
    "url": "assets/js/19.26f25f42.js",
    "revision": "d73902d23cc197a76cdea1df65ae256c"
  },
  {
    "url": "assets/js/2.f5d29499.js",
    "revision": "f3fb3545905b92c51fa25c2a38b0093e"
  },
  {
    "url": "assets/js/20.6f1e17ea.js",
    "revision": "e8f7a18b84716ae1d46efda9bae1d486"
  },
  {
    "url": "assets/js/21.f3258be9.js",
    "revision": "5dc3de6f83f67a76d902d6361ee151d5"
  },
  {
    "url": "assets/js/22.cdd3b9d6.js",
    "revision": "fbe053c5c3015e8189b15bf30b492741"
  },
  {
    "url": "assets/js/23.ea404649.js",
    "revision": "d810c630312866ad340f5392c59dd0a3"
  },
  {
    "url": "assets/js/24.a49363ab.js",
    "revision": "8a23d4c78f8155d695731c84aa04d866"
  },
  {
    "url": "assets/js/25.049f24e9.js",
    "revision": "2c0f5c94005455695282dc6f486aee62"
  },
  {
    "url": "assets/js/26.0cac77c4.js",
    "revision": "ef7bdc31f592bbd8695d38cbc8eee820"
  },
  {
    "url": "assets/js/27.1ddc9a29.js",
    "revision": "b8fb81abd26171db231d600378ffc954"
  },
  {
    "url": "assets/js/28.a46cafc7.js",
    "revision": "f9d94723332a2a9354a47b35e5289a38"
  },
  {
    "url": "assets/js/29.9bb02051.js",
    "revision": "8eaf3a47aa245cae0d6b1c1075ef59ff"
  },
  {
    "url": "assets/js/30.6c62dffc.js",
    "revision": "1b142b186981ad320773dfca3ed8a0e0"
  },
  {
    "url": "assets/js/31.29295730.js",
    "revision": "d7c2275bf947998b5289b8893e985dae"
  },
  {
    "url": "assets/js/32.bdf489e9.js",
    "revision": "8ab1b44035993045376810b3b81f1d24"
  },
  {
    "url": "assets/js/33.fe27ad1f.js",
    "revision": "d0d18851eb9cd54c5f4d9154b1ab7f7e"
  },
  {
    "url": "assets/js/34.95195a5f.js",
    "revision": "d8562f5d51736d5ae5b02caa75af3cd6"
  },
  {
    "url": "assets/js/35.b2c2606e.js",
    "revision": "2f36bcc1e839a96e474dab501ea0fcfb"
  },
  {
    "url": "assets/js/36.667e2246.js",
    "revision": "c957c370e69a3b3e859c42ffaee190e3"
  },
  {
    "url": "assets/js/37.9adf55f2.js",
    "revision": "f1d2dbe734daa6f72203ea4d65066acd"
  },
  {
    "url": "assets/js/38.20e44849.js",
    "revision": "5411e6fd3cdd7369bd8926cbf4daf7d6"
  },
  {
    "url": "assets/js/39.1f44da66.js",
    "revision": "9e6a1034a2d8e840c7a5721793b4cf23"
  },
  {
    "url": "assets/js/40.eb973104.js",
    "revision": "2479add2de8a4a69455364974e16e7f8"
  },
  {
    "url": "assets/js/41.d85ff337.js",
    "revision": "7d9c39cb652032029f4801da0ba43f9e"
  },
  {
    "url": "assets/js/42.a1cb60fb.js",
    "revision": "7c9410e51ee51c955d811493c1080aa1"
  },
  {
    "url": "assets/js/43.027808b3.js",
    "revision": "0bc2b0013417bab2b2b4cd66642aece9"
  },
  {
    "url": "assets/js/44.58a00757.js",
    "revision": "a262964fd8c6bc49ce675a2fe15f14a6"
  },
  {
    "url": "assets/js/45.12fbd315.js",
    "revision": "fc839fc383e15739485726833f525ef9"
  },
  {
    "url": "assets/js/46.f6494fcf.js",
    "revision": "4b748c8d51ed047b5a36f3ffbe6d7ffb"
  },
  {
    "url": "assets/js/47.ba0dfe2c.js",
    "revision": "f8ead6cb551e84a0b09ea76347691deb"
  },
  {
    "url": "assets/js/48.b0e4d9e0.js",
    "revision": "369f4ab15b23d0236c01f3cb8631d71d"
  },
  {
    "url": "assets/js/49.dc5a91bf.js",
    "revision": "5ccf97efc4599fc69a6a24f2ba071573"
  },
  {
    "url": "assets/js/5.28109a21.js",
    "revision": "09b92a84d6ef5fa57e786b8ee4548a3d"
  },
  {
    "url": "assets/js/50.258cda2d.js",
    "revision": "e148a1d16b849e8b8bae3ad9c3ba57db"
  },
  {
    "url": "assets/js/51.bd0fc129.js",
    "revision": "a6854c03a471af63b59f7741d3649a4a"
  },
  {
    "url": "assets/js/52.871b9648.js",
    "revision": "260dc817b4ec4d87733fee58f066f1b1"
  },
  {
    "url": "assets/js/53.46a4c94d.js",
    "revision": "cea5440b20f6cc2f864c0b33c7129dc9"
  },
  {
    "url": "assets/js/54.7e04cf73.js",
    "revision": "0dfea82f2137dce4aeadd5ca2df6bf9b"
  },
  {
    "url": "assets/js/55.4510805f.js",
    "revision": "d48da15c8fd405a52abbf838a3b1e498"
  },
  {
    "url": "assets/js/56.e0ce6443.js",
    "revision": "7d72520cafaa8691a38202ab11c1af62"
  },
  {
    "url": "assets/js/57.fd144893.js",
    "revision": "4cefdd0850dbb2a6e223cf1505b1bfaa"
  },
  {
    "url": "assets/js/58.2ea502f5.js",
    "revision": "e54abfe4e4f841520e4328aace90710f"
  },
  {
    "url": "assets/js/59.c77df24a.js",
    "revision": "539fd1342a51f949d32fba781416a83c"
  },
  {
    "url": "assets/js/6.f273c0f0.js",
    "revision": "700e7daa569331a3a21d8df856d76881"
  },
  {
    "url": "assets/js/60.881ffec3.js",
    "revision": "f7a85df06ca49a18b40af07444515373"
  },
  {
    "url": "assets/js/61.9d1afc76.js",
    "revision": "0fcbab69633be30fe7afa9c7b8269704"
  },
  {
    "url": "assets/js/62.07af5a9a.js",
    "revision": "e7785d7d56e7c46f9d6b2f335eed7398"
  },
  {
    "url": "assets/js/63.86487077.js",
    "revision": "7add3fb44d89826f4a8c1bd92e09851a"
  },
  {
    "url": "assets/js/64.d61ed370.js",
    "revision": "b820955b86c2795b2bdc1e091b940e22"
  },
  {
    "url": "assets/js/65.93a0ad67.js",
    "revision": "7871cb8b62dc8912c00dbc0df8cc0b9a"
  },
  {
    "url": "assets/js/66.25d3531f.js",
    "revision": "d6777a5bbd50ddcce588efc6aafe7a46"
  },
  {
    "url": "assets/js/67.8da2af5f.js",
    "revision": "1073227dc7d07574954cb5e1221ffa95"
  },
  {
    "url": "assets/js/68.b3fea158.js",
    "revision": "b7399ca3e892edb4505bf4458217d3e3"
  },
  {
    "url": "assets/js/69.330777e2.js",
    "revision": "f60aefd75cd50d6b58b15246fff220b3"
  },
  {
    "url": "assets/js/7.5443233d.js",
    "revision": "f65edb197460056e4400cf50fce8432e"
  },
  {
    "url": "assets/js/70.e52154fd.js",
    "revision": "048d80a112d4adaef9d2d2cb4a5c4db2"
  },
  {
    "url": "assets/js/71.fd1e8681.js",
    "revision": "959eaeb178c2daa4018c03a3afd2be54"
  },
  {
    "url": "assets/js/72.c5f3a67b.js",
    "revision": "458ab09089a22d078b177266a0d4aa29"
  },
  {
    "url": "assets/js/73.e8b90fdc.js",
    "revision": "4d12076d29df110abfb03b7d707ac4ad"
  },
  {
    "url": "assets/js/74.991fca51.js",
    "revision": "e9bf2d1b91956a11960799c956825bcb"
  },
  {
    "url": "assets/js/75.d1499c5b.js",
    "revision": "5fbebdde329977f3c964f092e2bbb7d2"
  },
  {
    "url": "assets/js/76.c59c6ee7.js",
    "revision": "e3cebe6624869818ac26b1d4b9d059fc"
  },
  {
    "url": "assets/js/77.a0db55cd.js",
    "revision": "fec47df903a73d3aa7ce2bc07e17c24a"
  },
  {
    "url": "assets/js/78.ee109b83.js",
    "revision": "32b52af5e293623558a4ff5949732e74"
  },
  {
    "url": "assets/js/79.da62294d.js",
    "revision": "da1989f8355825eaf5f65665bb06f594"
  },
  {
    "url": "assets/js/8.eec73949.js",
    "revision": "61c55554db16bb58d63772b5374586cd"
  },
  {
    "url": "assets/js/80.9c7c6afc.js",
    "revision": "dde4e5a9d80ba225cdea32a2a057513d"
  },
  {
    "url": "assets/js/81.939cb3fe.js",
    "revision": "451635efd4af9392bb235408714f37fb"
  },
  {
    "url": "assets/js/82.390f6cca.js",
    "revision": "fff7e3e8aa42e17bfa98e4fec5072430"
  },
  {
    "url": "assets/js/83.25f5685a.js",
    "revision": "1888880f9bbb0ac2fcf2a68ddefe1be5"
  },
  {
    "url": "assets/js/9.7b0de56e.js",
    "revision": "a1231a257d721af1858148d8a75cbea2"
  },
  {
    "url": "assets/js/app.678391f5.js",
    "revision": "9aa768ea5be17a9b8fb1c2635037795e"
  },
  {
    "url": "assets/js/vendors~flowchart.0153d39a.js",
    "revision": "4118a7b462de63542fe95988b68cc356"
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
    "url": "bgm/power.png",
    "revision": "a9b8cbac5ffb19f9354eb6e116b68c00"
  },
  {
    "url": "bgm/ten.png",
    "revision": "41d0a4489017e126bdd3d12a8c08c183"
  },
  {
    "url": "bgm/wish.png",
    "revision": "380833fbcb29afc6271d45965d6a1c49"
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
    "revision": "cc8d537ef7c70f2d23c5e09571e91faa"
  },
  {
    "url": "categories/index.html",
    "revision": "cdaf91eeed10665dd4e3e446276b6299"
  },
  {
    "url": "categories/杂集/index.html",
    "revision": "c0dd6f3198d1e8346732aa13001cc7ba"
  },
  {
    "url": "categories/杂集/page/2/index.html",
    "revision": "3964c764ada1e8f837f167b940db1502"
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
    "url": "img/IMG_7723.gif",
    "revision": "bb301b9b41520621ca33d47472b92cdf"
  },
  {
    "url": "img/me.jpg",
    "revision": "4dcd241c612a05047bc49dd76f105158"
  },
  {
    "url": "img/monica1.jpg",
    "revision": "d69240c97e2ca7157bdd844499d46dfc"
  },
  {
    "url": "img/monica2.jpg",
    "revision": "4128fa297e7188ef6e467c644e5130b1"
  },
  {
    "url": "img/monica4.jpg",
    "revision": "63d81c943ef7a632174c4dfb615cacf1"
  },
  {
    "url": "img/monica5.jpg",
    "revision": "8fc890f1d355dfc34f4c45ab9476c594"
  },
  {
    "url": "index.html",
    "revision": "3c03421fb36500bd3dad17509f2b1c86"
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
    "revision": "84085bd9c4dc65916699091a9364d087"
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
    "url": "tag/Github Actions/index.html",
    "revision": "8d5dc75115f3bbb4cb82ec806218d28b"
  },
  {
    "url": "tag/index.html",
    "revision": "78cd013a53656f72fe06907244385ddd"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "acc4078049e480c3575631fe59cb2498"
  },
  {
    "url": "tag/人生感悟/index.html",
    "revision": "fdb0a04d92d9bf27b2c822f742974e11"
  },
  {
    "url": "tag/人祸/index.html",
    "revision": "ffa1f65a858243952f16633c01344bff"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "155f3d6492bcf449da28a4c7ccee6992"
  },
  {
    "url": "tag/原创/index.html",
    "revision": "60208b0036e2f262edbe489fe18c7709"
  },
  {
    "url": "tag/反省/index.html",
    "revision": "8dcb347e63cc9c022df83a0de1e1ecd1"
  },
  {
    "url": "tag/味道/index.html",
    "revision": "1aaacce7a086f9abeb9a6b24a5884016"
  },
  {
    "url": "tag/命运/index.html",
    "revision": "d410629c4708f71e25005de4b018e876"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9dc8bfc8821ca15c6a9846ec8b633d28"
  },
  {
    "url": "tag/天灾/index.html",
    "revision": "5ebcd0bda558acd39d2af6a94a0ad87c"
  },
  {
    "url": "tag/失调/index.html",
    "revision": "f72a98d7eec9900317054d57b1bb5d29"
  },
  {
    "url": "tag/奈何天运/index.html",
    "revision": "a216de8e0487f3d3e8088e486e25ada1"
  },
  {
    "url": "tag/奉献/index.html",
    "revision": "c71762a0bffbbde3df36731b14068f5d"
  },
  {
    "url": "tag/必会/index.html",
    "revision": "3ae4ebaed3c24766e57ca0ad5e2f8b22"
  },
  {
    "url": "tag/快乐/index.html",
    "revision": "284be9d31880519f806ca1cdc4d5b5e0"
  },
  {
    "url": "tag/思悟/index.html",
    "revision": "b747b03a82250dabe14bde319fd0cb52"
  },
  {
    "url": "tag/恸哭/index.html",
    "revision": "73d9058ee09fb6c7236a2bd00d2ec787"
  },
  {
    "url": "tag/感动/index.html",
    "revision": "48d268bc972ed7ca7eeab1e5150f90a2"
  },
  {
    "url": "tag/承诺/index.html",
    "revision": "1487dd52f29e2cd13c9fc525834c1134"
  },
  {
    "url": "tag/技能/index.html",
    "revision": "46476742064687b15ea1adee9735e231"
  },
  {
    "url": "tag/无助/index.html",
    "revision": "4d31547c6cdb741d1ff00fb1c91ea0e3"
  },
  {
    "url": "tag/无奈/index.html",
    "revision": "55b67936e3bc03c06200469568bffd25"
  },
  {
    "url": "tag/无私/index.html",
    "revision": "4f6458a18c44dfe60e6afa52eaf334f4"
  },
  {
    "url": "tag/比例/index.html",
    "revision": "7183b42d877e8302cb8b47f23ea60e84"
  },
  {
    "url": "tag/热情/index.html",
    "revision": "3c4ef840a8a6abc2c11cd24b3e7e22e0"
  },
  {
    "url": "tag/经历/index.html",
    "revision": "a9a4df71d778bc20bac903240b80b62c"
  },
  {
    "url": "tag/美文/index.html",
    "revision": "f203e44e5353cb6ebdce1619cedbdef0"
  },
  {
    "url": "tag/耐心/index.html",
    "revision": "1b337c9437e7d8e0b521a5154ba2777e"
  },
  {
    "url": "tag/茫然/index.html",
    "revision": "a7e91bd8608758d20b0643290b862eda"
  },
  {
    "url": "tag/要命/index.html",
    "revision": "567660bfce42a06b5629f7600d9b6004"
  },
  {
    "url": "tag/邂逅/index.html",
    "revision": "0b6d38c9ff4cd621147ae8c71e4aca8c"
  },
  {
    "url": "tag/重点/index.html",
    "revision": "824c92516cdcf4772c727b0d48512380"
  },
  {
    "url": "tag/随性/index.html",
    "revision": "6cb003b9dae0c84bde99275fd5a2811b"
  },
  {
    "url": "tag/难受/index.html",
    "revision": "0523033fa51363f2d7387f283f53e134"
  },
  {
    "url": "tag/难点/index.html",
    "revision": "17a87a38519610d7fcdfb9adffd0c3cb"
  },
  {
    "url": "tag/默默承受/index.html",
    "revision": "6e5da658e021d2fd99b4af69a533f0e2"
  },
  {
    "url": "timeline/index.html",
    "revision": "cf12af5ea7f2c05fca379b463b60190f"
  },
  {
    "url": "views/blog/3D-introduction.html",
    "revision": "872caa53621612b6033bbd0c6445a8d0"
  },
  {
    "url": "views/blog/algorithm.html",
    "revision": "a9a47b4e92e323989aa6d43d0c306516"
  },
  {
    "url": "views/blog/design-modes.html",
    "revision": "2ede48ee5c57c80c9a162fd5291c81c9"
  },
  {
    "url": "views/blog/index.html",
    "revision": "77ba8782c74db2a88b0b9b9dfd261931"
  },
  {
    "url": "views/blog/leetcode.html",
    "revision": "5de8653700f62cbba3d13946dd2ec218"
  },
  {
    "url": "views/blog/Sao-operation.html",
    "revision": "7f9682c5b0ec3a9e78babd59c219b4dc"
  },
  {
    "url": "views/blog/Source-code.html",
    "revision": "eed5dde3475b3873d38be1f9e998ea2a"
  },
  {
    "url": "views/blog/vuestudy.html",
    "revision": "c35e55f357330bcd891b61611673a893"
  },
  {
    "url": "views/blog/vuex.html",
    "revision": "9fe8d31423fbe59ae21e691e2099d917"
  },
  {
    "url": "views/demo/index.html",
    "revision": "fb7f3f24845bb8092ca12ec3033a7945"
  },
  {
    "url": "views/deploy.html",
    "revision": "622ac83ca317498d1c50d6f0a399de24"
  },
  {
    "url": "views/develop.html",
    "revision": "c7310bf18387442d295967d95969ec8d"
  },
  {
    "url": "views/domain.html",
    "revision": "4f97c0182164e54557635e020e1ff6ae"
  },
  {
    "url": "views/donate.html",
    "revision": "a950325d2702d36b532d726ad5cfe822"
  },
  {
    "url": "views/essay/2020.html",
    "revision": "59241e44a6f3faf726c137c0634e867c"
  },
  {
    "url": "views/essay/alone.html",
    "revision": "1405a7438f9a4909f3a8d48eb4079e56"
  },
  {
    "url": "views/essay/enjoy.html",
    "revision": "32e3e583d242158dd385e9cd9943b155"
  },
  {
    "url": "views/essay/failToGet.html",
    "revision": "ad5ee05e672bdad3470d72371b76e863"
  },
  {
    "url": "views/essay/flower.html",
    "revision": "f2fa637fbbec5f244d72c4d5b22e6631"
  },
  {
    "url": "views/essay/long-distance.html",
    "revision": "11f8996302ccbc43c419e6490814d994"
  },
  {
    "url": "views/essay/maleMany.html",
    "revision": "4e1d10fc8f6db72841dfde6261978f92"
  },
  {
    "url": "views/essay/original.html",
    "revision": "df6f412ae8a284c6a4a22bc261bafabd"
  },
  {
    "url": "views/essay/passBy.html",
    "revision": "b0640d20c88afeb5bd4facfff541012c"
  },
  {
    "url": "views/essay/realize.html",
    "revision": "cb31d8d4c5bcb0d1b676d4b2208e1996"
  },
  {
    "url": "views/essay/salute.html",
    "revision": "1dbc6958db556c103a90a223ff7c3e3d"
  },
  {
    "url": "views/essay/self-alone.html",
    "revision": "2d7d8ff332206c40d195c23850390786"
  },
  {
    "url": "views/essay/self-aware.html",
    "revision": "fd918f301d9262a751ac514cb67468ca"
  },
  {
    "url": "views/essay/suffering.html",
    "revision": "8eb85947debc90c6a2af267f03fbae99"
  },
  {
    "url": "views/essay/taste.html",
    "revision": "f3d04ecedd43c53adb18d6cbae449add"
  },
  {
    "url": "views/essay/toothache.html",
    "revision": "296c7045b1a93714765c9e3dbebb451c"
  },
  {
    "url": "views/essay/whoIs.html",
    "revision": "88ec02b6658caaa8eb02a03805d7b5e4"
  },
  {
    "url": "views/github-actions.html",
    "revision": "e578e9d69e925f8281027837a9abdf70"
  },
  {
    "url": "views/index.html",
    "revision": "e665ae6a6846615c5819a118eb6939f6"
  },
  {
    "url": "views/notice.html",
    "revision": "33aa8babf26a194d3767fe479f92f89e"
  },
  {
    "url": "views/project.html",
    "revision": "0ee8d13498dd238e2c07d723a210fbcd"
  },
  {
    "url": "views/pull-request.html",
    "revision": "17cfcf3ac764113f539651efeb291e23"
  },
  {
    "url": "views/sofeware/autocadUse.html",
    "revision": "9da95547d37df82bca9678e9315474c7"
  },
  {
    "url": "views/sofeware/category.html",
    "revision": "f4bb454ef05016337dbcfe020ca19178"
  },
  {
    "url": "views/sofeware/configJs.html",
    "revision": "8f26ca97ac9ae6de6d88b4d7dc6acc11"
  },
  {
    "url": "views/sofeware/excelFunction.html",
    "revision": "3cb090021fb4200ae2f148cc509a4599"
  },
  {
    "url": "views/sofeware/home.html",
    "revision": "00a86926279b9c79865ebf2af2ea75b4"
  },
  {
    "url": "views/sofeware/index.html",
    "revision": "1fae7cc0e184992b7fd0e6632472018f"
  },
  {
    "url": "views/sofeware/password.html",
    "revision": "857552394e6aa8dbdf4e1c4f72c36850"
  },
  {
    "url": "views/sofeware/pptSkills.html",
    "revision": "f91e284065d2ed8aa0ed77eba3f8ae83"
  },
  {
    "url": "views/sofeware/tag.html",
    "revision": "7ed2f090a7537054c588e6952260381a"
  },
  {
    "url": "views/sofeware/valine.html",
    "revision": "6693cdf69d0237721b91dc092c11352b"
  },
  {
    "url": "views/sofeware/wordSkills.html",
    "revision": "daaad3c19e038cf1ead8ecdb170fc492"
  },
  {
    "url": "views/theme-example.html",
    "revision": "0ad3b98782ab9e9e475b13b156e05c53"
  },
  {
    "url": "views/todoList.html",
    "revision": "5be4e8e0b471b80502b29790f08e803a"
  },
  {
    "url": "views/valine-admin.html",
    "revision": "b0895d2ab744848357721eb5c33fd0dd"
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
