var X=Object.defineProperty;var j=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var q=(t,e,o)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,J=(t,e)=>{for(var o in e||(e={}))Z.call(e,o)&&q(t,o,e[o]);if(j)for(var o of j(e))ee.call(e,o)&&q(t,o,e[o]);return t};import{_ as h,r as _,o as l,c,a as s,b as p,w as v,d as g,F as w,e as S,f as A,u as te,t as f,n as se,g as oe,h as E,i as T,j as ne,l as re,k as $,v as k,m as le,C as ie,p as ae,D as ce,P as ue,q as de,s as pe,x as me,y as fe,z as _e,A as ye,B as he,E as ge}from"./vendor.6a13980b.js";const ve=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};ve();const be={},we={class:"main-header flex items-center justify-between"},$e=s("div",{class:"logo header-logo"},[s("h2",null,[g("Toy"),s("span",{class:"clr-teal"},"App")])],-1),xe={class:"main-nav clean-list flex gap-2 fw-bold"},ke=g("Home"),Te=g("Toy"),Se=g("Dashboard"),Ce=g("About"),Ue=g("Login"),Re=g("User"),Ae=g("Reviews");function Ee(t,e){const o=_("router-link");return l(),c("header",we,[$e,s("ul",xe,[s("li",null,[p(o,{class:"link",to:"/"},{default:v(()=>[ke]),_:1})]),s("li",null,[p(o,{class:"link",to:"/toy"},{default:v(()=>[Te]),_:1})]),s("li",null,[p(o,{class:"link",to:"/dashboard"},{default:v(()=>[Se]),_:1})]),s("li",null,[p(o,{class:"link",to:"/about"},{default:v(()=>[Ce]),_:1})]),s("li",null,[p(o,{class:"link",to:"/login"},{default:v(()=>[Ue]),_:1})]),s("li",null,[p(o,{class:"link",to:"/user"},{default:v(()=>[Re]),_:1})]),s("li",null,[p(o,{class:"link",to:"/review"},{default:v(()=>[Ae]),_:1})])])])}var Be=h(be,[["render",Ee]]);const De={},Ie={class:"main-footer text-center"},Pe=s("p",null,"\xA9 Coffeerights 2022",-1),Me=[Pe];function Ve(t,e){return l(),c("footer",Ie,Me)}var Oe=h(De,[["render",Ve]]);const Fe={name:"app",created(){this.$store.dispatch({type:"loadToys"})},components:{appHeader:Be,appFooter:Oe}},Ne={class:"app-container container flex flex-col"};function Le(t,e,o,i,n,r){const a=_("app-header"),u=_("router-view"),d=_("app-footer");return l(),c("section",Ne,[p(a),p(u,{class:"flex-1"}),p(d)])}var ze=h(Fe,[["render",Le]]),Ge="/assets/toy.d3a330c4.svg";const je={},qe={class:"home flex flex-col gap-2 items-center justify-center"},Je=s("div",{class:"img"},[s("img",{src:Ge,alt:""})],-1),He={class:"info text-center flex flex-col gap-3 items-star"},We=s("div",null,[s("h1",null,"Welcome to my toy shop"),s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")],-1);function Ke(t,e,o,i,n,r){return l(),c("section",qe,[Je,s("div",He,[We,s("button",{onClick:e[0]||(e[0]=a=>t.$router.push("/toy")),class:"btn btn-info"},"explore now")])])}var Ye=h(je,[["render",Ke]]);const Qe={name:"about",data(){return{center:{lat:32.0853,lng:34.781769},markers:[{position:{lat:32.0853,lng:34.781769}},{position:{lat:31.768318,lng:35.213711}},{position:{lat:29.557669,lng:34.951923}}]}},methods:{panToBranch(t){this.center=t}}},Xe={class:"about flex flex-col gap-2 py-2"},Ze=s("h1",{class:"clr-teal uppercase py-2"},"Our Branches",-1),et={class:"btn-group"};function tt(t,e,o,i,n,r){const a=_("GMapMarker"),u=_("GMapCluster"),d=_("GMapMap");return l(),c("section",Xe,[Ze,p(d,{center:n.center,zoom:8,"map-type-id":"terrain"},{default:v(()=>[p(u,null,{default:v(()=>[(l(!0),c(w,null,S(n.markers,(m,D)=>(l(),A(a,{key:D,position:m.position,clickable:!0,draggable:!0,onClick:y=>n.center=m.position},null,8,["position","onClick"]))),128))]),_:1})]),_:1},8,["center"]),s("div",et,[s("button",{onClick:e[0]||(e[0]=m=>r.panToBranch({lat:32.0853,lng:34.781769})),class:"btn btn-info"}," Tel Aviv "),s("button",{onClick:e[1]||(e[1]=m=>r.panToBranch({lat:31.768318,lng:35.213711})),class:"btn btn-info"}," Jerusalem "),s("button",{onClick:e[2]||(e[2]=m=>r.panToBranch({lat:29.557669,lng:34.951923})),class:"btn btn-info"}," Eilat ")])])}var st=h(Qe,[["render",tt]]);const b={makeId:ot,debounce:lt,getRandomInt:Y,getRandomColor:rt,getLoremIpsum:nt,loadFromStorage:it,saveToStorage:at,loadFromSessionStorage:ct,saveToSessionStorage:ut};function ot(t=5){var e="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<t;i++)e+=o.charAt(Math.floor(Math.random()*o.length));return e}function Y(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function nt(t=5){const e=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"];let o="";for(;t>0;)o+=e[Y(0,e.length-1)]+" ",t--;return o.trim()}function rt(){for(var t="#",e=0;e<6;e++)t+=Math.floor(Math.random()*10);return t}function lt(t,e){let o;return function(...n){const r=()=>{clearTimeout(o),t(...n)};clearTimeout(o),o=setTimeout(r,e)}}function it(t){var e=localStorage.getItem(t);return e?JSON.parse(e):null}function at(t,e){localStorage[t]=JSON.stringify(e)}function ct(t){var e=sessionStorage.getItem(t);return e?JSON.parse(e):null}function ut(t,e){sessionStorage[t]=JSON.stringify(e)}const O={props:{label:String},data(){return{color:b.getRandomColor()}}},H=()=>{te(t=>({b3c50e4c:t.color}))},W=O.setup;O.setup=W?(t,e)=>(H(),W(t,e)):H;const dt=O;function pt(t,e,o,i,n,r){return l(),c("div",{class:se(["label px-2",o.label])},f(o.label),3)}var F=h(dt,[["render",pt]]);const mt={name:"toy-preview",props:{toy:Object},components:{customLabel:F}};function ft(t,e,o,i,n,r){return l(),c("section",null,[oe(t.$slots,"default")])}var Q=h(mt,[["render",ft]]);const _t={name:"toy-list",props:{toys:Array},components:{toyPreview:Q,CustomLabel:F}},yt={class:"toy-list py-1 clean-list grid gap-2"},ht=["onClick"],gt={class:"flex items-center justify-between gap-2"},vt={class:"uppercase"},bt={class:"clr-teal fw-bold"},wt={class:"labels flex flex-wrap items-center gap-1"};function $t(t,e,o,i,n,r){const a=_("custom-label"),u=_("toy-preview");return l(),c(w,null,[s("button",{onClick:e[0]||(e[0]=d=>t.$router.push("/toy/edit")),class:"btn btn-secondary"},"add a new toy"),s("ul",yt,[(l(!0),c(w,null,S(o.toys,d=>(l(),A(u,{key:d._id,toy:d},{default:v(()=>[s("li",{onClick:m=>t.$router.push(`/toy/${d._id}`),class:"toy-preview p-2 flex flex-col gap-1"},[s("div",gt,[s("h3",vt,f(d.name),1),s("p",bt,"$"+f(d.price),1)]),s("div",wt,[(l(!0),c(w,null,S(d.labels,m=>(l(),A(a,{key:m,label:m},null,8,["label"]))),128))])],8,ht)]),_:2},1032,["toy"]))),128))])],64)}var xt=h(_t,[["render",$t]]);const kt={name:"toy-filter",data(){return{filterBy:{name:"",labels:[],inStock:"",sortBy:""},isOpen:!0}},created(){this.setFilter=b.debounce(this.setFilter,500)},computed:{labels(){return this.$store.getters.labels}},methods:{setFilter(){this.$emit("set-filter",J({},this.filterBy))}}},Tt={class:"toy-filter py-2"},St={class:"form-control"},Ct=s("label",{for:"name",class:"form-label"},"Name",-1),Ut={class:"form-control flex flex-col"},Rt=s("label",{for:"stock",class:"form-label"},"In Stock",-1),At={class:"form-control flex flex-col"},Et=s("label",{for:"labels",class:"form-label"},"By labels",-1),Bt={class:"form-control flex flex-col"},Dt=s("label",{for:"sort",class:"form-label"},"Sort by",-1);function It(t,e,o,i,n,r){const a=_("el-input"),u=_("el-option"),d=_("el-select");return l(),c("section",Tt,[s("button",{onClick:e[0]||(e[0]=m=>n.isOpen=!n.isOpen),class:"btn btn-info"},f(n.isOpen?"Close":"Open")+" options ",1),n.isOpen?(l(),c("form",{key:0,onSubmit:e[5]||(e[5]=E(()=>{},["prevent"])),class:"form items-center gap-1 py-1"},[s("div",St,[Ct,p(a,{onInput:r.setFilter,modelValue:n.filterBy.name,"onUpdate:modelValue":e[1]||(e[1]=m=>n.filterBy.name=m),id:"name",class:"w-50",size:"large",placeholder:"Search by toy name..."},null,8,["onInput","modelValue"])]),s("div",Ut,[Rt,p(d,{onChange:r.setFilter,modelValue:n.filterBy.inStock,"onUpdate:modelValue":e[2]||(e[2]=m=>n.filterBy.inStock=m),id:"stock",size:"large"},{default:v(()=>[p(u,{label:"All",value:""}),p(u,{label:"In Stock",value:"true"}),p(u,{label:"Not in stock",value:"false"})]),_:1},8,["onChange","modelValue"])]),s("div",At,[Et,p(d,{multiple:"",onChange:r.setFilter,modelValue:n.filterBy.labels,"onUpdate:modelValue":e[3]||(e[3]=m=>n.filterBy.labels=m),"collapse-tags":"","collapse-tags-tooltip":"",id:"labels",size:"large"},{default:v(()=>[(l(!0),c(w,null,S(r.labels,m=>(l(),A(u,{key:m,label:m,value:m},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"])]),s("div",Bt,[Dt,p(d,{onChange:r.setFilter,modelValue:n.filterBy.sortBy,"onUpdate:modelValue":e[4]||(e[4]=m=>n.filterBy.sortBy=m),id:"sort",size:"large"},{default:v(()=>[p(u,{label:"Time",value:"time"}),p(u,{label:"Name",value:"name"}),p(u,{label:"Price",value:"price"})]),_:1},8,["onChange","modelValue"])])],32)):T("",!0)])}var Pt=h(kt,[["render",It]]);const Mt={name:"toy-app",created(){this.$store.dispatch({type:"loadToys"})},computed:{toys(){return this.$store.getters.toysToShow}},methods:{setFilter(t){const e=JSON.parse(JSON.stringify(t));this.$store.dispatch({type:"setFilter",filterBy:e})}},components:{toyList:xt,toyFilter:Pt}},Vt={class:"toy-app"};function Ot(t,e,o,i,n,r){const a=_("toy-filter"),u=_("toy-list");return l(),c("section",Vt,[p(a,{onSetFilter:r.setFilter},null,8,["onSetFilter"]),p(u,{toys:r.toys},null,8,["toys"])])}var Ft=h(Mt,[["render",Ot]]);const Nt="/api/";var Lt=ne.create({withCredentials:!0});const x={get(t,e){return I(t,"GET",e)},post(t,e){return I(t,"POST",e)},put(t,e){return I(t,"PUT",e)},delete(t,e){return I(t,"DELETE",e)}};async function I(t,e="GET",o=null){try{return(await Lt({url:`${Nt}${t}`,method:e,data:o,params:e==="GET"?o:null})).data}catch(i){throw console.log(`Had Issues ${e}ing to the backend, endpoint: ${t}, with data: ${o}`),console.dir(i),i.response&&i.response.status===401&&window.location.assign("/login"),i}}const K="toys_db",zt=["On wheels","Box game","Art","Baby","Doll","Puzzle","Outdoor"],B="toy",U={query:Gt,getById:jt,remove:qt,save:Jt,getEmptyToy:Ht,getlabels:Wt};Kt();async function Gt(t={}){return await x.get(B,t)}async function jt(t){return await x.get(`${B}/${t}`)}async function qt(t){return await x.delete(`${B}/${t}`)}async function Jt(t){return t._id?await x.put(`${B}/${t._id}`,t):await x.post(B,t)}function Ht(){return Promise.resolve({name:"",price:0,labels:[],createdAt:new Date,inStock:!0,reviews:[]})}function Wt(){return zt}function Kt(){let t=b.loadFromStorage(K);return(!t||!t.length)&&(t=[M("Doll",150,["On wheels","Doll"]),M("Truck",80,["Outdoor","Baby"]),M("Cards",150,["Puzzle","Art"])],b.saveToStorage(K,t)),t}function M(t,e,o,i){return{_id:b.makeId(),name:t,price:e,labels:o,inStock:!0,createdAt:new Date,reviews:[{_id:b.makeId(),txt:b.getLoremIpsum(5),createdAt:new Date},{_id:b.makeId(),txt:b.getLoremIpsum(5),createdAt:new Date},{_id:b.makeId(),txt:b.getLoremIpsum(5),createdAt:new Date}]}}const N="review",P={query:Yt,addReview:Qt,removeReview:Xt,getEmptyReview:Zt};async function Yt(t){return await x.get(N,t)}async function Qt(t){return await x.post(N,t)}async function Xt(t){return await x.delete(`${N}/${t}`,t)}function Zt(){return Promise.resolve({userId:"",toyId:"",content:"",rate:0})}const es="",C=ts();C.setup();function ts(){var t=null;return{async setup(){return t=re(es)},on(o,i){t.on(o,i)},off(o,i=null){!t||(i?t.off(o,i):t.removeAllListeners(o))},emit(o,i){t.emit(o,i)},terminate(){t=null}}}const ss={data(){return{msg:{from:this.$store.getters.loggedinUser?this.$store.getters.loggedinUser.username:"guest",txt:""},msgs:[],isTypeing:!1,msgTyping:"",topic:null}},async created(){const{id:t}=this.$route.params;this.topic=t,await C.setup(),C.emit("chat-topic",this.topic),C.on("history-msg",e=>this.msgs=e),C.on("chat-addMsg",this.addMsg)},destroyed(){this.msgs=[],C.off("chat-addMsg",this.addMsg),C.terminate()},methods:{addMsg(t){this.msgs.push(t)},sendMsg(){!this.msg.txt||(C.emit("chat-newMsg",this.msg),this.msg.txt="")}}},os=s("h1",null,"im working here",-1),ns={class:"chat-room"},rs=s("h1",null,"chat",-1),ls={key:0,class:"clean-list"},is=s("button",null,"Send",-1);function as(t,e,o,i,n,r){return l(),c(w,null,[os,s("section",ns,[rs,n.msgs?(l(),c("ul",ls,[(l(!0),c(w,null,S(n.msgs,(a,u)=>(l(),c("li",{key:u},f(a.from)+" : "+f(a.txt),1))),128))])):T("",!0),s("form",{onSubmit:e[1]||(e[1]=E((...a)=>r.sendMsg&&r.sendMsg(...a),["prevent"]))},[$(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>n.msg.txt=a)},null,512),[[k,n.msg.txt]]),is],32)])],64)}var cs=h(ss,[["render",as]]);const us={components:{toyPreview:Q,CustomLabel:F,chatRoom:cs},name:"toy-detail",data(){return{toy:null,reviewToAdd:null}},async created(){const{id:t}=this.$route.params;this.toy=await U.getById(t);const e=this.$store.getters.user;await this.$store.dispatch({type:"getReviews",filterBy:{toyId:this.toy._id}}),e&&(this.reviewToAdd=await P.getEmptyReview(),this.reviewToAdd.userId=e._id,this.reviewToAdd.toyId=this.toy._id)},computed:{user(){return this.$store.getters.user},reviews(){return this.$store.getters.reviews}},methods:{removeToy(){this.$store.dispatch({type:"removeToy",toyId:this.toy._id}).then(()=>{this.$router.push("/toy")})},async addReview(){!this.reviewToAdd.content||(await this.$store.dispatch({type:"addReview",review:this.reviewToAdd}),await this.$store.dispatch({type:"getReviews",filterBy:{toyId:this.toy._id}}))},async removeReview(t){await this.$store.dispatch({type:"removeReview",reviewId:t}),await this.$store.dispatch({type:"getReviews",filterBy:{toyId:this.toy._id}})}}},ds={key:0,class:"toy-detalis"},ps={class:"py-3 flex flex-col gap-1"},ms={class:"flex flex-col gap-1"},fs={class:"uppercase"},_s={class:"clr-teal fw-bold"},ys=s("span",{class:"fw-bold"},"In Stock:",-1),hs=s("span",{class:"fw-bold"},"Created At:",-1),gs={class:"labels flex flex-wrap items-center gap-1"},vs=s("h2",{class:"clr-teal"},"Reviews",-1),bs={class:"form-control my-1"},ws=s("label",{for:"txt",class:"form-label fw-600"},"Your review",-1),$s={class:"form-control my-1"},xs=s("label",{for:"rate",class:"form-label"},"Rate",-1),ks=s("button",{class:"btn btn-info"},"Add Review",-1),Ts={key:1,class:"my-1 flex flex-col gap-1"},Ss={class:"fw-600"},Cs=["onClick"],Us={key:2,class:"p-2 flex flex-col gap-1"},Rs=s("h4",null,"No reviews yet.",-1),As=s("p",null,"Be the first...",-1),Es=[Rs,As],Bs={key:3,class:"btn-group gap-1"};function Ds(t,e,o,i,n,r){var m,D;const a=_("custom-label"),u=_("toy-preview"),d=_("chat-room");return n.toy?(l(),c("section",ds,[p(u,{toy:n.toy},{default:v(()=>[s("section",ps,[s("div",ms,[s("h3",fs,f(n.toy.name),1),s("p",_s,"Price: $"+f(n.toy.price),1),s("p",null,[ys,g(" "+f(n.toy.inStock),1)]),s("p",null,[hs,g(" "+f(t.$filters.formatTime(n.toy.createdAt)),1)])]),s("div",gs,[(l(!0),c(w,null,S(n.toy.labels,y=>(l(),A(a,{key:y,label:y},null,8,["label"]))),128))])])]),_:1},8,["toy"]),p(d),vs,n.reviewToAdd&&r.user?(l(),c("form",{key:0,onSubmit:e[2]||(e[2]=E((...y)=>r.addReview&&r.addReview(...y),["prevent"])),class:"form"},[s("div",bs,[ws,$(s("textarea",{name:"txt",id:"txt",rows:"3",class:"form-input","onUpdate:modelValue":e[0]||(e[0]=y=>n.reviewToAdd.content=y),required:""},null,512),[[k,n.reviewToAdd.content]]),s("div",$s,[xs,$(s("input",{id:"rate",type:"number",class:"form-input",min:"0",max:"5","onUpdate:modelValue":e[1]||(e[1]=y=>n.reviewToAdd.rate=y)},null,512),[[k,n.reviewToAdd.rate,void 0,{number:!0}]])])]),ks],32)):T("",!0),(m=r.reviews)!=null&&m.length?(l(),c("div",Ts,[(l(!0),c(w,null,S(r.reviews,y=>{var z,G;return l(),c("article",{class:"review flex flex-col gap-1 items-start p-3",key:y._id},[s("p",Ss,f(y.content),1),s("p",null,"Rate: "+f(y.rate)+"\u2B50",1),s("p",null,"By: "+f((z=y.user)==null?void 0:z.username),1),(G=r.user)!=null&&G.isAdmin?(l(),c("button",{key:0,class:"btn btn-danger",onClick:Zo=>r.removeReview(y._id)}," Delete review ",8,Cs)):T("",!0)])}),128))])):(l(),c("div",Us,Es)),(D=r.user)!=null&&D.isAdmin?(l(),c("div",Bs,[s("button",{onClick:e[3]||(e[3]=y=>t.$router.push(`/toy/edit/${n.toy._id}`)),class:"btn btn-primary"}," edit toy "),s("button",{onClick:e[4]||(e[4]=(...y)=>r.removeToy&&r.removeToy(...y)),class:"btn btn-danger"},"delete toy"),s("button",{onClick:e[5]||(e[5]=y=>t.$router.push("/toy")),class:"btn btn-secondary"},"go back")])):T("",!0)])):T("",!0)}var Is=h(us,[["render",Ds]]);const Ps={name:"toy-edit",data(){return{toyToEdit:null,pageTitle:"Add Toy"}},created(){const{id:t}=this.$route.params;t?(U.getById(t).then(e=>this.toyToEdit=e),this.pageTitle="Edit Toy"):(U.getEmptyToy().then(e=>this.toyToEdit=e),this.pageTitle="Add Toy")},computed:{labels(){return this.$store.getters.labels}},methods:{saveToy(){this.$store.dispatch({type:"saveToy",toy:this.toyToEdit}).then(()=>{this.$router.push("/toy")})}}},Ms={key:0,class:"toy-edit py-2"},Vs={class:"py-2"},Os={class:"form-control"},Fs=s("label",{for:"name",class:"form-label"},"Name",-1),Ns={class:"form-control"},Ls=s("label",{for:"price",class:"form-label"},"Price",-1),zs={class:"form-control flex flex-col"},Gs=s("label",{for:"labels",class:"form-label"},"Labels",-1),js={class:"form-control flex flex-col"},qs=s("label",{for:"stock",class:"form-label"},"In Stock",-1),Js={class:"btn-group"},Hs=s("button",{type:"submit",class:"btn btn-success"},"save",-1);function Ws(t,e,o,i,n,r){const a=_("el-option"),u=_("el-select");return n.toyToEdit?(l(),c("section",Ms,[s("h1",Vs,f(n.pageTitle),1),s("form",{onSubmit:e[5]||(e[5]=E((...d)=>r.saveToy&&r.saveToy(...d),["prevent"])),class:"form"},[s("div",Os,[Fs,$(s("input",{id:"name",type:"text",class:"form-input","onUpdate:modelValue":e[0]||(e[0]=d=>n.toyToEdit.name=d)},null,512),[[k,n.toyToEdit.name]])]),s("div",Ns,[Ls,$(s("input",{id:"price",type:"text",class:"form-input","onUpdate:modelValue":e[1]||(e[1]=d=>n.toyToEdit.price=d)},null,512),[[k,n.toyToEdit.price,void 0,{number:!0}]])]),s("div",zs,[Gs,p(u,{multiple:"",modelValue:n.toyToEdit.labels,"onUpdate:modelValue":e[2]||(e[2]=d=>n.toyToEdit.labels=d),"collapse-tags-tooltip":"",id:"labels",size:"large"},{default:v(()=>[(l(!0),c(w,null,S(r.labels,d=>(l(),A(a,{key:d,value:d,label:d},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),s("div",js,[qs,$(s("input",{id:"stock",type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=d=>n.toyToEdit.inStock=d)},null,512),[[le,n.toyToEdit.inStock]])]),s("div",Js,[Hs,s("button",{onClick:e[4]||(e[4]=d=>t.$router.push("/toy")),class:"btn btn-danger-text"},"go back")])],32)])):T("",!0)}var Ks=h(Ps,[["render",Ws]]);ie.register(...ae);const Ys={name:"dashboard",data(){return{dataDoughnut:[],dataPie:[],labelsPie:[]}},created(){this.getPrices(),this.getPrecentage()},computed:{testDataDoughnut(){return{labels:this.$store.getters.labels,datasets:[{data:[...this.dataDoughnut],backgroundColor:["#f87171","#fbbf24","#34d399","#2dd4bf","#60a5fa","#818cf8","#f472b6"]}]}},testDataPie(){return{labels:[...this.labelsPie],datasets:[{data:[...this.dataPie],backgroundColor:["#f87171","#fbbf24","#34d399","#2dd4bf","#60a5fa","#818cf8","#f472b6"]}]}},options(){return{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Prices by labels"}}}}},methods:{getPrices(){const t=this.$store.getters.labels,e=this.$store.getters.toys;t.forEach(o=>{let i=e.reduce((n,r)=>(r.labels.includes(o)&&(n+=r.price),n),0);this.dataDoughnut.push(i)})},getPrecentage(){const t=this.$store.getters.toys,e={};t.forEach(o=>{o.labels.forEach(i=>{e[i]=e[i]?e[i]+1:1})});for(const o in e)this.labelsPie.push(o),this.dataPie.push(e[o]/t.length*100)}},components:{DoughnutChart:ce,PieChart:ue}},Qs={class:"dashboard py-2"};function Xs(t,e,o,i,n,r){const a=_("DoughnutChart"),u=_("PieChart");return l(),c("section",Qs,[s("div",null,[p(a,{chartData:r.testDataDoughnut,options:r.options},null,8,["chartData","options"])]),s("div",null,[p(u,{chartData:r.testDataPie,options:r.options},null,8,["chartData","options"])])])}var Zs=h(Ys,[["render",Xs]]);const eo={name:"login",data(){return{isSignup:!1,newUser:{fullname:"",username:"",password:""}}},computed:{user(){return this.$store.getters.user}},methods:{async login(){await this.$store.dispatch({type:"login",cred:this.newUser}),this.$router.push("/")},async signup(){await this.$store.dispatch({type:"signup",cred:this.newUser}),this.$router.push("/")},async logout(){await this.$store.dispatch({type:"logout"})}}},to={key:0,class:"login-page flex items-center justify-center"},so=s("div",{class:"text-center my-2"},[s("h2",{class:"clr-teal"},"Hello Again!"),s("p",null,"Lorem ipsum dolor sit amet consectetur.")],-1),oo={class:"form-control"},no=s("label",{for:"username",class:"form-label fw-600"},"Username",-1),ro={class:"form-control"},lo=s("label",{for:"password",class:"form-label fw-600"},"Password",-1),io=s("div",{class:"btn-group"},[s("button",{type:"submit",class:"btn btn-primary"},"Login")],-1),ao=s("div",{class:"text-center my-2"},[s("h2",{class:"clr-teal"},"We happy to see you here!"),s("p",null,"Lorem ipsum dolor sit amet consectetur.")],-1),co={class:"form-control"},uo=s("label",{for:"fullname",class:"form-label fw-600"},"Fullname",-1),po={class:"form-control"},mo=s("label",{for:"username",class:"form-label fw-600"},"Username",-1),fo={class:"form-control"},_o=s("label",{for:"password",class:"form-label fw-600"},"Password",-1),yo=s("div",{class:"btn-group"},[s("button",{type:"submit",class:"btn btn-primary"},"Sign In")],-1),ho={key:1,class:"flex flex-col gap-1 items-center justify-center"},go=g(" Hello "),vo={class:"fw-600 clr-teal captilize"};function bo(t,e,o,i,n,r){const a=de("focus");return r.user?(l(),c("section",ho,[s("h2",null,[go,s("span",vo,f(r.user.fullname),1)]),s("button",{onClick:e[9]||(e[9]=(...u)=>r.logout&&r.logout(...u)),class:"btn btn-danger"},"logout")])):(l(),c("section",to,[n.isSignup?T("",!0):(l(),c("form",{key:0,onSubmit:e[3]||(e[3]=E((...u)=>r.login&&r.login(...u),["prevent"])),class:"login form px-3 py-2"},[so,s("div",oo,[no,$(s("input",{id:"username",type:"text",class:"form-input",placeholder:"Enter you username","onUpdate:modelValue":e[0]||(e[0]=u=>n.newUser.username=u),autocomplete:"off"},null,512),[[k,n.newUser.username]])]),s("div",ro,[lo,$(s("input",{id:"password",type:"password",class:"form-input","onUpdate:modelValue":e[1]||(e[1]=u=>n.newUser.password=u),placeholder:"Enter your password"},null,512),[[k,n.newUser.password]])]),io,s("button",{onClick:e[2]||(e[2]=u=>n.isSignup=!n.isSignup),class:"my-1 btn btn-info-text"}," Don't have an account? Sign up now! ")],32)),n.isSignup?(l(),c("form",{key:1,onSubmit:e[8]||(e[8]=E((...u)=>r.signup&&r.signup(...u),["prevent"])),class:"signup form px-3 py-2"},[ao,s("div",co,[uo,$(s("input",{id:"fullname",type:"text",class:"form-input",placeholder:"Enter your fullname","onUpdate:modelValue":e[4]||(e[4]=u=>n.newUser.fullname=u),autocomplete:"off"},null,512),[[k,n.newUser.fullname],[a]])]),s("div",po,[mo,$(s("input",{id:"username",type:"text",class:"form-input",placeholder:"Enter you username","onUpdate:modelValue":e[5]||(e[5]=u=>n.newUser.username=u),autocomplete:"off"},null,512),[[k,n.newUser.username]])]),s("div",fo,[_o,$(s("input",{id:"password",type:"password",class:"form-input","onUpdate:modelValue":e[6]||(e[6]=u=>n.newUser.password=u),placeholder:"Enter your password"},null,512),[[k,n.newUser.password]])]),yo,s("button",{onClick:e[7]||(e[7]=u=>n.isSignup=!n.isSignup),class:"my-1 btn btn-info-text"}," Already have an account? Login now! ")],32)):T("",!0)]))}var wo=h(eo,[["render",bo]]);const $o={name:"user-details",data(){return{userReviews:null}},async created(){var e;const t=(e=this.$store.getters.user)==null?void 0:e._id;t&&(this.userReviews=await this.$store.dispatch({type:"getReviews",filterBy:{userId:t}}))},computed:{user(){return this.$store.getters.user}}},xo={key:0,class:"flex flex-col gap-1 my-2"},ko=g(" Reviews by "),To={class:"clr-teal"},So=g(" by "),Co={class:"clr-teal"},Uo=g(" about "),Ro={class:"clr-teal"},Ao={key:1,class:"text-center my-5 flex flex-col gap-2"},Eo=s("h2",null,"Login first to see your reviews",-1);function Bo(t,e,o,i,n,r){return r.user&&n.userReviews?(l(),c("section",xo,[s("h2",null,[ko,s("span",To,f(r.user.fullname),1)]),(l(!0),c(w,null,S(n.userReviews,a=>(l(),c("article",{class:"review p-2",key:a._id},[s("h1",null,[So,s("span",Co,f(a.user.username),1),Uo,s("span",Ro,f(a.toy.name),1)]),s("p",null,f(a.content),1),s("p",null,f(a.rate)+"\u2B50",1)]))),128))])):(l(),c("section",Ao,[Eo,s("button",{onClick:e[0]||(e[0]=a=>t.$router.push("/login")),class:"btn btn-primary-text"}," go to login page ")]))}var Do=h($o,[["render",Bo]]);const Io={name:"reviews-explore",data(){return{reviews:null}},async created(){this.reviews=await this.$store.dispatch({type:"getReviews"})}},Po={key:0,class:"flex flex-col gap-1 my-2"},Mo=s("h2",null,"All Reviews",-1),Vo=g(" by "),Oo={class:"clr-teal"},Fo=g(" about "),No={class:"clr-teal"};function Lo(t,e,o,i,n,r){return n.reviews?(l(),c("section",Po,[Mo,(l(!0),c(w,null,S(n.reviews,a=>(l(),c("article",{class:"review p-2",key:a._id},[s("h1",null,[Vo,s("span",Oo,f(a.user.username),1),Fo,s("span",No,f(a.toy.name),1)]),s("p",null,f(a.content),1),s("p",null,f(a.rate)+"\u2B50",1)]))),128))])):T("",!0)}var zo=h(Io,[["render",Lo]]);const Go=pe({history:me(),linkActiveClass:"active",routes:[{path:"/",name:"home",component:Ye},{path:"/toy",name:"toy",component:Ft},{path:"/toy/:id",name:"toy-details",component:Is},{path:"/toy/edit/:id?",name:"toy-edit",component:Ks},{path:"/dashboard",name:"dashboard",component:Zs},{path:"/about",name:"about",component:st},{path:"/login",name:"login",component:wo},{path:"/user",name:"user",component:Do},{path:"/review",name:"review",component:zo}]});var jo={state:{toys:[],filterBy:{name:"",inStock:"",labels:[],sortBy:""},labels:U.getlabels()},getters:{toys({toys:t}){return t},toysToShow({toys:t,filterBy:e}){return JSON.parse(JSON.stringify(t))},labels({labels:t}){return t}},mutations:{setToys(t,{toys:e}){t.toys=e},saveToy(t,{toy:e}){const o=t.toys.findIndex(i=>i._id===e._id);o!==-1?t.toys.splice(o,1,e):t.toys.push(e)},removeToy(t,{toyId:e}){const o=t.toys.findIndex(i=>i._id===e);t.toys.splice(o,1)},setFilter(t,{filterBy:e}){t.filterBy=e},setSort(t,{sortBy:e}){t.sortBy=e}},actions:{loadToys({commit:t,state:e}){U.query(e.filterBy).then(o=>{t({type:"setToys",toys:o})})},saveToy({commit:t},{toy:e}){U.save(e).then(o=>{t({type:"saveToy",toy:o})})},removeToy({commit:t},{toyId:e}){U.remove(e).then(()=>{t({type:"removeToy",toyId:e})})},setFilter({dispatch:t,commit:e},{filterBy:o}){e({type:"setFilter",filterBy:o}),t({type:"loadToys"})}}};const L="auth",V={login:qo,signup:Jo,logout:Ho,getGuestUser:Wo};async function qo(t){return await x.post(L+"/login",t)}async function Jo(t){return await x.post(L+"/signup",t)}async function Ho(){return await x.post(L+"/logout")}function Wo(){return{fullname:"Guest User",username:"guest",password:"guest",isAdmin:!0}}var Ko={state:{loggedinUser:b.loadFromSessionStorage("user")||null},getters:{loggedinUser(t){return t.loggedinUser},user(t){return t.loggedinUser}},mutations:{setUser(t,{user:e}){t.loggedinUser=e}},actions:{async login({commit:t},{cred:e}){try{const o=await V.login(e);t({type:"setUser",user:o}),b.saveToSessionStorage("user",o)}catch(o){console.log(o)}},async signup({commit:t},{cred:e}){try{const o=await V.signup(e);t({type:"setUser",user:o}),b.saveToSessionStorage("user",o)}catch(o){console.log(o)}},async logout({commit:t}){try{await V.logout(),t({type:"setUser",user:null}),sessionStorage.removeItem("user")}catch(e){console.log(e)}}}},Yo={state:{reviews:null},getters:{reviews(t){return t.reviews}},mutations:{setReviews(t,{reviews:e}){t.reviews=e},addReview(t,{review:e}){t.reviews.push(e)},removeReview(t,{reviewId:e}){const o=t.reviews.findIndex(i=>i._id===e);t.reviews.splice(o,1)}},actions:{async getReviews({commit:t},{filterBy:e}){try{const o=await P.query(e);return t({type:"setReviews",reviews:o}),o}catch(o){console.log("err :>> ",o)}},async addReview({commit:t},{review:e}){try{const o=await P.addReview(e);t({type:"addReview",review:o})}catch(o){console.log("err :>> ",o)}},async removeReview({commit:t},{reviewId:e}){try{await P.removeReview(e),t({type:"removeReview",reviewId:e})}catch(o){console.log("err :>> ",o)}}}};const Qo=fe({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{toyStore:jo,userStore:Ko,reviewStore:Yo}}),Xo={mounted(t){t.focus()}};const R=_e(ze);R.config.globalProperties.$filters={formatTime(t){return ye(new Date(t),new Date)}};R.directive("focus",Xo);R.use(he,{load:{key:"AIzaSyD0zFvHV9C-zIbuyqo_P8EyEmNlmlrdynM"}});R.use(ge);R.use(Go);R.use(Qo);R.mount("#app");
