(this.webpackJsonplabephoto=this.webpackJsonplabephoto||[]).push([[0],{51:function(e,n,t){e.exports=t(80)},56:function(e,n,t){},58:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(41),c=t.n(l),o=(t(56),t(7)),i=t(2),u=t(3),m=t(4);function s(){var e=Object(u.a)(["\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    margin: 20px 0px;\n    background-color: #FFF;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 36px;\n    line-height: 42px;\n    color: #FF0000;\n    cursor: pointer;\n"]);return s=function(){return e},e}function p(){var e=Object(u.a)(["\n    cursor: pointer;\n    background-color: #EEE;\n    width: 292px;\n    padding: 10px 0px;\n"]);return p=function(){return e},e}function f(){var e=Object(u.a)(["\n    width: 150px;\n    height: 48px;\n    border-radius: 6px;\n    cursor: pointer;\n    background-color: #FFFFFF;\n\n    font-family: 'Abel', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 32px;\n    text-align: center;\n    color: #FF0000;\n"]);return f=function(){return e},e}var d=m.a.button(f()),g=m.a.button(p()),h=m.a.button(s());function E(){var e=Object(u.a)(["\n    width: 301px;\n    height: 244px;\n"]);return E=function(){return e},e}function b(){var e=Object(u.a)(["\n    border-radius: 12px;\n    background-color: #FFF;\n    margin: 0px 0px 20px 0px;\n"]);return b=function(){return e},e}function v(){var e=Object(u.a)(["\n    display: grid;\n    grid-row-gap: 15px;\n    justify-content: center;\n    align-items: center;\n"]);return v=function(){return e},e}function O(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 15px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 15px;\n"]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n    font-family: 'Abel', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 46px;\n    line-height: 59px;\n    text-align: center;\n    text-decoration-line: underline;\n    color: #FFFFFF;\n"]);return j=function(){return e},e}function x(){var e=Object(u.a)(["\n    display: grid;\n    height: 662px;\n    justify-content: center;\n    align-items: center;\n    overflow: scroll;\n"]);return x=function(){return e},e}function F(){var e=Object(u.a)(["\n    width: 375px;\n    min-height: 812px;\n    max-height: 812px;\n    background-color: #FF0000;\n    justify-content: center;\n    align-items: center;\n"]);return F=function(){return e},e}function w(){var e=Object(u.a)(["\n    display: grid;\n    width: 375px;\n    height: 812px;\n    background-color: #FF0000;\n    justify-content: center;\n    align-items: center;\n"]);return w=function(){return e},e}function S(){var e=Object(u.a)(["\n    display: grid;\n    justify-content: center;\n"]);return S=function(){return e},e}function y(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    height: 75px;\n    background-color: #FFF;\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n    background-color: #FFF;\n    color: #F00;\n    font-family: 'Abel', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 42px;\n    line-height: 59px;\n    text-align: center;\n    height: 75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return k=function(){return e},e}var C=m.a.div(k()),A=m.a.div(y()),I=m.a.div(S()),q=m.a.div(w()),z=m.a.div(F()),N=m.a.div(x()),P=m.a.div(j()),U=m.a.div(O()),G=m.a.div(v()),B=m.a.div(b()),J=m.a.img(E());t(58);function L(){return r.a.createElement(q,null,r.a.createElement("div",null,r.a.createElement(P,null,"LABEPHOTOS"),r.a.createElement(U,null,r.a.createElement(d,null,r.a.createElement(o.b,{to:"/signup"},"SIGN UP")),r.a.createElement(d,null,r.a.createElement(o.b,{to:"/signin"},"SIGN IN")))))}var R=t(22),T=t(29),D=t(8);function H(e){var n=Object(a.useState)(e),t=Object(D.a)(n,2),r=t[0],l=t[1];return{form:r,handleForm:function(e,n){var t=Object(T.a)(Object(T.a)({},r),{},Object(R.a)({},e,n));l(t)}}}function M(){var e=Object(u.a)(["\n    border-radius: 6px;\n    padding: 10px 6px;\n    width: 279px;\n    font-size: 20px;\n    border: none;\n"]);return M=function(){return e},e}var W=m.a.input(M()),$=t(93),K=t(45),Q=t.n(K),V=t(46),X=t.n(V),Y=t(47),Z=t.n(Y),_=Object($.a)({root:{cursor:"pointer"}});function ee(){var e=Object(i.f)();return r.a.createElement(A,null,r.a.createElement(I,null,r.a.createElement(o.b,{to:"/feed"},r.a.createElement(Q.a,null))),r.a.createElement(I,null,r.a.createElement(o.b,{to:"/profile"},r.a.createElement(X.a,null))),r.a.createElement(I,null,r.a.createElement(Z.a,{className:_().root,onClick:function(){localStorage.clear(),e.replace("/signin")}})))}var ne=t(48),te=t.n(ne).a.create({baseURL:"http://ec2-52-54-130-133.compute-1.amazonaws.com/"});function ae(){var e=Object(i.f)(),n=H({name:"",nickname:"",email:"",password:"",confirmPassword:""}),t=n.form,a=n.handleForm,l=function(e){var n=e.target,t=n.name,r=n.value;a(t,r)};return r.a.createElement(z,null,r.a.createElement(C,null,"SIGN UP"),r.a.createElement(N,null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t.password===t.confirmPassword?te.post("signup",t).then((function(n){alert("Usu\xe1rio criado!"),e.push("/signin")})).catch((function(e){alert("Algo deu errado!")})):alert("Senhas n\xe3o est\xe3o iguais.")}},r.a.createElement(G,null,r.a.createElement(W,{name:"name",placeholder:"name",onChange:l,value:t.name,required:!0}),r.a.createElement(W,{name:"nickname",placeholder:"nickname",onChange:l,value:t.nickname,required:!0}),r.a.createElement(W,{name:"email",placeholder:"email",type:"email",onChange:l,value:t.email,required:!0}),r.a.createElement(W,{name:"password",placeholder:"password",type:"password",onChange:l,value:t.password,required:!0}),r.a.createElement(W,{name:"confirmPassword",placeholder:"confirm password",type:"password",onChange:l,value:t.confirmPassword,required:!0}),r.a.createElement(g,null,"submit")))),r.a.createElement(ee,null))}function re(){var e=Object(i.f)(),n=H({email:"",password:""}),t=n.form,l=n.handleForm,c=Object(a.useState)(""),o=Object(D.a)(c,2),u=o[0],m=o[1],s=function(e){var n=e.target,t=n.name,a=n.value;l(t,a)};return r.a.createElement(z,null,r.a.createElement(C,null,"SIGN IN"),r.a.createElement(N,null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),te.post("signin",t).then((function(n){localStorage.setItem("token",n.data.token),localStorage.setItem("user",JSON.stringify(n.data.user)),e.push("feed")})).catch((function(e){m(e.message),alert("Algo deu errado!")}))}},r.a.createElement(G,null,r.a.createElement(W,{name:"email",type:"email",placeholder:"email",onChange:s,value:t.email,required:!0}),r.a.createElement(W,{name:"password",type:"password",placeholder:"password",onChange:s,value:t.password,required:!0}),r.a.createElement(g,null,"submit")),""!==u&&r.a.createElement("div",null,u))))}function le(){var e=Object(u.a)(["\n    color: #F00;\n    font-weight: bold;\n    padding-left: 1rem;\n"]);return le=function(){return e},e}function ce(){var e=Object(u.a)(["\n    color: #FFF;\n"]);return ce=function(){return e},e}var oe=m.a.p(ce()),ie=m.a.p(le());function ue(){var e=Object(i.f)(),n=Object(a.useState)(localStorage.getItem("token")),t=Object(D.a)(n,1)[0],l=Object(a.useState)([]),c=Object(D.a)(l,2),o=c[0],u=c[1];t||e.replace("/signin"),Object(a.useEffect)((function(){te.get("photo/",{headers:{Authorization:t}}).then((function(e){u(e.data.data)})).catch((function(n){alert("Reconecte na Aplica\xe7\xe3o"),e.replace("/signin")}))}),[]);return r.a.createElement(z,null,r.a.createElement(C,null,"LABEPHOTOS"),r.a.createElement(N,null,r.a.createElement(h,{onClick:function(){e.push("/createimage")}},"+"),o.length>0&&o.map((function(n){return r.a.createElement(B,{key:n.id,onClick:function(){return t=n.id,void e.push("/photo/".concat(t));var t}},r.a.createElement(J,{key:n.id,src:n.file}),r.a.createElement(ie,null,n.title))}))),r.a.createElement(ee,null))}function me(){var e=Object(i.f)(),n=Object(i.g)(),t=Object(a.useState)(localStorage.getItem("token")),l=Object(D.a)(t,1)[0],c=Object(a.useState)(""),o=Object(D.a)(c,2),u=o[0],m=o[1],s=Object(a.useState)([]),p=Object(D.a)(s,2),f=p[0],d=p[1];return l||e.replace("/signin"),Object(a.useEffect)((function(){te.get("photo/".concat(n.id),{headers:{Authorization:l}}).then((function(e){m(e.data.message),d(e.data.message.hashtag)})).catch((function(n){alert("Reconecte na Aplica\xe7\xe3o"),e.replace("/signin")}))}),[]),r.a.createElement(z,null,r.a.createElement(C,null,"IMAGE"),r.a.createElement(N,null,""!==u&&r.a.createElement("div",null,r.a.createElement(J,{src:u.file}),r.a.createElement(oe,null,u.title&&String(u.title).toUpperCase()),r.a.createElement(oe,null,f.length>0&&f.map((function(e){return r.a.createElement("span",{key:e},e," ")}))),r.a.createElement(oe,null,u.collection&&String(u.collection).toUpperCase()))),r.a.createElement(ee,null))}var se=t(26),pe=t.n(se);function fe(){var e=Object(i.f)(),n=Object(a.useState)(JSON.parse(localStorage.getItem("user"))),t=Object(D.a)(n,1)[0],l=Object(a.useState)(localStorage.getItem("token"));return Object(D.a)(l,1)[0]||e.replace("/signin"),r.a.createElement(z,null,r.a.createElement(C,null,"LABEPHOTOS"),r.a.createElement(N,null,r.a.createElement("div",null,r.a.createElement(pe.a,{style:{fontSize:180,color:"white"}}),r.a.createElement(oe,null,String(t.name).toUpperCase()),r.a.createElement(oe,null,String(t.username).toUpperCase()),r.a.createElement(oe,null,String(t.email).toUpperCase()))),r.a.createElement(ee,null))}function de(){var e=Object(i.f)(),n=localStorage.getItem("token"),t=H({title:"",file:"",collection:"",hashtag:""}),a=t.form,l=t.handleForm;n||e.replace("/signin");var c=function(e){var n=e.target,t=n.name,a=n.value;l(t,a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,r.a.createElement(C,null,"CREATE IMAGE"),r.a.createElement(N,null,r.a.createElement("form",{onSubmit:function(t){console.log(a),t.preventDefault(),te.post("photo/create",a,{headers:{Authorization:n}}).then((function(n){e.replace("/feed")})).catch((function(e){console.error(e)}))}},r.a.createElement(G,null,r.a.createElement(W,{name:"title",placeholder:"title",onChange:c,value:a.title,required:!0}),r.a.createElement(W,{name:"file",placeholder:"file",onChange:c,value:a.file,required:!0}),r.a.createElement(W,{name:"collection",placeholder:"collection",onChange:c,value:a.collection,required:!0}),r.a.createElement(W,{name:"hashtag",placeholder:"hashtag",onChange:c,value:a.hashtag,required:!0}),r.a.createElement(g,null,"submit")))),r.a.createElement(ee,null)))}function ge(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:L}),r.a.createElement(i.a,{path:"/signup",exact:!0,component:ae}),r.a.createElement(i.a,{path:"/signin",exact:!0,component:re}),r.a.createElement(i.a,{path:"/feed",exact:!0,component:ue}),r.a.createElement(i.a,{path:"/photo/:id",exact:!0,component:me}),r.a.createElement(i.a,{path:"/profile",exact:!0,component:fe}),r.a.createElement(i.a,{path:"/createimage",exact:!0,component:de}))}var he=function(){return r.a.createElement(o.a,null,r.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.0feaf299.chunk.js.map