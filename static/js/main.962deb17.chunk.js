(this.webpackJsonpSwipeApp=this.webpackJsonpSwipeApp||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(37),o=n.n(i),c=n(69),s=(n(78),n(27)),l=n(127),d=n(124),h=n(125),p=n(123),j="LOAD_IMAGES_PENDING",u="LOAD_IMAGES_SUCCESS",x="LOAD_IMAGES_FAIL",b="UPDATE_HIRED_WORKERS",f="REMOVE_WORKER",m=n(61),g=n.n(m),O=n(62),v=n.n(O),y=n(2),w=function(e){var t=e.worker,n=e.index,r=e.swiped;return Object(y.jsx)(l.a,{sx:{position:"absolute",marginTop:.1*n,mr:.3*n},children:Object(y.jsx)(v.a,{preventSwipe:["up","down"],onSwipe:function(e){return r(e,t.name)},children:Object(y.jsx)(p.a,{elevation:4,sx:{p:2,borderRadius:"30px"},children:Object(y.jsx)(l.a,{sx:{position:"relative",height:200,width:200,backgroundImage:"url(".concat(t.image,")"),backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexFlow:"column",justifyContent:"flex-end",borderRadius:"25px"},children:Object(y.jsx)(l.a,{sx:{backgroundColor:"black",p:2,borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"},children:Object(y.jsx)(d.a,{sx:{mt:2,fontVariantCaps:"petite-caps",color:"white"},variant:"subtitle1",component:"label",children:t.name})})})})})})},k=Object(s.b)((function(e){return{workers:e.getImages.workers,isLoading:e.getImages.isLoading,error:e.getImages.error,hiredWorkers:e.updateWorkers.hiredWorkers,removedWorkers:e.updateWorkers.removedWorkers}}),null)((function(e){var t=e.workers,n=e.isLoading,r=e.error,i=e.hiredWorkers,o=e.removedWorkers,c=Object(s.c)(),j=function(e,t){c(function(e){return function(t){t({type:f,payload:e})}}(t)),"right"===e&&c(function(e){return function(t){t({type:b,payload:e})}}(t))},u=i.map((function(e,t){return Object(y.jsx)(d.a,{sx:{m:1,fontSize:"12px"},children:e},t)})),x=!n&&t.map((function(e,t){return Object(y.jsx)(w,{index:t,worker:e,swiped:j},t)})),m=Object(y.jsx)(l.a,{sx:{mt:5},children:Object(y.jsx)(d.a,{variant:"h4",component:"h4",sx:{fontVariantCaps:"all-small-caps"},children:"No More Workers"})});return!n&&r?Object(y.jsx)(a.a.Fragment,{children:Object(y.jsxs)(l.a,{style:{height:"90vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},children:[Object(y.jsx)(d.a,{sx:{fontVariantCaps:"all-petite-caps",mt:4},variant:"h2",component:"h1",children:"Pexel Film Cast"}),Object(y.jsx)(l.a,{sx:{display:"flex",flexFlow:"column",justifyContent:"center",height:"100%"},children:Object(y.jsx)(d.a,{sx:{fontVariantCaps:"all-petite-caps",mt:1,textAlign:"center"},variant:"h3",component:"h3",children:r})})]})}):n?Object(y.jsx)(a.a.Fragment,{children:Object(y.jsxs)(l.a,{style:{height:"90vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},children:[Object(y.jsx)(d.a,{sx:{fontVariantCaps:"all-petite-caps",mt:4},variant:"h2",component:"h1",children:"Pexel Film Cast"}),Object(y.jsx)(l.a,{sx:{display:"flex",flexFlow:"column",justifyContent:"center",height:"100%"},children:Object(y.jsx)(d.a,{sx:{fontVariantCaps:"all-petite-caps",mt:1},variant:"h3",component:"h3",children:"Loading..."})})]})}):Object(y.jsx)(h.a,{maxWidth:"sm",children:Object(y.jsxs)(l.a,{style:{height:"90vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},children:[Object(y.jsx)(d.a,{align:"center",sx:{fontVariantCaps:"all-petite-caps",mt:4},variant:"h2",component:"h1",children:"Pexel Film Cast"}),Object(y.jsx)(l.a,{sx:{width:"100%",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-between",height:"100%",mt:5,pb:1},children:o.length===t.length?m:Object(y.jsxs)(a.a.Fragment,{children:[x,Object(y.jsx)(l.a,{sx:{mt:35},children:Object(y.jsx)(d.a,{sx:{fontVariantCaps:"all-petite-caps"},variant:"subtitle1",component:"p",children:"<--- Swipe Left To Fire | Swipe Right To Hire ---\x3e"})})]})}),i.length>0&&Object(y.jsxs)(p.a,{elevation:1,sx:{p:1,position:"static",height:300,mb:4,width:"100%"},children:[Object(y.jsx)(d.a,{align:"center",children:"Hired:"}),Object(y.jsx)(l.a,{sx:{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"baseline",height:150,overflow:"scroll"},children:u})]})]})})})),C=n.p+"static/media/bg.86e61508.jpeg",W=n(126),I=function(){var e=Object(s.c)();return Object(r.useEffect)((function(){e((function(e){var t=[];e({type:j});var n=["face"].map((function(e){return new Promise((function(n,r){var a="https://api.pexels.com/v1/search?query=".concat(e);g()(a,{method:"GET",headers:{Authorization:"563492ad6f9170000100000138bfb0c81cc0430a8f1491f55451a0f6"}}).then((function(e){n(e.data.photos),e.data.photos.map((function(e,n){var r={};return r.name=e.photographer,r.image=e.src.large,t.push(r)}))})).catch((function(e){r(e),console.log(e)}))}))}));Promise.all(n).then((function(){e({type:u,payload:t})})).catch((function(t){console.log(t),e({type:x,payload:"Unable To Retrieve Images"})}))}))}),[e]),Object(y.jsxs)(h.a,{maxWidth:"sm",sx:{backgroundImage:"url(".concat(C,")"),backgroundSize:"cover"},children:[Object(y.jsx)(W.a,{}),Object(y.jsx)(k,{workers:[],isLoading:!0,error:"",hiredWorkers:[],removedWorkers:[]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},F=n(36),L=n(66),E=n(67),R=n(18),A=n(19),D={workers:[],error:"",isLoading:!1},P={hiredWorkers:[],removedWorkers:[]},T=Object(F.combineReducers)({getImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0,error:""});case u:return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,workers:t.payload});case x:return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},updateWorkers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(A.a)(Object(A.a)({},e),{},{hiredWorkers:[].concat(Object(R.a)(e.hiredWorkers),[t.payload])});case f:return Object(A.a)(Object(A.a)({},e),{},{removedWorkers:[].concat(Object(R.a)(e.removedWorkers),[t.payload])});default:return e}}}),V=Object(F.createStore)(T,Object(E.composeWithDevTools)(Object(F.applyMiddleware)(L.a)));o.a.render(Object(y.jsx)(s.a,{store:V,children:Object(y.jsx)(c.a,{children:Object(y.jsx)(I,{})})}),document.getElementById("root")),S()},78:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.962deb17.chunk.js.map