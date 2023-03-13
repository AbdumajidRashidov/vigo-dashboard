"use strict";(self.webpackChunkviva=self.webpackChunkviva||[]).push([[621],{4962:function(e,t,n){n.d(t,{r:function(){return c}});var i,a=n(2791),r=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(e,t){var n=e.title,o=e.titleId,c=s(e,r);return a.createElement("svg",l({width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},c),n?a.createElement("title",{id:o},n):null,i||(i=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0002 3.66683C6.95007 3.66683 3.66683 6.95007 3.66683 11.0002C3.66683 15.0503 6.95007 18.3335 11.0002 18.3335C15.0503 18.3335 18.3335 15.0503 18.3335 11.0002C18.3335 6.95007 15.0503 3.66683 11.0002 3.66683ZM1.8335 11.0002C1.8335 5.93755 5.93755 1.8335 11.0002 1.8335C16.0628 1.8335 20.1668 5.93755 20.1668 11.0002C20.1668 16.0628 16.0628 20.1668 11.0002 20.1668C5.93755 20.1668 1.8335 16.0628 1.8335 11.0002ZM11.0002 6.41683C11.5064 6.41683 11.9168 6.82723 11.9168 7.3335V10.6205L14.3983 13.102C14.7563 13.46 14.7563 14.0404 14.3983 14.3983C14.0404 14.7563 13.46 14.7563 13.102 14.3983L10.352 11.6483C10.1801 11.4764 10.0835 11.2433 10.0835 11.0002V7.3335C10.0835 6.82723 10.4939 6.41683 11.0002 6.41683Z",fill:"#002B48"})))}var c=a.forwardRef(o);n.p},2103:function(e,t,n){n.d(t,{B:function(){return o}});var i=n(9439),a=n(2791),r=n(4962),l=n(1343),s=n(184),o=function(){var e=(0,a.useState)(60),t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,a.useEffect)((function(){setInterval((function(){o((function(e){return 0!==e?e-1:e}))}),1e3)}),[]),(0,s.jsxs)("div",{className:"code-timer",children:[(0,s.jsx)(r.r,{className:"mr_10"}),(0,s.jsx)(l.ZT,{Type:"span",className:"code-timer__count",text:"0:".concat(n)})]})}},5621:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var i=n(9439),a=n(2791),r=(n(8308),n(7689)),l=n(1966),s=n(4357),o=n(5705),c=n(4962),u=n(1343),m=n(1413),d=n(763),p=n(8824),y=n(184),f=function(e){var t=e.setFilter,n=(0,s.xB)().getLanguageValue;return(0,y.jsx)(l.Z.Form,{className:"filter",onSubmit:t,fields:[{name:"currency_id",validationType:"object",onSubmitValue:function(e){return(0,d.get)(e,"id")}},{name:"range",validationType:"object",onSubmitValue:function(e){return p.P6.$0.getRange(e)}},{name:"payment_type_id",validationType:"object",onSubmitValue:function(e){return(0,d.get)(e,"id")}}],children:function(e){e.setFieldValue;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.gN,{name:"search_filter",component:u.ay,className:"mr_15"}),(0,y.jsx)(o.gN,{name:"currency_id",component:u.Iv.qb,loadOptionsUrl:"/currency",placeholder:"Buyurtma holati",size:"xsm",getOptionLabel:function(e){return"label"in e?e.label:n((0,d.get)(e,"name"))},initialValue:[p._G.selectAll],className:"filter__control mr_15 min-width_150 w_full",onValueChange:function(e){return t((function(t){return(0,m.Z)((0,m.Z)({},t),{},{currency_id:(0,d.get)(e,"id")})}))}}),(0,y.jsx)(o.gN,{name:"currency_id",component:u.Iv.qb,loadOptionsUrl:"/currency",placeholder:"Buyurtma turi",size:"xsm",getOptionLabel:function(e){return"label"in e?e.label:n((0,d.get)(e,"name"))},initialValue:[p._G.selectAll],className:"filter__control mr_15 min-width_150 w_full",onValueChange:function(e){return t((function(t){return(0,m.Z)((0,m.Z)({},t),{},{currency_id:(0,d.get)(e,"id")})}))}}),(0,y.jsx)(o.gN,{name:"payment_type_id",component:u.Iv.qb,loadOptionsUrl:"/payment-type",placeholder:"To'lov holati",size:"xsm",className:"filter__control min-width_150 w_full",initialValue:[p._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:n((0,d.get)(e,"title"))},onValueChange:function(e){return t((function(t){return(0,m.Z)((0,m.Z)({},t),{},{payment_type_id:(0,d.get)(e,"id")})}))}}),(0,y.jsx)(o.gN,{name:"payment_type_id",component:u.Iv.qb,loadOptionsUrl:"/status",placeholder:"Vaqti",size:"xsm",className:"filter__control min-width_150 ml_15 w_full",initialValue:[p._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:n((0,d.get)(e,"title"))},onValueChange:function(e){return t((function(t){return(0,m.Z)((0,m.Z)({},t),{},{payment_type_id:(0,d.get)(e,"id")})}))}})]})}})},x=(n(2103),function(){var e=(0,a.useState)({}),t=(0,i.Z)(e,2),n=(t[0],t[1]),l=(0,r.s0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.CD,{links:[{link:"/dashboard",label:"Asosiy"},{label:"Buyurtmalar"}],title:"Buyurtmalar",btnText:"+ Buyurtma qo'shish",mainAction:function(){return l("/dashboard/orders-add")}}),(0,y.jsx)(u.iA,{emptyUiText:"Hozirgi vaqtda hech qanday buyurtmalar yo'q",filterComponent:(0,y.jsx)(f,{setFilter:n}),editAction:function(){},deleteAction:function(){},columns:[{title:"No",dataKey:"no",render:function(e){return"1"}},{title:"ID (timer)",dataKey:"id",render:function(e){return(0,y.jsxs)("div",{style:{width:"100px"},className:"d-flex justify-content-between flex-column",children:[(0,y.jsx)(u.ZT,{Type:"p",className:"mb_10 ",style:{marginBottom:"5px"},text:e}),(0,y.jsxs)("div",{className:"timer d-flex align-items-center",children:[(0,y.jsx)(c.r,{className:"mr_5"}),(0,y.jsx)(u.ZT,{Type:"p",text:"2:02:00"})]})]})}},{title:"Mijoz (FIO)",dataKey:"name",render:function(e){return(0,y.jsx)("div",{style:{width:"180px"},children:(0,y.jsx)(u.FX,{link:"/dashboard/order/".concat(e),className:"d-flex table_user align-items-center justify-content-between",children:(0,y.jsxs)("div",{children:[(0,y.jsx)(u.ZT,{Type:"p",className:"table__heading mb_10",style:{marginBottom:"5px"},text:e}),(0,y.jsx)(u.ZT,{Type:"p",className:"tel",style:{marginBottom:"5px"},text:"+998916469095"})]})})})}},{title:"To'lov turi/holati",dataKey:"status",className:"white-space_no-wrap",render:function(e){return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.ZT,{Type:"p",className:"mb_10",text:"Naqd pul"}),(0,y.jsx)(u.qb,{type:"warning",message:e})]})}},{title:"Summasi",dataKey:"income",render:function(e){return(0,y.jsxs)("div",{style:{width:"150px"},children:[(0,y.jsx)("p",{className:"mb_10",children:e}),(0,y.jsx)(u.Ct,{text:"0% - ".concat(e),design:"primary"})]})}},{title:"Qabul qilingan",dataKey:"time",render:function(e){return(0,y.jsxs)("div",{style:{width:"180px"},children:[(0,y.jsx)(u.ZT,{Type:"p",className:"mb_10",text:"05.03.2023 12:03"}),(0,y.jsxs)("div",{className:"timer d-flex align-items-center",children:[(0,y.jsx)(c.r,{className:"mr_10"}),(0,y.jsx)(u.ZT,{Type:"p",text:"2:02:00"})]})]})}},{title:"Buyurtma turi/holati",dataKey:"type",render:function(e){return(0,y.jsxs)("div",{style:{width:"180px"},children:[(0,y.jsx)(u.ZT,{text:"Yetkazib berish",className:"mb_10",Type:"p"}),(0,y.jsx)(u.Ct,{text:"Kuryerga biriktirildi",design:"primary"})]})}},{title:"Qabul qiluvchi",dataKey:"id",render:function(e){return(0,y.jsxs)("div",{style:{width:"180px"},children:[(0,y.jsx)(u.ZT,{text:"Anvar Hoshimov",className:"mb_10",Type:"p"}),(0,y.jsx)(u.Ct,{text:"Kuryer",design:"primary"})]})}},{title:"Kanal/vaqti",dataKey:"channel",render:function(e){return(0,y.jsxs)("div",{style:{width:"180px"},children:[(0,y.jsx)(u.ZT,{text:"Telegram bot",className:"mb_10",Type:"p"}),(0,y.jsx)(u.ZT,{Type:"p",text:"2:02:00"})]})}}],items:[{id:"#123a12",first_name:"Falonchi",last_name:"Falonchiyev",name:"Jonibek Negmurodov",phone:99895655443,email:"birnima@gmail.com",tarif:"121",filial:3,country:"Uzbekistan",status:"to'lanmagan",order_count:"40",income:"$ 1600",channels:["kanal1","kanal2"],last_activity:"12.12.2121 12:21",payment_type:"Naqd"},{id:"#123a1212",payment_type:"Naqd",first_name:"Falonchi",last_name:"Falonchiyev",name:"Jonibek Negmurodov",phone:99895655443,email:"birnima@gmail.com",tarif:"121",filial:3,country:"Uzbekistan",status:"inactive",order_count:"40",income:"$ 1600",channels:["kanal1","kanal2"],last_activity:"12.12.2121 12:21"}]})]})})},8308:function(){}}]);
//# sourceMappingURL=621.9b8c2bee.chunk.js.map