(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{493:function(e,t,r){"use strict";r(4),r(3),r(6),r(7);var n=r(0),o=(r(1),r(40),r(5),r(15),r(29),r(476),r(54),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(485),r(486),r(487),r(488),r(489),r(56),r(55),r(2),r(90),r(473),r(10)),c=r(136),l=r(8);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],v=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),j=O.reduce((function(e,t){return e["offset"+Object(l.t)(t)]={type:[String,Number],default:null},e}),{}),y=O.reduce((function(e,t){return e["order"+Object(l.t)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(j),order:Object.keys(y)};function h(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);if(!d){var O,v;for(v in d=[],m)m[v].forEach((function(e){var t=r[e],n=h(v,e,t);n&&d.push(n)}));var j=d.some((function(e){return e.startsWith("col-")}));d.push((O={col:!j||!r.cols},Object(n.a)(O,"col-".concat(r.cols),r.cols),Object(n.a)(O,"offset-".concat(r.offset),r.offset),Object(n.a)(O,"order-".concat(r.order),r.order),Object(n.a)(O,"align-self-".concat(r.alignSelf),r.alignSelf),O)),w.set(l,d)}return e(r.tag,Object(c.a)(data,{class:d}),o)}})},542:function(e,t,r){"use strict";r.r(t);var n=r(493),o=r(535),c={name:"InspirePage"},l=r(91),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t(o.a,[t(n.a,{staticClass:"text-center"},[t("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),e._v(" "),t("blockquote",{staticClass:"blockquote"},[e._v("\n      “First, solve the problem. Then, write the code.”\n      "),t("footer",[t("small",[t("em",[e._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);