(function(t){function n(n){for(var i,a,r=n[0],c=n[1],u=n[2],p=0,h=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(h.length)h.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(i=!1)}i&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},s={app:0},o=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/tictactoe-vue2/doct/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"204d":function(t,n,e){t.exports=e.p+"media/20220331_220315.b879c750.mp4"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"rows"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.ishome,expression:"!ishome"}],staticClass:"home"},[i("div",[i("button",{staticClass:"butt",on:{click:function(n){t.ishome=!0}}},[t._v("不用看教程立刻开始")]),i("video",{attrs:{src:e("204d"),autoplay:""}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.ishome,expression:"ishome"}],staticClass:"rows"},[i("div",{staticClass:"nn"},[t._v("第"+t._s(t.n)+"手")]),0===t.n?i("div",{staticClass:" s"},[t._v("点击空格下棋")]):t._e(),t._l(t.indexs,(function(n,e){return i("div",{key:n},[i("Row",{attrs:{n:t.n},on:{click:function(n){return t.nam(e,n)}}})],1)})),t.overs?i("div",{staticClass:"over"},[t._v(t._s(t.overs)+" "),i("button",{on:{click:t.again}},[t._v("再来一次")])]):t._e(),0!=t.n?i("div",{staticClass:"anew",on:{click:t.again}},[t._v("重新开始")]):t._e(),i("div",{staticClass:"but",on:{click:function(n){t.ishome=!1}}},[t._v("我要看教程")])],2)])},o=[],a=(e("d81d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row",on:{click:t.num}},[t.isxo?[t._v(t._s(t.xo))]:t._e()],2)])}),r=[],c={name:"Row",props:["n"],data:function(){return{xo:"",isxo:!1}},methods:{num:function(){""===this.xo&&(this.isxo=!0,this.n%2!==0?this.xo="O":this.xo="X",this.$emit("click",this.xo))}}},u=c,l=(e("64f0"),e("2877")),p=Object(l["a"])(u,a,r,!1,null,"543c64c0",null),h=p.exports,f={name:"App",components:{Row:h},data:function(){return{ishome:!1,overs:null,n:0,indexs:[1,2,3,4,5,6,7,8,9],map:[[null,null,null],[null,null,null],[null,null,null]]}},methods:{again:function(){location.reload(),this.ishome=!0},nam:function(t,n){this.n++,this.map[Math.floor(t/3)][t%3]=n;for(var e=0;e<3;e++)null!==this.map[e][0]&&this.map[e][0]===this.map[e][1]&&this.map[e][1]===this.map[e][2]?this.overs="".concat(this.map[e][0],"赢了"):null!==this.map[0][e]&&this.map[0][e]===this.map[1][e]&&this.map[1][e]===this.map[2][e]?this.overs="".concat(this.map[0][e],"赢了"):null!==this.map[0][0]&&this.map[0][0]===this.map[1][1]&&this.map[1][1]===this.map[2][2]?this.overs="".concat(this.map[0][0],"赢了"):null!==this.map[0][2]&&this.map[0][2]===this.map[1][1]&&this.map[1][1]===this.map[2][0]&&(this.overs="".concat(this.map[e][0],"赢了"))}}},m=f,v=(e("034f"),Object(l["a"])(m,s,o,!1,null,null,null)),d=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(d)}}).$mount("#app")},"64f0":function(t,n,e){"use strict";e("d2f2")},"85ec":function(t,n,e){},d2f2:function(t,n,e){}});
//# sourceMappingURL=app.811d2d0b.js.map