(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{253:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("15564852",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";r.r(e);var n={props:{kind:{type:String,default:function(){return"design"}},items:{type:Array,default:function(){return[]}}}},o=(r(257),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex flex-wrap"},t._l(t.items,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 image-card"},[r("NuxtLink",{staticClass:"flex image",attrs:{to:{name:t.kind+"-gallery-slug",params:{slug:e.slug}}}},[r("div",{staticClass:"image-wrapper"},[e.imgs?r("img",{staticClass:"w-full h-full object-cover",attrs:{src:e.imgs[0]}}):t._e(),t._v(" "),r("p",{staticClass:"image-title pl-2 text-3xl"},[t._v("\n          "+t._s(e.title)+"\n          "),r("span",{staticClass:"image-desc text-lg"},[t._v(t._s(e.description))])])])])],1)})),0)}),[],!1,null,"68f0e319",null);e.default=component.exports},257:function(t,e,r){"use strict";r(253)},258:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),n.push([t.i,'.page-enter-active[data-v-68f0e319],.page-leave-active[data-v-68f0e319]{transition:opacity .2s}.page-enter[data-v-68f0e319],.page-leave-to[data-v-68f0e319]{opacity:0}.image-wrapper[data-v-68f0e319]{position:relative}.image[data-v-68f0e319],.image-wrapper[data-v-68f0e319]{width:100%;height:100%}.image-card[data-v-68f0e319]{padding:10px}.image-card:hover .image-desc[data-v-68f0e319],.image-card:hover .image-title[data-v-68f0e319]{visibility:visible;opacity:1}.image-card:hover .image-wrapper img[data-v-68f0e319]{filter:brightness(.6);transition:.3s ease-in-out}.image-title[data-v-68f0e319]{top:0;background:rgba(215,25,32,.25);text-shadow:1px 1px #000;font-family:"Roboto Slab",sans-serif}.image-desc[data-v-68f0e319],.image-title[data-v-68f0e319]{position:absolute;bottom:0;left:0;right:0;visibility:hidden;color:#fff;opacity:0;transition:opacity .2s,visibility .2s}.image-desc[data-v-68f0e319]{padding-left:5px;padding-bottom:5px;font-family:"Roboto",sans-serif}',""]),t.exports=n},262:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("5bec31cb",content,!0,{sourceMap:!1})},268:function(t,e,r){"use strict";r(262)},269:function(t,e,r){var n=r(10)(!1);n.push([t.i,".page-enter-active[data-v-61aa2809],.page-leave-active[data-v-61aa2809]{transition:opacity .2s}.page-enter[data-v-61aa2809],.page-leave-to[data-v-61aa2809]{opacity:0}.design[data-v-61aa2809]{padding:0 10px}",""]),t.exports=n},290:function(t,e,r){"use strict";r.r(e);r(35);var n=r(5),o={components:{Gallery:r(255).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("items",n.slug).only(["title","description","createdAt","imgs","slug"]).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{items:o});case 5:case"end":return e.stop()}}),e)})))()}},l=(r(268),r(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"design"},[r("Gallery",{attrs:{items:t.items}})],1)}),[],!1,null,"61aa2809",null);e.default=component.exports;installComponents(component,{Gallery:r(255).default})}}]);