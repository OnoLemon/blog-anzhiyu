if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const o=e=>s(e,n),d={module:{uri:n},exports:a,require:o};i[n]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"bb587996eadeed2e3f57e2f350d3b4f9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"db02a88a78da97ba9b431c8da4076ec8"},{url:"js/main.js",revision:"b4623e7d3597fc0cf1c8a6862a3eaf1a"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"fb5502e709dca5dac2f9311cde269df4"},{url:"anzhiyu/random.js",revision:"68b0877eac3f2d1747961c058d8a2e54"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"417b3fca2649b1e37740026a112825a7"},{url:"/",revision:"index-20230724083925424"},{url:"music/",revision:"music-20230724083925424"},{url:"about/",revision:"about-20230724083925424"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));