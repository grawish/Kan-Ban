(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{28:function(e,n,c){},29:function(e,n,c){},30:function(e,n,c){},37:function(e,n,c){},38:function(e,n,c){},39:function(e,n,c){},40:function(e,n,c){"use strict";c.r(n);var t=c(0),a=c.n(t),o=c(14),r=c.n(o),d=(c(28),c(29),c(16)),i=c(3),s=(c(30),c(1)),u=function(){return Object(s.jsx)("div",{className:"intro",children:Object(s.jsxs)("div",{className:"center-box",children:[Object(s.jsx)("h1",{children:"Sprint To Do"}),Object(s.jsx)(d.b,{to:"/board",children:Object(s.jsx)("button",{children:"Get Started!"})})]})})},l=c(9),j=(c(37),c(8)),b=c(13),m=c(19),f=c(18),O={columns:[{name:"backlog",cards:[{name:"card A",description:"description of Card A"},{name:"card D",description:"description of Card D"},{name:"card E",description:"description of Card E"}]},{name:"In Progress",cards:[{name:"Card B",description:"description of Card B"}]},{name:"Done",cards:[{name:"Card C",description:"Description of Card C"}]},{name:"Blockers",cards:[{name:"Card F",description:"Description of Card F"}]}]};JSON.stringify(O);var x=Object(f.b)({name:"todo",initialState:O,reducers:{addNew:function(e,n){e.columns[n.payload.columnIndex].cards.push({name:"",description:""})},moveCard:function(e,n){var c=Object(m.a)(e.columns),t=n.payload,a=t.columnIndex,o=t.cardIndex,r=t.moveToColumn,d=c[a].cards.splice(o,1),i=Object(l.a)(d,1)[0];c[r].cards.push(i)},editCard:function(e,n){var c=Object(m.a)(e.columns),t=n.payload,a=t.columnIndex,o=t.cardIndex,r=t.title,d=t.description;c[a].cards[o]=Object(b.a)(Object(b.a)({},c[a].cards[o]),{},{name:r,description:d})},deleteCard:function(e,n){var c=Object(m.a)(e.columns),t=n.payload,a=t.columnIndex,o=t.cardIndex;c[a].cards.splice(o,1)},deleteColumn:function(e,n){e.columns.splice(n.payload.columnIndex,1)},addColumn:function(e,n){e.columns.push({name:"column",cards:[]})},editColumn:function(e,n){e.columns[n.payload.columnIndex]=Object(b.a)(Object(b.a)({},e.columns[n.payload.columnIndex]),{},{name:n.payload.name})}}}),p=x.reducer,h=x.actions,v=h.addNew,C=h.editCard,g=(h.moveCard,h.deleteCard),I=h.deleteColumn,N=h.addColumn,k=(h.editColumn,function(e){var n=e.cardIndex,c=(e.onMoveLeft,e.onMoveRight,e.columnIndex),a=Object(j.c)((function(e){return e.todo.columns[c].cards[n]})),o=Object(j.c)((function(e){return e.todo.columns})),r=(o.length,Object(j.b)()),d=Object(t.useState)(a.description),i=Object(l.a)(d,2),u=i[0],b=i[1],m=Object(t.useState)(a.name),f=Object(l.a)(m,2),O=f[0],x=f[1],p=Object(t.useState)(!1),h=Object(l.a)(p,2),v=h[0],I=h[1];return Object(t.useEffect)((function(){O||I(!0)}),[O]),Object(s.jsxs)("div",{className:"card",draggable:!v,onDrag:function(e){console.log(e)},children:[Object(s.jsxs)("div",{className:"cardhead",children:[v?Object(s.jsx)("button",{onClick:function(){r(C({cardIndex:n,columnIndex:c,title:O,description:u})),I(!1)},children:Object(s.jsx)("i",{className:"fa-regular fa-check"})}):Object(s.jsx)("button",{onClick:function(){return I(!0)},children:Object(s.jsx)("i",{className:"fa-regular fa-pen"})}),v?Object(s.jsx)("input",{name:"title",type:"text",value:O,onChange:function(e){return x(e.target.value)}}):Object(s.jsx)("h4",{children:a.name}),v?Object(s.jsx)("button",{onClick:function(){return I(!1)},children:Object(s.jsx)("i",{className:"fa-regular fa-times"})}):Object(s.jsx)("button",{onClick:function(){r(g({cardIndex:n,columnIndex:c}))},children:Object(s.jsx)("i",{className:"fa-regular fa-trash"})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"description",children:v?Object(s.jsx)("textarea",{placeholder:"Edit your Markdown Here",className:"textarea",rows:"10",value:u,onChange:function(e){return b(e.target.value)}}):a.description})]})}),y=(c(38),function(e){var n=e.columnIndex,c=e.onMoveLeft,a=e.onMoveRight,o=e.onEdit,r=Object(j.c)((function(e){return e.todo.columns[n]})),d=Object(t.useState)(!1),i=Object(l.a)(d,2),u=i[0],b=i[1],m=Object(t.useState)(r.name),f=Object(l.a)(m,2),O=f[0],x=f[1],p=Object(t.useRef)(null),h=Object(j.b)(),C=function(e){p.current&&!p.current.contains(e.target)&&b(!1)};return Object(t.useEffect)((function(){return u&&document.addEventListener("mousedown",C),function(){document.removeEventListener("mousedown",C)}}),[u]),Object(s.jsxs)("div",{className:"column",children:[Object(s.jsxs)("div",{className:"colheader",children:[Object(s.jsx)("button",{onClick:function(){h(I({columnIndex:n}))},children:Object(s.jsx)("i",{className:"fa-regular fa-trash"})}),u?Object(s.jsx)("input",{ref:p,type:"text",value:O,onChange:function(e){return x(e.target.value)}}):Object(s.jsx)("h1",{onClick:function(){return b(!0)},children:O}),Object(s.jsx)("button",{onClick:function(){return h(v({columnIndex:n}))},children:Object(s.jsx)("i",{className:"fa-solid fa-plus"})})]}),Object(s.jsx)("div",{className:"cards",children:r.cards.map((function(e,t){return Object(s.jsx)(k,{cardIndex:t,onMoveLeft:c,onMoveRight:a,onEdit:o,columnIndex:n},t)}))})]})}),E=(c(39),function(){var e=Object(j.c)((function(e){return e.todo})),n=Object(j.b)();return Object(s.jsxs)("div",{className:"board",children:[e.columns.map((function(e,n){return Object(s.jsx)(y,{columnIndex:n,onMoveLeft:function(e){},onMoveRight:function(e){},onAddCard:function(){},onEdit:function(e){return function(e,n){console.log(e,n)}(e,n)}},n)})),Object(s.jsx)("div",{className:"addcol",onClick:function(){n(N({}))},children:Object(s.jsx)("i",{className:"fa-solid fa-plus"})})]})}),S=Object(f.a)({reducer:{todo:p}});var M=function(){return Object(s.jsx)(j.a,{store:S,children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("div",{className:"background",children:Object(s.jsxs)(d.a,{children:[Object(s.jsx)(i.a,{path:"/",exact:!0,component:u}),Object(s.jsx)(i.a,{path:"/board",render:function(){return Object(s.jsx)(E,{})},exact:!0})]})})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;c(e),t(e),a(e),o(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.7ba84b3f.chunk.js.map