(this["webpackJsonpfirebase-basic"]=this["webpackJsonpfirebase-basic"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(33),s=n.n(c),i=n(10),u=n(21),o=n(6),l=n(36),j=n(24);n(41),n(54),n(53);j.a.initializeApp({apiKey:"AIzaSyDE9q2dJaO91vFik3fihYoPWPNJXxXlj20",authDomain:"fir-basic-50cd2.firebaseapp.com",projectId:"fir-basic-50cd2",storageBucket:"fir-basic-50cd2.appspot.com",messagingSenderId:"463531922841",appId:"1:463531922841:web:cbee9976b72162b229af08"});var b=j.a,d=j.a.auth(),f=j.a.firestore(),p=j.a.storage(),O=n(8),h=n.n(O),m=n(16),x=n(12),v=n(22),g=n(1),w=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),j=l[0],b=l[1],d=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure? you want to delete this nweet?")){e.next=7;break}return e.next=4,f.doc("nweets/".concat(t.id)).delete();case 4:if(!t.attachmentUrl){e.next=7;break}return e.next=7,p.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){u((function(e){return!e})),b(t.text)},w=function(){var e=Object(m.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),f.doc("nweets/".concat(t.id)).update({text:j}),u(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:w,className:"container nweetEdit",children:[Object(g.jsx)("input",{type:"text",placeholder:"Edit Nweet",value:j,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl}),n&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:O,children:Object(g.jsx)(x.a,{icon:v.a})}),Object(g.jsx)("span",{onClick:d,children:Object(g.jsx)(x.a,{icon:v.d})})]})]})})},y=n(56),N=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],j=o[1],b=Object(a.useRef)(),d=function(){var e=Object(m.a)(h.a.mark((function e(n){var a,r,i,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=p.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,f.collection("nweets").add(u);case 15:s(""),j(""),b.current.value="";case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:d,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;s(t)},value:c,placeholder:"what's on your mind?",maxLength:120,className:"factoryInput__input"}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(x.a,{icon:v.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;j(t)},n.readAsDataURL(t)},ref:b,style:{opacity:0}}),l&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){j(""),b.current.value=""},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(x.a,{icon:v.c})]})]})]})},k=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){f.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(N,{userObj:t}),Object(g.jsx)("div",{children:c.map((function(e){return Object(g.jsx)(w,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],o=s[1],l=Object(a.useState)(!0),j=Object(i.a)(l,2),b=j[0],f=j[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),x=O[0],v=O[1],w=function(e){var t=e.target,n=t.value,a=t.name;"email"===a?r(n):"password"===a&&o(n)},y=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=12;break}return e.next=5,d.createUserWithEmailAndPassword(n,u);case 5:return e.next=7,d.currentUser.sendEmailVerification();case 7:window.alert("email\uc5d0\uc11c \uc778\uc99d\uba54\uc77c\uc744 \ud1b5\ud574 \uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694!"),r(""),o(""),e.next=23;break;case 12:return e.next=14,d.signInWithEmailAndPassword(n,u);case 14:return e.next=16,d.currentUser.emailVerified;case 16:if(e.sent){e.next=23;break}if(!window.confirm("email \uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc778\uc99d \uba54\uc77c\uc774 \uc548\ubcf4\uc778\ub2e4\uba74 \ud655\uc778\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694!")){e.next=22;break}return e.next=22,d.currentUser.sendEmailVerification();case 22:d.signOut();case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(1),v(e.t0.message);case 28:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:y,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(g.jsx)("input",{type:"submit",value:b?"Create Account":"Sign In",className:"authInput authSubmit"}),x&&Object(g.jsx)("span",{className:"authError",children:x})]}),Object(g.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:b?"Sign In":"Create Account"})]})},I=n(23),C=function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new b.auth.GoogleAuthProvider:"github"===n&&(a=new b.auth.GithubAuthProvider),e.next=4,d.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(x.a,{icon:I.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(S,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(g.jsx)(x.a,{icon:I.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(g.jsx)(x.a,{icon:I.a})]})]})]})},A=function(e){var t=e.userObj,n=e.refreshUser,r=Object(o.f)(),c=Object(a.useState)(t.displayName),s=Object(i.a)(c,2),u=s[0],l=s[1],j=function(){var e=Object(m.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","desc").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j()}),[]);var b=function(){var e=Object(m.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=4;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(g.jsx)("input",{type:"text",placeholder:"display Name",value:u,onChange:function(e){var t=e.target.value;l(t)},autoFocus:!0,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){d.signOut(),r.push("/")},children:"Sign Out"})]})},F=n(35),U=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(x.a,{icon:I.c,color:"#04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(x.a,{icon:F.a,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},P=function(e){var t=e.isSignIn,n=e.userObj,a=e.refreshUser;return Object(g.jsxs)(u.a,{children:[t&&Object(g.jsx)(U,{userObj:n}),Object(g.jsx)(o.c,{children:t?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:{maxWidt:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(k,{userObj:n})}),Object(g.jsx)(o.a,{exact:!0,path:"/profile",children:Object(g.jsx)(A,{userObj:n,refreshUser:a})})]})}):Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(C,{})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){d.onAuthStateChanged((function(e){e&&e.emailVerified?o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}):o(null),r(!0)}))}),[]),Object(g.jsx)(g.Fragment,{children:n?Object(g.jsx)(P,{isSignIn:Boolean(u),userObj:u,refreshUser:function(){var e=d.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing..."})};n(51);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.5944de7d.chunk.js.map