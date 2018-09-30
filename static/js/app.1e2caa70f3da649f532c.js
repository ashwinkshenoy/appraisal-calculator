webpackJsonp([0],[,,,function(t,e,s){"use strict";e.a={name:"App"}},function(t,e,s){"use strict";e.a={name:"Home",data:function(){return{current:{ctc:0,var:0,bonus:0},newSal:{ctc:0,var:0,bonus:0}}},computed:{currentSum:function(){return this.current.ctc+this.current.var+this.current.bonus},newSum:function(){return this.newSal.ctc+this.newSal.var+this.newSal.bonus},currentCtcVarPercentage:function(){return this.current.var?(this.current.var/this.current.ctc*100).toFixed(2):0},newCtcVarPercentage:function(){return this.current.var?(this.newSal.var/this.newSal.ctc*100).toFixed(2):0},ctcTotalPercentage:function(){return this.current.ctc&&this.newSal.ctc?((this.newSal.ctc-this.current.ctc)/this.current.ctc*100).toFixed(2):0},varTotalPercentage:function(){return this.current.var&&this.newSal.var?((this.newSal.var-this.current.var)/this.current.var*100).toFixed(2):0},overallPercentage:function(){return this.currentSum&&this.newSum?((this.newSum-this.currentSum)/this.currentSum*100).toFixed(2):0}},mounted:function(){}}},function(t,e,s){"use strict";e.a={name:"NotFoundComponent",mounted:function(){document.documentElement.style.setProperty("--main-bg-color","#ffffff")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),r=s(10),a=s(14);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,components:{App:r.a},template:"<App/>"})},,,,function(t,e,s){"use strict";function i(t){s(11)}var r=s(3),a=s(13),n=s(1),c=i,l=n(r.a,a.a,!1,c,null,null);e.a=l.exports},function(t,e){},,function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,s){"use strict";var i=s(2),r=s(15),a=s(16),n=s(20);i.a.use(r.a),e.a=new r.a({mode:"hash",routes:[{path:"/",name:"Home",component:a.a},{path:"*",component:n.a}]})},,function(t,e,s){"use strict";function i(t){s(17)}var r=s(4),a=s(18),n=s(1),c=i,l=n(r.a,a.a,!1,c,null,null);e.a=l.exports},function(t,e){},function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"grid-row"},[s("div",{staticClass:"grid-col"},[s("div",{staticClass:"title2"},[t._v("Current Salary Structure")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(1),t._v(" "),s("div",{staticClass:"grid-col"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.current.ctc,expression:"current.ctc",modifiers:{number:!0}}],staticClass:"in-txt",attrs:{type:"number"},domProps:{value:t.current.ctc},on:{input:function(e){e.target.composing||t.$set(t.current,"ctc",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(2),t._v(" "),s("div",{staticClass:"grid-col"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.current.var,expression:"current.var",modifiers:{number:!0}}],staticClass:"in-txt",attrs:{type:"number"},domProps:{value:t.current.var},on:{input:function(e){e.target.composing||t.$set(t.current,"var",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(3),t._v(" "),s("div",{staticClass:"grid-col"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.current.bonus,expression:"current.bonus",modifiers:{number:!0}}],staticClass:"in-txt",attrs:{type:"number"},domProps:{value:t.current.bonus},on:{input:function(e){e.target.composing||t.$set(t.current,"bonus",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(4),t._v(" "),s("div",{staticClass:"grid-col"},[t._v("\n          ₹"+t._s(t.currentSum||0)+"\n        ")])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(5),t._v(" "),s("div",{staticClass:"grid-col"},[t._v("\n          "+t._s(t.currentCtcVarPercentage||0)+"%\n        ")])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(6),t._v(" "),s("div",{staticClass:"grid-col"},[t._v("\n          ₹"+t._s(t.current.ctc/12||0)+"\n        ")])])]),t._v(" "),s("div",{staticClass:"grid-col"},[s("div",{staticClass:"title2"},[t._v("New Salary Structure")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(7),t._v(" "),s("div",{staticClass:"grid-col"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newSal.ctc,expression:"newSal.ctc",modifiers:{number:!0}}],staticClass:"in-txt",attrs:{type:"text"},domProps:{value:t.newSal.ctc},on:{input:function(e){e.target.composing||t.$set(t.newSal,"ctc",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(8),t._v(" "),s("div",{staticClass:"grid-col"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newSal.var,expression:"newSal.var",modifiers:{number:!0}}],staticClass:"in-txt",attrs:{type:"text"},domProps:{value:t.newSal.var},on:{input:function(e){e.target.composing||t.$set(t.newSal,"var",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(9),t._v(" "),s("div",{staticClass:"grid-col"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newSal.bonus,expression:"newSal.bonus",modifiers:{number:!0}}],staticClass:"in-txt",attrs:{type:"text"},domProps:{value:t.newSal.bonus},on:{input:function(e){e.target.composing||t.$set(t.newSal,"bonus",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(10),t._v(" "),s("div",{staticClass:"grid-col"},[t._v("\n          ₹"+t._s(t.newSum)+"\n        ")])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(11),t._v(" "),s("div",{staticClass:"grid-col"},[t._v("\n          "+t._s(t.newCtcVarPercentage||0)+"%\n        ")])]),t._v(" "),s("div",{staticClass:"grid-row2"},[t._m(12),t._v(" "),s("div",{staticClass:"grid-col"},[t._v("\n          ₹"+t._s(t.newSal.ctc/12||0)+"\n        ")])])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"grid-row3"},[s("div",{staticClass:"grid-col grid-a light"},[t._v("Percentage Change (CTC)")]),t._v(" "),s("div",{staticClass:"grid-col grid-b"},[t._v(t._s(t.ctcTotalPercentage||0)+"%")])]),t._v(" "),s("div",{staticClass:"grid-row3"},[s("div",{staticClass:"grid-col grid-a light"},[t._v("Percentage Change (Variable)")]),t._v(" "),s("div",{staticClass:"grid-col grid-b"},[t._v(t._s(t.varTotalPercentage||0)+"%")])]),t._v(" "),s("div",{staticClass:"grid-row3"},[s("div",{staticClass:"grid-col grid-a bold"},[t._v("Total Percentage Change")]),t._v(" "),s("div",{staticClass:"grid-col grid-b"},[t._v(t._s(t.overallPercentage||0)+"%")])]),t._v(" "),s("div",{staticClass:"fixedline"})])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"title"},[i("img",{staticClass:"logo",attrs:{src:s(19),alt:"logo"}}),t._v("\n    Appraisal Calculator\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label"},[t._v("Current Fixed")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label"},[t._v("Current Variable (if any)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label"},[t._v("Annual Bonus (if any)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label bold"},[t._v("Sum Total (CTC)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label bold"},[t._v("Var Percentage to Fixed")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label bold"},[t._v("Monthly Pay (CTC)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label"},[t._v("New Fixed")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label"},[t._v("New Variable (if any)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label"},[t._v("Annual Bonus (if any)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label bold"},[t._v("Sum Total (CTC)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label bold"},[t._v("Var Percentage to Fixed")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid-col"},[s("div",{staticClass:"form-label bold"},[t._v("Monthly Pay (CTC)")])])}],a={render:i,staticRenderFns:r};e.a=a},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQ0YWVlMzt9LmNscy0ye2ZpbGw6IzQ3NWNhYTt9LmNscy0ze2ZpbGw6I2ZmZjt9LmNscy00e2ZpbGw6I2VlMzc4Nzt9LmNscy01e2ZpbGw6I2Y5OWQzMTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ288L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ2LjE2LDM0LjQ0YTkuODksOS44OSwwLDAsMS01Ljc5LDQuNzksMTIuMjEsMTIuMjEsMCwwLDEtNy4yMywwYy02LjYzLTEuOTUtOS4xNS04LjQ2LTkuMjUtOC43My0uMzQtLjktMi41OC03LDEtMTIsMS43LTIuMzUsNS40LTUuNDksOS4yNC00LjQ4LDIuMTIuNTYsNC42NiwyLjM2LDQuNjYsNC41NiwwLDItMiwzLjM4LTIuNDUsMy42OS0yLjgzLDItNS4yNC41My02LjQ3LDIuMDUtMS40MywxLjc3LjEyLDUuODksMi40Nyw4LjI1LjQxLjQyLDMuNDQsMy40NCw3LDIuNzcsNC40MS0uODMsNi4yOC02LjIsNy4zNC01LjY4QzQ3LjQyLDMwLDQ3LjA3LDMyLjU3LDQ2LjE2LDM0LjQ0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTksOS42NmExMS42MSwxMS42MSwwLDAsMSw4LjgzLjYzLDE0LjUyLDE0LjUyLDAsMCwxLDYuMTQsNS44OWM0LjA2LDcuMDYuOSwxNC42NC43NiwxNS0uNDUsMS0zLjQ5LDgtMTAuNjEsOS4zNC0zLjM3LjYxLTkuMDcuMjgtMTEuNTEtMy43MWE3LjU3LDcuNTcsMCwwLDEtLjI2LTcuNjcsNy4zNCw3LjM0LDAsMCwxLDYuMTQtMy4zM2MzLjIyLDAsNC4xMiwyLjQyLDYuNTIsMS45MnMzLjgzLTMuMDksNC4yMi01LjI0YTguMyw4LjMsMCwwLDAtMy43MS04LjA2Yy00LjQzLTIuODktMTAuMzkuMTUtMTAuODctMS4xNUM0LjMxLDEyLjM4LDYuNjcsMTAuNTEsOSw5LjY2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTcuODIsMjkuODZjMS41Ni0uNDYsMi4yMywxLDUsMS40MSwzLjIxLjUxLDQuOTEtMSw1LjYzLS4xM3MtLjQ4LDMuNjQtMi4zMSw1LjEyYTcuMjIsNy4yMiwwLDAsMS01LjM3LDEuNGMtLjUxLS4wNi01LS42NS01LjUtMy41OEE0LjA4LDQuMDgsMCwwLDEsNy44MiwyOS44NloiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjIuNjQiIGN5PSIxNi4xOCIgcj0iMS4yNSIvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iNDguMTIiIGN5PSIyNy4yOSIgcj0iMS4yNSIvPjwvc3ZnPg=="},function(t,e,s){"use strict";function i(t){s(21)}var r=s(5),a=s(22),n=s(1),c=i,l=n(r.a,a.a,!1,c,null,null);e.a=l.exports},function(t,e){},function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"error-container"},[t._m(0),t._v(" "),s("div",{staticClass:"text-center"},[s("br"),t._v(" "),s("br"),t._v(" "),t._m(1),t._v(" "),s("router-link",{staticClass:"orange-btn",attrs:{to:"/",tag:"button"}},[t._v("Home")])],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-right"},[i("img",{attrs:{src:s(23),alt:"octopussy"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"error-text"},[t._v("\n      Looks like one of the page you're looking for"),s("br"),t._v("\n      is taking a Break!\n    ")])}],a={render:i,staticRenderFns:r};e.a=a},function(t,e,s){t.exports=s.p+"static/img/octo.c2a7028.svg"}],[6]);
//# sourceMappingURL=app.1e2caa70f3da649f532c.js.map