(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{416:function(o,n,t){},459:function(o,n,t){"use strict";t(416)},480:function(o,n,t){"use strict";t.r(n);var e={name:"ex-control",data:function(){return{center:[113.280637,23.125178],zoom:11}},methods:{openTool:function(o){this.$refs.mousetool.open(o)},clearAll:function(){this.$refs.mousetool.clearAll()},polylineDraw:function(o){var n=o.currentDistance;alert(n)}}},l=(t(459),t(1)),c=Object(l.a)(e,(function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"mapDiv"},[t("tdt-map",{attrs:{center:o.center,zoom:o.zoom}},[t("tdt-mousetool",{ref:"mousetool",attrs:{markTool:{follow:!0},polygonTool:{showLabel:!0}},on:{"polyline-draw":o.polylineDraw}})],1),o._v(" "),t("button",{on:{click:function(n){return o.openTool("markTool")}}},[o._v("标点")]),o._v(" "),t("button",{on:{click:function(n){return o.openTool("polygonTool")}}},[o._v("测面")]),o._v(" "),t("button",{on:{click:function(n){return o.openTool("polylineTool")}}},[o._v("标线")]),o._v(" "),t("button",{on:{click:function(n){return o.openTool("rectangleTool")}}},[o._v("画矩形")]),o._v(" "),t("button",{on:{click:function(n){return o.openTool("circleTool")}}},[o._v("画圆")]),o._v(" "),t("button",{on:{click:function(n){return o.clearAll()}}},[o._v("清空")])],1)}),[],!1,null,"61dcf39e",null);n.default=c.exports}}]);