(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{246:function(t,e,r){var content=r(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("38ac221c",content,!0,{sourceMap:!1})},249:function(t,e,r){"use strict";r(246)},250:function(t,e,r){var n=r(15)(!1);n.push([t.i,".page-enter-active[data-v-51cc5736],.page-leave-active[data-v-51cc5736]{transition:opacity .2s}.page-enter[data-v-51cc5736],.page-leave-to[data-v-51cc5736]{opacity:0}.carousel[data-v-51cc5736]{margin:0 10px;width:600px}",""]),t.exports=n},252:function(t,e,r){"use strict";r.r(e);var n={layout:"default",props:{primary:{type:String,default:""},images:{type:Array,default:function(){return[]}}},data:function(){return{options:{rewind:!0,focus:"center",trimSpace:!1}}}},c=(r(249),r(8)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carousel"},[r("splide",{attrs:{options:t.options}},[r("splide-slide",[r("img",{attrs:{src:t.images[0]}})]),t._v(" "),r("splide-slide",[r("img",{attrs:{src:t.images[1]}})]),t._v(" "),r("splide-slide",[r("img",{attrs:{src:t.images[2]}})])],1)],1)}),[],!1,null,"51cc5736",null);e.default=component.exports},254:function(t,e,r){var content=r(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("c5ac1754",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";r(254)},259:function(t,e,r){var n=r(15)(!1);n.push([t.i,'.page-enter-active[data-v-7597661c],.page-leave-active[data-v-7597661c]{transition:opacity .2s}.page-enter[data-v-7597661c],.page-leave-to[data-v-7597661c]{opacity:0}.design-gallery[data-v-7597661c]{display:flex;flex-direction:row}h1[data-v-7597661c]{font-family:"Roboto Slab",serif;font-size:20pt}h1[data-v-7597661c],p[data-v-7597661c]{margin-top:10px;margin-left:10px}p[data-v-7597661c]{font-size:14pt}',""]),t.exports=n},276:function(t,e,r){"use strict";r.r(e);r(35);var n=r(5),c={components:{Carousel:r(252).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("items",n.slug).fetch();case 3:return c=e.sent,o=c.imgs,l=c.img,e.abrupt("return",{item:c,primary:l,images:o});case 7:case"end":return e.stop()}}),e)})))()}},o=(r(258),r(8)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"design-gallery"},[r("Carousel",{attrs:{primary:t.primary,images:t.images}}),t._v(" "),r("h1",[t._v(t._s(t.item.title))]),t._v(" "),r("p",[t._v(t._s(t.item.description))])],1)}),[],!1,null,"7597661c",null);e.default=component.exports;installComponents(component,{Carousel:r(252).default})}}]);