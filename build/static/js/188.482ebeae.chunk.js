"use strict";(self.webpackChunkviva=self.webpackChunkviva||[]).push([[188],{7188:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var i=t(9439),a=t(2791),r=t(763),l=t(7689),o=t(1966),s=t(4357),c=t(5705),u=t(1343),m=t(1413),d=t(8824),p=t(184),f=function(e){var n=e.setFilter,t=(0,s.xB)().getLanguageValue;return(0,p.jsx)(o.Z.Form,{className:"filter",onSubmit:n,fields:[{name:"currency_id",validationType:"object",onSubmitValue:function(e){return(0,r.get)(e,"id")}},{name:"range",validationType:"object",onSubmitValue:function(e){return d.P6.$0.getRange(e)}},{name:"payment_type_id",validationType:"object",onSubmitValue:function(e){return(0,r.get)(e,"id")}}],children:function(e){e.setFieldValue;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.gN,{name:"search_filter",component:u.ay,className:"mr_15"}),(0,p.jsx)(c.gN,{name:"currency_id",component:u.Iv.qb,loadOptionsUrl:"/currency",placeholder:"Manzil",size:"xsm",getOptionLabel:function(e){return"label"in e?e.label:t((0,r.get)(e,"name"))},initialValue:[d._G.selectAll],className:"filter__control mr_15 min-width_150",onValueChange:function(e){return n((function(n){return(0,m.Z)((0,m.Z)({},n),{},{currency_id:(0,r.get)(e,"id")})}))}}),(0,p.jsx)(c.gN,{name:"payment_type_id",component:u.Iv.qb,loadOptionsUrl:"/payment-type",placeholder:"Kanallar",size:"xsm",className:"filter__control min-width_150",initialValue:[d._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:t((0,r.get)(e,"title"))},onValueChange:function(e){return n((function(n){return(0,m.Z)((0,m.Z)({},n),{},{payment_type_id:(0,r.get)(e,"id")})}))}}),(0,p.jsx)(c.gN,{name:"payment_type_id",component:u.Iv.qb,loadOptionsUrl:"/status",placeholder:"Holati",size:"xsm",className:"filter__control min-width_150 ml_15",initialValue:[d._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:t((0,r.get)(e,"title"))},onValueChange:function(e){return n((function(n){return(0,m.Z)((0,m.Z)({},n),{},{payment_type_id:(0,r.get)(e,"id")})}))}})]})}})},h=function(){var e=(0,a.useState)({}),n=(0,i.Z)(e,2),t=(n[0],n[1]);(0,s.Ir)({uniqueName:"addVendorModal",onClose:function(){return setIsUpdate(!1)}}),(0,l.s0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.CD,{links:[{link:"/dashboard",label:"Asosiy"},{label:"Mijozlar"}],title:"Mijozlar",btnText:"+ Mijoz qo'shish"}),(0,p.jsx)(u.iA,{emptyUiText:"Hozirgi vaqtda hech qanday Vendorlar yo'q",filterComponent:(0,p.jsx)(f,{setFilter:t}),editAction:function(){},deleteAction:function(){},columns:[{title:(0,p.jsx)(o.Z.Form,{url:"/user/sign-up",fields:[{name:"terms",validations:[{type:"typeError"},{type:"required"}]}],children:function(e){e.isSubmitting,e.values,e.isValid,e.dirty;return(0,p.jsx)(c.Rt,{name:"terms",component:u.Iv.Jg})}}),dataKey:"id",render:function(e){return(0,p.jsx)(o.Z.Form,{url:"/user/sign-up",onSuccess:function(e){},fields:[{name:"terms",validations:[{type:"typeError"},{type:"required"}]}],children:function(e){e.isSubmitting,e.values,e.isValid,e.dirty;return(0,p.jsx)(c.Rt,{name:"terms",component:u.Iv.Jg})}})}},{title:"FIO & Telefon",dataKey:"name",render:function(e){return(0,p.jsx)("div",{style:{width:"220px"},children:(0,p.jsxs)(u.FX,{link:"/dashboard/client/".concat(e),className:"d-flex table_user align-items-center justify-content-between",children:[(0,p.jsx)(u.qE,{style:{marginRight:"10px"},src:"data:image/png;base64,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"}),(0,p.jsxs)("div",{children:[(0,p.jsx)(u.ZT,{Type:"p",className:"fw_600",style:{marginBottom:"5px"},text:e}),(0,p.jsx)(u.ZT,{Type:"span",className:"fz_16",text:"+9987654321"})]})]})})}},{title:"Soni",dataKey:"order_count",className:"white-space_no-wrap",render:function(e){return e}},{title:"Daromad",dataKey:"income",render:function(e){return e}},{title:"Kanallar",dataKey:"channels",render:function(e){return e.map((function(e){return(0,p.jsx)("span",{className:"fz_14 ml_10",children:e})}))}},{title:"Oxirgi aktivlik",dataKey:"last_activity",render:function(e){return(0,p.jsx)("p",{style:{width:"130px"},children:e})}},{title:"ID raqami",dataKey:"id",render:function(e){return e}},{title:"Holat",dataKey:"status",render:function(e){return(0,p.jsx)(o.Z.Form,{url:"/user/sign-up",onSuccess:function(e){},children:function(n){n.isSubmitting,n.values,n.isValid,n.dirty;return(0,p.jsx)(c.Rt,{name:"terms-".concat(e),component:u.Iv.rs})}})}}],items:[{id:"#123a12",first_name:"Falonchi",last_name:"Falonchiyev",name:"Jonibek Negmurodov",phone:99895655443,email:"birnima@gmail.com",tarif:"121",filial:3,country:"Uzbekistan",status:"active",order_count:"40",income:"$ 1600",channels:["kanal1","kanal2"],last_activity:"12.12.2121 12:21"},{id:"#123a12",first_name:"Falonchi",last_name:"Falonchiyev",name:"Jonibek Negmurodov",phone:99895655443,email:"birnima@gmail.com",tarif:"121",filial:3,country:"Uzbekistan",status:"inactive",order_count:"40",income:"$ 1600",channels:["kanal1","kanal2"],last_activity:"12.12.2121 12:21"}]})]})}}}]);
//# sourceMappingURL=188.482ebeae.chunk.js.map