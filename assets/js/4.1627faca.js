(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{409:function(t,c,r){},450:function(t,c,r){"use strict";r(409)},473:function(t,c,r){"use strict";r.r(c);var n=[[113.282417,23.112452],[113.282422,23.112878],[113.28279,23.113568],[113.283307,23.113864],[113.283307,23.113864],[113.283717,23.114324],[113.283913,23.114592],[113.283913,23.114592],[113.283913,23.114592],[113.28914,23.137385],[113.291526,23.137098],[113.29414,23.137017],[113.296902,23.137084],[113.24633,23.142696],[113.244502,23.14353],[113.251482,23.140548],[113.25275,23.140262],[113.254188,23.139822],[113.252869,23.140541],[113.250713,23.141234],[113.249815,23.141546],[113.25071,23.141067],[113.252108,23.140466]],a={name:"ex-cartrack",data:function(){return{center:[113.280637,23.125178],zoom:11,tracks:[]}},methods:{getData:function(){this.tracks=n},ctrlTrack:function(t){this.$refs.tdtCartrack[t](),"clear"===t&&(this.tracks=[])}}},e=(r(450),r(1)),o=Object(e.a)(a,(function(){var t=this,c=t.$createElement,r=t._self._c||c;return r("div",{staticClass:"mapDiv"},[r("tdt-map",{attrs:{center:t.center,zoom:t.zoom}},[r("tdt-cartrack",{ref:"tdtCartrack",attrs:{Datas:t.tracks,interval:5,speed:10}})],1),t._v(" "),r("button",{on:{click:t.getData}},[t._v("获取数据")]),t._v(" "),r("button",{on:{click:function(c){return t.ctrlTrack("start")}}},[t._v("开始")]),t._v(" "),r("button",{on:{click:function(c){return t.ctrlTrack("pause")}}},[t._v("暂停")]),t._v(" "),r("button",{on:{click:function(c){return t.ctrlTrack("stop")}}},[t._v("停止")]),t._v(" "),r("button",{on:{click:function(c){return t.ctrlTrack("clear")}}},[t._v("清空")])],1)}),[],!1,null,"46baa180",null);c.default=o.exports}}]);