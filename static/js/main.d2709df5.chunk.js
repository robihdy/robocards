(this.webpackJsonprobocards=this.webpackJsonprobocards||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),d=(n(14),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(e.robot.id,"?set=set1&size=180x180")}),o.a.createElement("h2",null,e.robot.name),o.a.createElement("p",null,e.robot.email))}),m=(n(15),function(e){return o.a.createElement("div",{className:"card-list"},e.robots.map((function(e){return o.a.createElement(d,{key:e.id,robot:e})})))}),f=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),b=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"ROBOCARDS"),o.a.createElement(f,{placeholder:"search robots",handleChange:this.handleChange}),o.a.createElement(m,{robots:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d2709df5.chunk.js.map