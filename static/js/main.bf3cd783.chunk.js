(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{66:function(e,t,o){},67:function(e,t,o){},68:function(e,t,o){},82:function(e,t,o){"use strict";o.r(t);var a=o(2),c=o.n(a),n=o(17),s=o.n(n),d=(o(66),o(31)),i=(o(67),o(104)),r=o(109),l=o(110),p=o(105),j=o(101),u=o(108),b=o(106),m=o(107),f=o(111),O=o(55),h=o.n(O),x=(o(68),o(44)),_=x.a.initializeApp({apiKey:"AIzaSyA1iTTy-yUyd6qA1lf2jD6O6hMYWr4c2EM",authDomain:"todo-app-cfe6d.firebaseapp.com",projectId:"todo-app-cfe6d",storageBucket:"todo-app-cfe6d.appspot.com",messagingSenderId:"520483322510",appId:"1:520483322510:web:0843c22fcdb543fee727df",measurementId:"G-1TW1X5MBSL"}).firestore(),g=o(8),v=Object(j.a)((function(e){return{paper:{width:400,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),display:"flex"}}})),N=Object(a.forwardRef)((function(e,t){var o=Object(a.useState)(!1),c=Object(d.a)(o,2),n=c[0],s=c[1],j=v(),O=Object(a.useState)(),x=Object(d.a)(O,2),N=x[0],y=x[1];return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"todo",ref:t,children:[Object(g.jsx)(u.a,{open:n,onClose:function(e){return s(!1)},children:Object(g.jsxs)("div",{className:j.paper,children:[Object(g.jsxs)(i.a,{className:"app__form-control",children:[Object(g.jsx)(r.a,{className:"app_label",children:"Write a Todo"}),Object(g.jsx)(l.a,{placeholder:e.todo.todo,value:N,onChange:function(e){return y(e.target.value)},className:"todo__input"})]}),Object(g.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){_.collection("todos").doc(e.todo.id).set({todo:N},{merge:!0}),y(""),s(!1)},disabled:!N,className:"todo__btn",children:"Update Todo"})]})}),Object(g.jsxs)(b.a,{className:"todo__list",children:[Object(g.jsx)(m.a,{className:"todo__content-list",children:Object(g.jsx)(f.a,{primary:e.todo.todo,secondary:"Dummy deadline",className:"todo__content"})}),Object(g.jsx)(p.a,{onClick:function(e){return s(!0)},className:"todo__edit-btn",children:"Edit"}),Object(g.jsx)(h.a,{onClick:function(t){return _.collection("todos").doc(e.todo.id).delete()},className:"todo__delete-btn"})]})]})})})),y=o(56),C=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),o=t[0],c=t[1],n=Object(a.useState)(""),s=Object(d.a)(n,2),j=s[0],u=s[1];Object(a.useEffect)((function(){_.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]);return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsxs)("form",{children:[Object(g.jsxs)(i.a,{className:"app__form-control",children:[Object(g.jsx)(r.a,{className:"app_label",children:"Write a Todo"}),Object(g.jsx)(l.a,{value:j,onChange:function(e){return u(e.target.value)},className:"app__input"})]}),Object(g.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),_.collection("todos").add({todo:j,timestamp:x.a.firestore.FieldValue.serverTimestamp()}),u("")},disabled:!j,className:"app__btn",children:"Add Todo"})]}),Object(g.jsx)("ul",{children:Object(g.jsx)(y.a,{children:o.map((function(e){return Object(g.jsx)(N,{todo:e},e.id)}))})})]})},S=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,113)).then((function(t){var o=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;o(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),S()}},[[82,1,2]]]);
//# sourceMappingURL=main.bf3cd783.chunk.js.map