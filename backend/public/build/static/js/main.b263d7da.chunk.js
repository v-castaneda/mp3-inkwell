(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{63:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(28),s=c.n(r),i=c(69),o=c(7),l=c(27),j=c(31),u=(c(53),c(1));var b=function(){return Object(u.jsx)("main",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{color:"black"},children:"Welcome to The Inkwell"}),Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(l.a.Item,{children:[Object(u.jsx)("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxzdHJlZXQlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:"First slide"}),Object(u.jsxs)(l.a.Caption,{children:[Object(u.jsx)("h3",{}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)(l.a.Item,{children:[Object(u.jsx)("img",{className:"img-fluid",src:"https://media.istockphoto.com/id/1286140784/photo/sancocho.jpg?s=612x612&w=0&k=20&c=UPXD9bK_SIcbQje4pFhyfRUExziiti-JKOD_9t07k0U=",alt:"Second slide"}),Object(u.jsxs)(l.a.Caption,{children:[Object(u.jsx)("h3",{}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)(l.a.Item,{children:[Object(u.jsx)("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:"Third slide"}),Object(u.jsxs)(l.a.Caption,{children:[Object(u.jsx)("h3",{}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)(l.a.Item,{children:[Object(u.jsx)("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1536521642388-441263f88a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",alt:"Fourth slide"}),Object(u.jsxs)(l.a.Caption,{children:[Object(u.jsx)("h3",{}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)(l.a.Item,{children:[Object(u.jsx)("img",{className:"img-fluid",src:"https://images.unsplash.com/photo-1564956142890-3b3746211005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:"Fifth slide"}),Object(u.jsxs)(l.a.Caption,{children:[Object(u.jsx)("h3",{}),Object(u.jsx)("p",{})]})]})]}),Object(u.jsx)("a",{href:"/places",children:Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(j.a,{variant:"dark",children:"Posts Page"})})})]})})},d=c(11),h=c.n(d),m=c(13),O=c(5);var p=function(e){var t=Object(o.f)(),c=Object(n.useState)([]),a=Object(O.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var i=r.map((function(e){return Object(u.jsxs)("div",{className:"col-sm-6",children:[Object(u.jsx)("h2",{children:Object(u.jsx)("a",{href:"#",onClick:function(){return t.push("/places/".concat(e.placeId))},children:e.name})}),Object(u.jsx)("p",{className:"text-center",children:e.cuisines}),Object(u.jsx)("img",{style:{maxWidth:200},src:e.pic,alt:e.name}),Object(u.jsxs)("p",{className:"text-center",children:["Located in ",e.city,", ",e.state]})]},e.placeId)}));return Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{style:{color:"black"},children:"Explore thoughts"}),Object(u.jsx)("div",{className:"row-reverse",children:i})]})},x=c(40),f=c(2),v=Object(n.createContext)();var g=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(O.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","authentication/profile"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)(v.Provider,{value:{currentUser:r,setCurrentUser:s},children:t})};var N=function(e){var t=e.comment,c=e.onDelete,a=Object(n.useContext)(v).currentUser,r=null;return(null===a||void 0===a?void 0:a.userId)===t.authorId&&(r=Object(u.jsx)("button",{className:"btn btn-danger",onClick:c,children:"Delete Comment"})),Object(u.jsxs)("div",{className:"border col-sm-4",children:[Object(u.jsx)("h4",{children:t.content}),Object(u.jsx)("h3",{children:Object(u.jsxs)("strong",{children:["- ",t.author.firstName," ",t.author.lastName]})}),r]})};var y=function(e){e.place;var t=e.onSubmit,c=Object(n.useState)([]),a=Object(O.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)({content:"",stars:3,rant:!1,authorId:""}),o=Object(O.a)(i,2),l=o[0],j=o[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(){var t,c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","users"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,j(Object(f.a)(Object(f.a)({},l),{},{authorId:null===(t=n[0])||void 0===t?void 0:t.userId})),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),r.map((function(e){return Object(u.jsxs)("option",{value:e.userId,children:[e.firstName," ",e.lastName]},e.userId)})),Object(u.jsxs)("form",{onSubmit:function(e){var c;e.preventDefault(),t(l),j({content:"",authorId:null===(c=r[0])||void 0===c?void 0:c.userId})},children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"form-group col-sm-12",children:[Object(u.jsx)("label",{htmlFor:"content",children:"Post a new comment"}),Object(u.jsx)("textarea",{required:!0,value:l.content,onChange:function(e){return j(Object(f.a)(Object(f.a)({},l),{},{content:e.target.value}))},className:"form-control",id:"content",name:"content"})]})}),Object(u.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})};var w=function(){var e=Object(o.g)().placeId,t=(Object(o.f)(),Object(n.useState)(null)),c=Object(O.a)(t,2),a=c[0],r=c[1];if(Object(n.useEffect)((function(){var t=function(){var t=Object(m.a)(h.a.mark((function t(){var c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/","places/").concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),null===a)return Object(u.jsx)("h1",{children:"Loading"});function s(){return(s=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(a.placeId,"/comments/").concat(t.commentId),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:r(Object(f.a)(Object(f.a)({},a),{},{comments:a.comments.filter((function(e){return e.commentId!==t.commentId}))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(m.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(a.placeId,"/comments"),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,r(Object(f.a)(Object(f.a)({},a),{},{comments:[].concat(Object(x.a)(a.comments),[n])}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=Object(u.jsx)("h3",{className:"inactive",children:"No comments yet!"});if(a.comments.length){for(var j=a.comments.reduce((function(e,t){return e+t.stars}),0),b=Math.round(j/a.comments.length),d="",p=0;p<b;p++)d+="\u2b50\ufe0f";Object(u.jsxs)("h3",{children:[d," stars"]}),l=a.comments.map((function(e){return Object(u.jsx)(N,{comment:e,onDelete:function(){return function(e){return s.apply(this,arguments)}(e)}},e.commentId)}))}return Object(u.jsxs)("main",{children:[Object(u.jsx)("div",{className:"col-sm-6"}),Object(u.jsxs)("div",{className:"col-sm-6",children:[Object(u.jsx)("img",{style:{maxWidth:200},src:a.pic,alt:a.name}),Object(u.jsx)("h1",{children:a.name}),Object(u.jsx)("h3",{children:a.city})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{children:"Comments"}),Object(u.jsx)("div",{className:"row",children:l}),Object(u.jsx)("hr",{}),Object(u.jsx)(y,{place:a,onSubmit:function(e){return i.apply(this,arguments)}})]})},C=c(91),k=c(92),I=c(90);var S=function(){var e=Object(o.f)(),t=Object(n.useContext)(v).currentUser;function c(){return t?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{children:["Welcome back ",t.firstName," ",t.lastName]})}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{children:"Stay curious, discover stories ... "})})}var a=c();return Object(u.jsxs)(C.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(u.jsxs)(C.a.Brand,{href:"#home",onClick:function(){return e.push("/")},children:["The Inkwell"," "]}),Object(u.jsx)(k.a,{className:"text-right",children:Object(u.jsx)(k.a.Item,{children:Object(u.jsx)(k.a.Link,{eventKey:"disabled",disabled:!0,children:a})})}),Object(u.jsx)(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(C.a.Collapse,{children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)(k.a.Link,{href:"#",onClick:function(){return e.push("/places")},children:"Posts"}),Object(u.jsx)(k.a.Link,{href:"#",onClick:function(){return e.push("/places/new")},children:"Add Post"}),Object(u.jsxs)(I.a,{title:"Account",children:[Object(u.jsx)(I.a.Item,{href:"#",onClick:function(){return e.push("/login")},children:"Sign-in"}),Object(u.jsx)(I.a.Item,{href:"#",onClick:function(e){localStorage.clear(),a=c(),window.location="/places"},children:"Sign-out"}),Object(u.jsx)(I.a.Divider,{}),Object(u.jsx)(I.a.Item,{href:"#",onClick:function(){return e.push("/sign-up")},children:"Create account"})]})]})})]})};var P=function(){return Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{children:"404: PAGE NOT FOUND"}),Object(u.jsx)("p",{children:"Oops, sorry, we can't find this page!"}),Object(u.jsx)("img",{src:"/images/kittykat.jpeg",alt:"cute cat pic"})]})},E=c(8);c(63);var M=function(){var e=Object(o.f)(),t=Object(n.useState)({name:"",pic:"",city:"",state:"",cuisines:""}),c=Object(O.a)(t,2),a=c[0],r=c[1];function s(){return(s=Object(m.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("".concat("/","places"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.push("/places");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"bg-Img3",children:Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{style:{color:"black"},children:"Add a new post"}),Object(u.jsxs)(E.a,{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPlaceName",children:[Object(u.jsx)(E.a.Label,{children:"Title"}),Object(u.jsx)(E.a.Control,{required:!0,value:a.name,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{name:e.target.value}))},placeholder:"Enter Name of Place"})]}),Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPlacePicture",children:[Object(u.jsx)(E.a.Label,{children:"Image"}),Object(u.jsx)(E.a.Control,{required:!0,value:a.pic,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{pic:e.target.value}))},placeholder:"Add Picture"})]}),Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasiCuisines",children:[Object(u.jsx)(E.a.Label,{children:"Post"}),Object(u.jsx)(E.a.Control,{required:!0,value:a.city,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{city:e.target.value}))},placeholder:"Add Post"})]}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(j.a,{variant:"dark",type:"submit",value:"Add post",children:"Add post"})})]})]})})};var B=function(){var e=Object(o.f)(),t=Object(o.g)().placeId,c=Object(n.useState)({name:"",pic:"",city:"",state:"",cuisines:""}),a=Object(O.a)(c,2),r=a[0],s=a[1];function i(){return(i=Object(m.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("".concat("/","places/").concat(r.placeId),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:e.push("/places/".concat(r.placeId));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/","places/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{children:"Edit Place"}),Object(u.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Place Name"}),Object(u.jsx)("input",{required:!0,value:r.name,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{name:e.target.value}))},className:"form-control",id:"name",name:"name"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"founded",children:"Year Founded"}),Object(u.jsx)("input",{required:!0,value:r.founded,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{founded:e.target.value}))},className:"form-control",id:"founded",name:"founded"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"pic",children:"Place Picture"}),Object(u.jsx)("input",{value:r.pic,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{pic:e.target.value}))},className:"form-control",id:"pic",name:"pic"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"city",children:"City"}),Object(u.jsx)("input",{value:r.city,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{city:e.target.value}))},className:"form-control",id:"city",name:"city"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"state",children:"State"}),Object(u.jsx)("input",{value:r.state,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{state:e.target.value}))},className:"form-control",id:"state",name:"state"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"cuisines",children:"Cuisines"}),Object(u.jsx)("input",{value:r.cuisines,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{cuisines:e.target.value}))},className:"form-control",id:"cuisines",name:"cuisines",required:!0})]}),Object(u.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Save"})]})]})};var F=function(){var e=Object(o.f)(),t=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),c=Object(O.a)(t,2),a=c[0],r=c[1];function s(){return(s=Object(m.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,fetch("".concat("/","users/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"bg-Img2",children:Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{style:{color:"black"},children:"Create Account"}),Object(u.jsxs)(E.a,{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicFirstName",children:[Object(u.jsx)(E.a.Label,{children:"First Name"}),Object(u.jsx)(E.a.Control,{required:!0,type:"text",value:a.firstName,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{firstName:e.target.value}))},placeholder:"Enter First Name"})]}),Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicLastName",children:[Object(u.jsx)(E.a.Label,{children:"Last Name"}),Object(u.jsx)(E.a.Control,{required:!0,type:"text",value:a.lastName,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{lastName:e.target.value}))},placeholder:"Enter Last Name"})]}),Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(E.a.Label,{children:"Email Address"}),Object(u.jsx)(E.a.Control,{required:!0,type:"text",value:a.email,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{email:e.target.value}))},placeholder:"Enter Email"})]}),Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(E.a.Label,{children:"Password"}),Object(u.jsx)(E.a.Control,{required:!0,type:"password",value:a.password,onChange:function(e){return r(Object(f.a)(Object(f.a)({},a),{},{password:e.target.value}))},placeholder:"Enter Password"})]}),Object(u.jsx)(E.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(u.jsx)(E.a.Check,{type:"checkbox",label:"I am not a robot"})}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(j.a,{variant:"dark",type:"submit",children:"Sign-up"})})]})]})})};var D=function(){var e=Object(o.f)(),t=Object(n.useContext)(v).setCurrentUser,c=Object(n.useState)({email:"",password:""}),a=Object(O.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(null),l=Object(O.a)(i,2),b=l[0],d=l[1];function p(){return(p=Object(m.a)(h.a.mark((function c(n){var a,s;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.next=3,fetch("".concat("/","authentication/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return a=c.sent,c.next=6,a.json();case 6:s=c.sent,200===a.status?(t(s.user),localStorage.setItem("token",s.token),e.push("/places")):d(s.message);case 8:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"bg-Img",children:Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{style:{color:"black"},children:"Sign-in"}),null!==b?Object(u.jsx)("div",{className:"alert alert-danger",role:"alert",children:b}):null,Object(u.jsxs)(E.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(E.a.Label,{children:"Email Address"}),Object(u.jsx)(E.a.Control,{required:!0,type:"email",value:r.email,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{email:e.target.value}))},placeholder:"Enter Email"}),Object(u.jsx)(E.a.Text,{className:"text-muted",children:"We will never sell or share your email with anyone else."})]}),Object(u.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(E.a.Label,{children:"Password"}),Object(u.jsx)(E.a.Control,{required:!0,type:"password",value:r.password,onChange:function(e){return s(Object(f.a)(Object(f.a)({},r),{},{password:e.target.value}))},placeholder:"Enter Password"})]}),Object(u.jsx)(E.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(u.jsx)(E.a.Check,{type:"checkbox",label:"Remember Me"})}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(j.a,{variant:"dark",type:"submit",children:"Sign-in"})})]})]})})};var T=function(){return Object(u.jsx)(g,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(S,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(u.jsx)(o.a,{exact:!0,path:"/sign-up",component:F}),Object(u.jsx)(o.a,{exact:!0,path:"/login",component:D}),Object(u.jsx)(o.a,{exact:!0,path:"/places",component:p}),Object(u.jsx)(o.a,{exact:!0,path:"/places/new",component:M}),Object(u.jsx)(o.a,{exact:!0,path:"/places/:placeId",component:w}),Object(u.jsx)(o.a,{exact:!0,path:"/places/:placeId/edit",component:B}),Object(u.jsx)(o.a,{path:"/",component:P})]})]})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.b263d7da.chunk.js.map