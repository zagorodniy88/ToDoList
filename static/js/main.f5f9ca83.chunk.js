(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(t,e,n){t.exports=n(39)},27:function(t,e,n){},28:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),l=(n(26),n(27),n(8)),c=n(7),u=n(3),s=n(4),m=n(2),d=n(6),f=n(5),b=n(9),p=(n(28),n(10));function h(){var t=Object(b.a)(["\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\tmargin-top: 50px;\n\th1{\n\t\tfont-size: 26px;\n\t\t:hover{\n\t\t\tcolor:#17a2b8;\n\t\t}\n\t}\n\th2{\n\t\tfont-size: 1.2rem;\n\t\tcolor: grey;\n\t}\n"]);return h=function(){return t},t}var v=p.a.div(h()),g=function(t){var e=t.liked,n=t.allPosts;return r.a.createElement(v,null,r.a.createElement("h1",null," Alexandr Zagorodniy"),r.a.createElement("h2",null,n,"  note, of them liked ",e))},k=(n(31),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Search by records",value:this.state.term,onChange:this.onUpdateSearch})}}]),n}(a.Component)),j=(n(32),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).buttons=[{name:"All",label:"All"},{name:"Like",label:"Like"}],a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,o=t.props,i=o.filter,l=o.onFilterSelect,c=i===n?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{key:n,type:"button",className:"btn ".concat(c),onClick:function(){return l(n)}},a)}));return r.a.createElement("div",{className:"btn-group"},e)}}]),n}(a.Component)),O=n(20),y=(n(33),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"onImportant",value:function(){this.setState((function(t){return{important:!t.important}}))}},{key:"onLike",value:function(){this.setState((function(t){return{like:!t.like}}))}},{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,o=t.onToggleLiked,i=t.like,l="app-list-item d-flex justify-content-between";return t.important&&(l+=" important"),i&&(l+=" like"),r.a.createElement("div",{className:l},r.a.createElement("span",{className:"app-list-item-label",onClick:o},e),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}}]),n}(a.Component)),S=n(41),E=(n(34),function(t){var e=t.posts,n=t.onDelete,a=t.onToggleImportant,o=t.onToggleLiked,i=e.map((function(t){var e=t.id,i=Object(O.a)(t,["id"]);return r.a.createElement("li",{key:e,className:"list-group-item"},r.a.createElement(y,Object.assign({},i,{onDelete:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleLiked:function(){return o(e)}})))}));return r.a.createElement(S.a,{className:"app-list"},i)}),x=(n(37),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return r.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Need to do",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))}}]),n}(a.Component));n(38);function I(){var t=Object(b.a)(["\n\tmargin: 0 auto;\n\tmax-width: 800px;\n"]);return I=function(){return t},t}var N=p.a.div(I()),T=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Go to learn React",important:!0,like:!1,id:1},{label:"Go to learn Java Script",important:!1,like:!1,id:2},{label:"I need a breack",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(m.a)(a)),a.addItem=a.addItem.bind(Object(m.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(m.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(m.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(m.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(m.a)(a)),a.maxId=4,a}return Object(s.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(c.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),r=n[a],o=Object(l.a)(Object(l.a)({},r),{},{important:!r.important});return{data:[].concat(Object(c.a)(n.slice(0,a)),[o],Object(c.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){console.log("liked ".concat(t)),this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),r=n[a],o=Object(l.a)(Object(l.a)({},r),{},{like:!r.like});return{data:[].concat(Object(c.a)(n.slice(0,a)),[o],Object(c.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"filterPost",value:function(t,e){return"Like"===e?t.filter((function(t){return t.like})):t}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,o=this.state.data.filter((function(t){return t.like})).length,i=e.length,l=this.filterPost(this.searchPost(e,n),a);return r.a.createElement(N,null,r.a.createElement(g,{liked:o,allPosts:i}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(k,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(j,{filter:a,onFilterSelect:this.onFilterSelect})),r.a.createElement(E,{posts:l,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),r.a.createElement(x,{onAdd:this.addItem}))}}]),n}(a.Component);i.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f5f9ca83.chunk.js.map