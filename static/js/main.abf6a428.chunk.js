(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={div:"App_div__7zCJ4"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2yZHy",label:"ContactForm_label__2mxBb",input:"ContactForm_input__32OJy",btn:"ContactForm_btn__gyvaN"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(19),n(14)),s=n(4),u=n(5),l=n(7),b=n(6),m=n(11),h=n.n(m),d=n(12),j=n(2),f=n.n(j),p=n(0),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:f.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",className:f.a.input,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:f.a.label,children:["Number",Object(p.jsx)("input",{type:"text",name:"number",className:f.a.input,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})}}]),n}(a.Component),v=n(9),O=n.n(v),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:O.a.item,children:[a,": ",c,Object(p.jsx)("button",{type:"button",className:O.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{children:["Filter by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n})]})},_=n(13),y=n.n(_),N=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:h.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContact();return Object(p.jsxs)("div",{className:y.a.div,children:[Object(p.jsx)("h1",{children:"PhoneBook"}),Object(p.jsx)(C,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(g,{value:t,onChange:this.changeFilter}),Object(p.jsx)(x,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),S=N;i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={item:"ContactList_item__oFijr",btn:"ContactList_btn__2Vcwo"}}},[[29,1,2]]]);
//# sourceMappingURL=main.abf6a428.chunk.js.map