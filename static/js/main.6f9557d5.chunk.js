(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),l=n.n(c),i=(n(18),n(10)),u=n(8),s=n(9),m=n(12),o=n(11),d=(n(19),n(20),function(e){var t=e.handlechange,n=e.handlesubmit,a=e.value;return r.a.createElement("header",null,r.a.createElement("form",{id:"todo-form",onSubmit:n},r.a.createElement("div",{className:"formInput"},r.a.createElement("input",{type:"text",placeholder:"Enter-Text",value:a,onChange:t}),r.a.createElement("button",{type:"submit"},"Add Item"))))}),h=(n(21),n(4)),f=function(e){var t=e.text,n=(e.id,e.handledelete),a=e.handleEdit;e.handlecompleted;return r.a.createElement("div",{className:"list"},r.a.createElement("p",null,t,r.a.createElement("span",null,r.a.createElement(h.a,{icon:"pen",onClick:a,className:"pen"}),r.a.createElement(h.a,{icon:"trash",onClick:n}))))},p=n(2),E=n(5);p.b.add(E.b,E.a);var v=function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handlechange=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.handlesubmit=function(e){e.preventDefault();var t=a.state.currentItem;if(""!==t.text){var n=[].concat(Object(i.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:""},completed:!1})}else alert("please Enter any text first")},a.handledelete=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter((function(t){return t.key!==e})),n=a.state.items.find((function(t){return t.key===e}));a.setState({items:t,currentItem:{text:n.text,key:n.key},completed:!1})},a.state={items:[],currentItem:{text:"",key:""},completed:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TodoApp"},r.a.createElement("h1",{className:"mainheading"},"TodoList"),r.a.createElement(d,{handlechange:this.handlechange,handlesubmit:this.handlesubmit,value:this.state.currentItem.text}),this.state.items.map((function(t){var n=t.text,a=t.key;t.handledelete;return r.a.createElement(f,{key:a,text:n,handledelete:function(){return e.handledelete(a)},handleEdit:function(){return e.handleEdit(a)}})})))}}]),n}(r.a.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6f9557d5.chunk.js.map