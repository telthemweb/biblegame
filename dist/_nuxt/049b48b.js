(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{491:function(t,e,r){"use strict";r(4),r(3),r(6),r(7);var n=r(0),o=(r(1),r(40),r(5),r(15),r(29),r(475),r(54),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(485),r(486),r(487),r(488),r(56),r(55),r(2),r(90),r(473),r(10)),l=r(136),c=r(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],y=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=d.reduce((function(t,e){return t["offset"+Object(c.t)(e)]={type:[String,Number],default:null},t}),{}),m=d.reduce((function(t,e){return t["order"+Object(c.t)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(y),offset:Object.keys(h),order:Object.keys(m)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var f in r)c+=String(r[f]);var v=_.get(c);if(!v){var d,y;for(y in v=[],O)O[y].forEach((function(t){var e=r[t],n=j(y,t,e);n&&v.push(n)}));var h=v.some((function(t){return t.startsWith("col-")}));v.push((d={col:!h||!r.cols},Object(n.a)(d,"col-".concat(r.cols),r.cols),Object(n.a)(d,"offset-".concat(r.offset),r.offset),Object(n.a)(d,"order-".concat(r.order),r.order),Object(n.a)(d,"align-self-".concat(r.alignSelf),r.alignSelf),d)),_.set(c,v)}return t(r.tag,Object(l.a)(data,{class:v}),o)}})},494:function(t,e,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("f85713f8",content,!0,{sourceMap:!1})},495:function(t,e,r){var n=r(35)((function(i){return i[1]}));n.push([t.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;bottom:0;display:flex;justify-content:center;left:0;pointer-events:none;position:fixed;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),n.locals={},t.exports=n},504:function(t,e,r){"use strict";var n=r(159),o=r(80),l=r(20),c=r(23);e.a=Object(l.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},505:function(t,e,r){"use strict";r(5),r(4),r(3),r(1),r(6),r(2),r(7);var n=r(0),o=(r(40),r(494),r(57)),l=r(50),c=r(80),f=r(20);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(f.a)(o.a,l.a,c.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},551:function(t,e,r){"use strict";r.r(e);var n=r(236),o=r(469),l=r(231),c=r(111),f=r(491),v=r(535),d=r(504),y=r(235),h=r(314),m=r(153),O=r(85),j=r(505),_=r(230),w=r(537),S=r(468),x={layout:"mainlayout",data:function(){return{overlay:!1}}},C=r(91),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e(v.a,[e(w.a,[e(f.a,[e(l.a,[e(c.b,{staticClass:"d-flex"},[e(o.a,{attrs:{text:"",to:"/"}},[t._v("Dashboard")]),t._v(" "),e(o.a,{attrs:{text:"",disabled:""}},[t._v("SMILEWEEKLY NEWS")]),t._v(" "),e(S.a)],1)],1)],1)],1),t._v(" "),e(w.a,{staticClass:"mt-5"},[e(f.a,{attrs:{cols:"12",sm:"4"}},[e(d.a,{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.hover;return[e(l.a,{attrs:{color:"cyan darken-1",elevation:c?16:2}},[e(w.a,{staticClass:"mb-4"},[e(f.a,{attrs:{cols:"12",sm:"8"}},[e(m.a,{attrs:{"three-line":""}},[e(O.a,[e("div",{staticClass:"mb-4"},[e(o.a,{attrs:{fab:"",color:"cyan lighten-2 float-right",elevation:"0"}},[e(y.a,{attrs:{color:"white"}},[t._v("mdi-wallet")])],1)],1),t._v(" "),e(O.c,{staticClass:"headline mb-1 white--text"},[t._v("\n                    BIBLE CHALLANGE NEWS\n                  ")]),t._v(" "),e(O.b,{staticClass:"white--text"})],1)],1)],1),t._v(" "),e(f.a,{attrs:{cols:"12",sm:"4"}},[e(n.a,{staticClass:"ml-n10 mt-6",attrs:{size:"100",tile:""}},[e(h.a,{attrs:{src:"wallet.png"}})],1)],1)],1)],1)]}}])})],1)],1),t._v(" "),e(j.a,{attrs:{value:t.overlay}},[e(_.a,{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);