(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=n(5),i=n(2),l=n(13),u=n(14);n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(15),h=n(16),b=n(18),m=n(17),E=n(19),p=function(e){var t=e.id,n=e.username,a=e.email;return r.a.createElement("div",{className:"bg-light-pink dib tc ma2 bw2 pa3 br3 grow shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"? 200x200"),alt:"asmovic robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},g=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})}),";")},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",onChange:t,type:"search",placeholder:"Search Robot.."}))},v=(n(30),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children,";")}),O=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(e){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?r.a.createElement("h1",null,"LOADING..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robot Friends"),r.a.createElement(f,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(g,{robots:c})))}}]),t}(a.Component),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(O),S={searchField:""},y={isPending:!1,robots:[],error:""},w=(n(31),Object(l.createLogger)()),j=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(i.d)(j,Object(i.a)(u.a,w));c.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.4225fa1f.chunk.js.map