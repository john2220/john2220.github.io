webpackJsonp([0],{"6Jcm":function(t,e){},DOT3:function(t,e){},DoQ7:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("/ocq"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:" nav py-1"},[e("div",{staticClass:"container d-flex"},[e("router-link",{staticClass:"d-flex pages",attrs:{to:"/",tag:"div"}},[e("a",{staticClass:"p-2"},[e("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),e("line",{attrs:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}}),e("line",{attrs:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}}),e("line",{attrs:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}}),e("line",{attrs:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}}),e("line",{attrs:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}}),e("line",{attrs:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"}})])])]),this._v(" "),e("router-link",{staticClass:"d-flex pages",attrs:{to:"/about",tag:"div"}},[e("a",{staticClass:"p-2"},[this._v("About")])]),this._v(" "),e("router-link",{staticClass:"d-flex pages",attrs:{to:"/tips",tag:"div"}},[e("a",{staticClass:"p-2"},[this._v("Get Tips")])])],1)])},staticRenderFns:[]};var o={components:{appNavbar:n("VU/8")(null,a,!1,function(t){n("iMsc")},"data-v-93caacca",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},l=n("VU/8")(o,r,!1,null,null,null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 my-2"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body name"},[this._t("default")],2)])])},staticRenderFns:[]};var u={props:["names"],components:{appName:n("VU/8")({props:["names"]},c,!1,function(t){n("aEXe")},null,null).exports},methods:{deleteName:function(t){this.$emit("nameDeleted",t)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.names,function(e,s){return n("app-name",{key:"name.id",nativeOn:{click:function(e){t.deleteName(s)}}},[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("p",[t._v("Name:")]),t._v(" "),n("span",[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("p",[t._v("Hours:")]),t._v(" "),n("span",[t._v(t._s(e.hours))])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center final-tip"},[n("p",[t._v("Tips:")]),t._v(" "),n("span",[t._v(t._s(e.final)+" $")])])])}))},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row new-names"},[n("div",{staticClass:"col-sm-10 offset-sm-1"},[n("form",[n("div",{staticClass:"col-sm-12 col-md-6 offset-md-3 form-group"},[n("label",[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.person.name,expression:"person.name"}],staticClass:"form-control",domProps:{value:t.person.name},on:{input:function(e){e.target.composing||t.$set(t.person,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-sm-12 col-md-6 offset-md-3 form-group"},[n("label",[t._v("Hour")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.person.hours,expression:"person.hours",modifiers:{number:!0}}],staticClass:"form-control",domProps:{value:t.person.hours},on:{input:function(e){e.target.composing||t.$set(t.person,"hours",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group"},[n("button",{staticClass:"btn add-btn",on:{click:function(e){return e.preventDefault(),t.createNew(e)}}},[t._v("Add Name")])])])])])},staticRenderFns:[]};var p={data:function(){return{sumedHours:"",totalTips:"",tips:"",names:[]}},methods:{newName:function(t){this.names.push(t)},deleteName:function(t){this.names.splice(t,1)},total:function(){var t=this.names.map(function(t,e){return t.hours}).reduce(function(t,e){return t+e});this.sumedHours=t},addTips:function(t){this.totalTips=this.tips,this.tips=""},endDay:function(){var t=Math.round(this.totalTips/this.sumedHours);this.names.map(function(e,n){return e.final=Math.floor(e.hours*t)})}},components:{appNamesGrid:n("VU/8")(u,d,!1,function(t){n("n7d+")},"data-v-73a55480",null).exports,appNewName:n("VU/8")({data:function(){return{person:{name:"",hours:"",final:""}}},methods:{createNew:function(){this.$emit("nameAdded",this.person),this.person={name:"",hours:"",final:""}}}},v,!1,function(t){n("6Jcm")},null,null).exports}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container tips-body"},[this.names.length>0?n("div",[n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"d-flex align-items-center total-hours"},[n("h2",[t._v("Total Hours: "+t._s(t.total()))]),t._v(" "),n("p",[t._v(" "+t._s(t.sumedHours)+" ")])]),t._v(" "),n("button",{staticClass:"end-day-btn",on:{click:t.endDay}},[t._v("End Day")])])]):t._e(),t._v(" "),n("div",{staticClass:"d-flex align-items-center total-tips"},[n("h2",[t._v("Total Tips: ")]),t._v(" "),n("p",[t._v(t._s(t.totalTips))])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between total-tips-input"},[n("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.tips,expression:"tips",modifiers:{number:!0,lazy:!0}}],domProps:{value:t.tips},on:{change:function(e){t.tips=t._n(e.target.value)},blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("button",{staticClass:"add-total-tips",on:{click:function(e){e.preventDefault(),t.addTips(t.tips)}}},[t._v("Add Tips")])]),t._v(" "),n("app-new-name",{on:{nameAdded:t.newName}}),t._v(" "),n("app-names-grid",{attrs:{names:t.names},on:{nameDeleted:t.deleteName}})],1)},staticRenderFns:[]};var h=n("VU/8")(p,m,!1,function(t){n("VnGo")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-body d-flex align-items-center justify-content-center"},[n("div",{staticClass:"content"},[n("h2",[t._v("How it works")]),t._v(" "),n("p",[t._v("In an ideal world we are doing 8 hour shifts. In the real world we rarely do so.\n\t\tThe tip giver is a little tool that helps anyone who is being tiped, find their fair share.\n\t\t")]),t._v(" "),n("p",[t._v("So how it works? Since the 8 hour shift is the norm, we will give it the number 1. Anything more or less will have a certain value by dividing the number of hours with 8 (which represents 1 shift). ")]),t._v(" "),n("p",[t._v("For example:\n\t\tIf you worked a 9 hour shift, you divide it by 8 to find your shift number.\n\t\t9 / 8 =  1.125\n\t\tIf you worked a 7 hour shift, you divide it by 8 again.\n\t\t7 / 8 = 0.875\n\t\t")]),t._v(" "),n("p",[t._v("Simple enought right?")]),t._v(" "),n("p",[t._v("Now if you have tips of a 100$ total and 4 people who worked the following hours . . .\n\t\t\t1, 1, 1.125, 1.5 . . .that makes a sum of 4.625 hours total.\n\t\t\tTo find the value for 1 you divide the total tips by 4.625, which is …\n\t\t\t21.6 . . . something.\n\t\t")]),t._v(" "),n("p",[t._v("Now to find the value for 1.125 and 1.5 respectively, you multiply the value of \n\t\t1 ( 21.6 …something in our case ) with the shift number that the value we want to find.\n\t\t\t21.6 * 1.5 = 32.4\n\t\t\t21.6 * 1.125 = 24.3\n\t\tNow to verify our results we can add all the values to check if it adds up 100.\n\t\tAs you might guessed we have to make some rounding.\n\t\t21.6 + 21.6 + 24.3 + 32.4 = 99.9\n\t\t")]),t._v(" "),n("p",[t._v("the rest is for the piggy back.")]),t._v(" "),n("p",[t._v("See? Now we brought a bit more justice to the world of tiping.")]),t._v(" "),n("h4",[t._v("Now get back to work")])])])}]};var _=n("VU/8")(null,f,!1,function(t){n("DoQ7")},"data-v-1226f4f5",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title"},[e("h1",[this._v("The TipGiver")])]),this._v(" "),e("div",{staticClass:"d-flex align-items-end"},[e("div",{staticClass:"welcome-page d-flex align-items-end justify-content-center"},[e("div",[e("h1",[this._v("It's all for the tips")]),this._v(" "),e("h2",[this._v("The best tip spliting machine in the world")])])])])])}]};var g=[{path:"/",component:n("VU/8")(null,w,!1,function(t){n("DOT3")},"data-v-95474bd0",null).exports},{path:"/about",component:_},{path:"/tips",component:h}];s.a.use(i.a);var y=new i.a({mode:"history",routes:g});new s.a({el:"#app",router:y,components:{App:l},template:"<App/>"})},VnGo:function(t,e){},aEXe:function(t,e){},iMsc:function(t,e){},"n7d+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.810fba72c9e77b0fb65c.js.map