webpackJsonp([1],{NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"lightbox"},[s("font-awesome-icon",{staticClass:"fa-times-circle",attrs:{icon:"times-circle",size:"3x"},on:{click:this.$parent.hideLbx}}),this._v(" "),s("font-awesome-icon",{staticClass:"fa-angle-left",attrs:{icon:"angle-left",size:"3x"},on:{click:this.$parent.showPrev}}),this._v(" "),s("font-awesome-icon",{staticClass:"fa-angle-right",attrs:{icon:"angle-right",size:"3x"},on:{click:this.$parent.showNext}}),this._v(" "),s("img",{staticClass:"lbxImg",attrs:{src:this.$parent.src}})],1)},staticRenderFns:[]},n={name:"Gallery",components:{Lightbox:i("VU/8")({name:"Lightbox"},r,!1,null,null,null).exports},data:function(){return{isVisible:!1,src:"",nextSrc:"",prevSrc:"",currentSrc:"",gallery:[{src:"../../static/flamingo.jpg"},{src:"../../static/tree.jpg"},{src:"../../static/flowers.jpg"},{src:"../../static/tram.jpg"},{src:"../../static/tianjin.jpg"},{src:"../../static/lichterkette.jpg"},{src:"../../static/snowy.jpg"},{src:"../../static/finland.jpg"},{src:"../../static/candy.jpg"},{src:"../../static/stanserhorn.jpg"},{src:"../../static/stones.jpg"},{src:"../../static/mallow.jpg"},{src:"../../static/pumpkin.jpg"},{src:"../../static/woods.jpg"},{src:"../../static/maple.jpg"},{src:"../../static/nature.jpg"},{src:"../../static/balloon.jpg"},{src:"../../static/yosemite.jpg"},{src:"../../static/path.jpg"},{src:"../../static/northernlights.jpg"}]}},methods:{showLbx:function(t){this.isVisible=!0,this.src=t.target.src,this.nextSrc=t.target,this.prevSrc=t.target,document.body.style.overflow="hidden",console.log(t.target)},hideLbx:function(){this.isVisible=!1,document.body.style.overflow="auto"},showNext:function(){null!==this.nextSrc.nextSibling&&"IMG"===this.nextSrc.nextSibling.tagName&&(this.src=this.nextSrc.nextSibling.src,this.nextSrc=this.nextSrc.nextSibling,this.prevSrc=this.nextSrc)},showPrev:function(){null!==this.prevSrc.previousSibling&&(this.src=this.prevSrc.previousSibling.src,this.prevSrc=this.prevSrc.previousSibling,this.nextSrc=this.prevSrc)}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"gallery"},[t._l(t.gallery,function(s){return i("img",{staticClass:"thumbnail",attrs:{src:s.src},on:{click:t.showLbx}})}),t._v(" "),i("Lightbox",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}]})],2)},staticRenderFns:[]},a={name:"App",components:{Gallery:i("VU/8")(n,c,!1,null,null,null).exports}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"grid",attrs:{id:"app"}},[s("Gallery")],1)},staticRenderFns:[]};var o=i("VU/8")(a,l,!1,function(t){i("bnwI")},null,null).exports,p=i("C/JF"),h=i("fhbW"),g=i("U0v6");p.library.add(h.b,h.a,h.c),e.a.component("font-awesome-icon",g.FontAwesomeIcon),e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:o},template:"<App/>"})},bnwI:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.69ef4ee1157730e50299.js.map