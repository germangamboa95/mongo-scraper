webpackJsonp([1],{"2U+L":function(e,t){},"7yP4":function(e,t){},JDAe:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r={name:"navbar",data:function(){return{}},mounted:function(){var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e)}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("div",{staticClass:"nav-wrapper"},[e._m(0),e._v(" "),a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/saved"}},[e._v("Saved")])],1)])])]),e._v(" "),a("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}},[a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),a("li",[a("router-link",{staticClass:"waves-effect",attrs:{to:"/saved"}},[e._v("Saved")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-demo"}},[t("i",{staticClass:"material-icons"},[this._v("menu")])])}]};var i={name:"App",components:{navbar:a("VU/8")(r,s,!1,function(e){a("dlmC")},"data-v-4c23e203",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")(i,c,!1,function(e){a("hyoK")},"data-v-83900002",null).exports,l=a("/ocq"),d=a("Xxa5"),u=a.n(d),v=a("exGp"),f=a.n(v),_=a("mtWM"),p=a.n(_),m=function(){return p.a.create({baseURL:"/api"})},h=function(){return m().get("/loadStale")},w=function(){return m().get("/loadFresh")},g=function(e){return m().post("/saveArticle",{article_id:e})},C=function(){return m().get("/savedArticles")},x=function(e){return m().put("/removeSavedArticle",{article_id:e})},k=function(e,t){return m().post("/addNote",{text:e,articleId:t})},b=function(e){return m().delete("/deleteNote/"+e)},A={name:"articler",props:["article"],data:function(){return{flag:!1}},methods:{saveArticle:function(){var e=this;return f()(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e.article._id);case 2:a=t.sent,e.flag=!0,console.log(a);case 5:case"end":return t.stop()}},t,e)}))()}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"card center-align"},[a("div",{staticClass:"date"},[e._v(e._s(Date(e.article.timeStamps)))]),e._v(" "),a("h5",[e._v(e._s(e.article.headline))]),e._v(" "),a("p",[e._v(e._s(e.article.summary))]),e._v(" "),a("a",{attrs:{href:e.article.link,target:"_blank"}},[e._v("Read More...")]),e._v(" "),a("div"),e._v(" "),e.flag?a("div",[e._v("Article Saved!")]):a("button",{staticClass:"btn-floating btn-large waves-effect waves-light red",on:{click:e.saveArticle}},[a("i",{staticClass:"material-icons"},[e._v("save")])])])])},staticRenderFns:[]};var N={name:"home",components:{articler:a("VU/8")(A,S,!1,function(e){a("JDAe")},"data-v-e6356296",null).exports},data:function(){return{articles:[],added:0,flag:!1}},methods:{loadStale:function(){var e=this;return f()(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:a=t.sent,e.articles=a.data;case 4:case"end":return t.stop()}},t,e)}))()},loadFresh:function(){var e=this;return f()(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:a=t.sent,console.log(a),e.articles=a.data.articles,e.flag=!0,e.added=a.data.insterted;case 7:case"end":return t.stop()}},t,e)}))()}},created:function(){this.loadStale()}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("button",{staticClass:"waves-effect waves-light btn",on:{click:e.loadFresh}},[e._v("Load Fresh Articles")]),e._v(" "),e.flag?a("h3",[e._v("Articles Added: "+e._s(e.added))]):e._e(),e._v(" "),e._l(e.articles,function(e){return a("articler",{key:e.id,attrs:{article:e}})})],2)},staticRenderFns:[]};var F=a("VU/8")(N,y,!1,function(e){a("2U+L")},null,null).exports,$={name:"articlerSaved",props:["article","notes"],data:function(){return{note:"",savedNotes:[]}},methods:{deleteArticle:function(){var e=this;return f()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e.article._id);case 2:t.sent,e.$emit("deleted",e.article._id);case 4:case"end":return t.stop()}},t,e)}))()},deleteComment:function(e){var t=this;return f()(u.a.mark(function a(){var n;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b(e);case 2:n=a.sent,console.log(n),console.log(e),t.$emit("noteAdded",t.article._id);case 6:case"end":return a.stop()}},a,t)}))()},addNote:function(){var e=this;return f()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.note,e.article._id);case 2:t.sent,e.$emit("noteAdded",e.article._id),e.note="";case 5:case"end":return t.stop()}},t,e)}))()},sortNotes:function(){var e=this;this.savedNotes=this.notes.filter(function(t){return t.articleId===e.article._id})}},watch:{notes:function(){this.sortNotes()}},created:function(){this.sortNotes()}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"card center-align"},[a("div",{staticClass:"date"},[e._v(e._s(Date(e.article.timeStamps)))]),e._v(" "),a("h5",[e._v(e._s(e.article.headline))]),e._v(" "),a("p",[e._v(e._s(e.article.summary))]),e._v(" "),a("a",{attrs:{href:e.article.link,target:"_blank"}},[e._v("Read More...")]),e._v(" "),a("div"),e._v(" "),a("div",{staticClass:"input-field inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"note"}],staticClass:"validate",attrs:{id:"note",type:"text",name:"text"},domProps:{value:e.note},on:{input:function(t){t.target.composing||(e.note=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"note"}},[e._v("Add a note!")])]),e._v(" "),a("button",{staticClass:"btn-floating btn-small waves-effect waves-light red",on:{click:e.addNote}},[a("i",{staticClass:"material-icons"},[e._v("add")])]),e._v(" "),e.savedNotes.length>0?a("div",[a("h5",[e._v("Saved Notes")]),e._v(" "),a("ul",e._l(e.savedNotes,function(t){return a("li",{key:t._id},[e._v(e._s(t.text)+" "),a("span",{staticClass:"my-btn",attrs:{value:t._id},on:{click:function(a){e.deleteComment(t._id)}}},[a("i",{staticClass:"material-icons"},[e._v("cancel")])])])}))]):e._e(),e._v(" "),a("div"),e._v(" "),a("button",{staticClass:"btn-floating btn-large waves-effect waves-light red",on:{click:e.deleteArticle}},[a("i",{staticClass:"material-icons"},[e._v("delete_forever")])])])])},staticRenderFns:[]};var U={name:"home",components:{articlerSaved:a("VU/8")($,R,!1,function(e){a("7yP4")},"data-v-3ea38c39",null).exports},data:function(){return{articles:[],notes:[],deletedCount:0,foo:0}},methods:{loadSaved:function(){var e=this;return f()(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:a=t.sent,e.articles=a.data[0].article.reverse(),e.notes=a.data[0].notes.reverse();case 5:case"end":return t.stop()}},t,e)}))()},deletedOne:function(){this.loadSaved(),this.deletedCount++},noteAdded:function(){var e=this;return f()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.loadSaved(),e.foo++;case 2:case"end":return t.stop()}},t,e)}))()}},created:function(){this.loadSaved()}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.deletedCount>0?a("h3",[e._v("Deleted: "+e._s(e.deletedCount)+" articles!")]):e._e(),e._v(" "),e._l(e.articles,function(t){return a("articlerSaved",{key:t._id,attrs:{article:t,notes:e.notes},on:{noteAdded:e.noteAdded,deleted:e.deletedOne}})})],2)},staticRenderFns:[]};var V=a("VU/8")(U,E,!1,function(e){a("j0eT")},null,null).exports;n.a.use(l.a);var D=new l.a({routes:[{path:"/",name:"home",component:F},{path:"/saved",name:"saved",component:V}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:D,components:{App:o},template:"<App/>"})},dlmC:function(e,t){},hyoK:function(e,t){},j0eT:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a3c9c6ca8a4aba7a17d0.js.map