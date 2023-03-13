"use strict";(self.webpackChunkviva=self.webpackChunkviva||[]).push([[999],{5999:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t=a(9439),l=a(2791),i=a(763),r=a(8824),o=a(4357),s=a(1343),c=a(5705),d=a(1966),m=a(184),u=function(e){var n=e.isOpen,a=e.handleModalClose,t=e.onSuccess,l=e.values;return(0,m.jsx)(s.O1,{innerClass:"max-width_500",isOpen:n,handleModalClose:a,children:(0,m.jsx)(d.Z.Form,{url:"/vendors",method:"post",onSuccess:t,fields:[{name:"number",validations:[{type:"required"}],value:(0,i.get)(l,"number")}],children:function(e){var n=e.isSubmitting;e.values,e.setFieldValue;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"row g-4",children:[(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)(s.ZT,{Type:"h2",text:"Vendor qo'shish"})}),(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)(c.Rt,{name:"country",component:s.Iv.Ph,label:"Mamlakatlar",placehorder:"Mamlakatlar"})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(c.Rt,{name:"first_name",component:s.Iv.oH,label:"Ism",placehorder:"Ism"})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(c.Rt,{name:"last_name",component:s.Iv.oH,label:"Familiya",placehorder:"Familiya"})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(c.Rt,{name:"email",component:s.Iv.oH,label:"Email",placehorder:"Email"})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(c.Rt,{name:"phone",component:s.Iv.vy,label:"Telefon",prepend:""})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(c.Rt,{name:"tarif",component:s.Iv.Ph,label:"Ta'rif",placehorder:"Ta'rif"})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(c.Rt,{name:"status",component:s.Iv.Ph,label:"Holat",placehorder:"Holat"})})]}),(0,m.jsx)(s.zx,{design:"primary",type:"submit",className:"modal-btn-sm fz_16 btn mt_40",text:"Saqlash",isLoading:n})]})}})})},p=a(1413),h=function(e){var n=e.setFilter,a=(0,o.xB)().getLanguageValue;return(0,m.jsx)(d.Z.Form,{className:"filter",onSubmit:n,fields:[{name:"currency_id",validationType:"object",onSubmitValue:function(e){return(0,i.get)(e,"id")}},{name:"range",validationType:"object",onSubmitValue:function(e){return r.P6.$0.getRange(e)}},{name:"payment_type_id",validationType:"object",onSubmitValue:function(e){return(0,i.get)(e,"id")}}],children:function(e){e.setFieldValue;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.gN,{name:"search_filter",component:s.ay,className:"mr_15"}),(0,m.jsx)(c.gN,{name:"currency_id",component:s.Iv.qb,loadOptionsUrl:"/currency",placeholder:"Tarif",size:"xsm",getOptionLabel:function(e){return"label"in e?e.label:a((0,i.get)(e,"name"))},initialValue:[r._G.selectAll],className:"filter__control mr_15 min-width_150",onValueChange:function(e){return n((function(n){return(0,p.Z)((0,p.Z)({},n),{},{currency_id:(0,i.get)(e,"id")})}))}}),(0,m.jsx)(c.gN,{name:"payment_type_id",component:s.Iv.qb,loadOptionsUrl:"/payment-type",placeholder:"Mamlakat",size:"xsm",className:"filter__control min-width_150",initialValue:[r._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:a((0,i.get)(e,"title"))},onValueChange:function(e){return n((function(n){return(0,p.Z)((0,p.Z)({},n),{},{payment_type_id:(0,i.get)(e,"id")})}))}}),(0,m.jsx)(c.gN,{name:"payment_type_id",component:s.Iv.qb,loadOptionsUrl:"/status",placeholder:"Holati",size:"xsm",className:"filter__control min-width_150 ml_15",initialValue:[r._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:a((0,i.get)(e,"title"))},onValueChange:function(e){return n((function(n){return(0,p.Z)((0,p.Z)({},n),{},{payment_type_id:(0,i.get)(e,"id")})}))}})]})}})},f=function(){var e=(0,l.useState)({}),n=(0,t.Z)(e,2),a=(n[0],n[1]),c=(0,o.Ir)({uniqueName:"addVendorModal",onClose:function(){return setIsUpdate(!1)}});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{isOpen:c.isOverlayOpen,handleModalClose:c.handleOverlayClose,onSuccess:function(){c.handleOverlayClose()}}),(0,m.jsx)(s.CD,{links:[{link:"/dashboard",label:"Asosiy"},{label:"Vendorlar"}],title:"Vendorlar",btnText:"+ Vendor qo'shish",mainAction:c.handleOverlayOpen}),(0,m.jsx)(s.iA,{filterComponent:(0,m.jsx)(h,{setFilter:a}),emptyUiText:"Hozirgi vaqtda hech qanday Vendorlar yo'q",columns:[{title:"ID",dataKey:"id",render:function(e){return e}},{title:"Nomi",className:"white-space_no-wrap",dataKey:"name",render:function(e){return"".concat((0,i.get)(e,"first_name","")," ").concat((0,i.get)(e,"last_name",""))}},{title:"Telefon",dataKey:"phone",className:"white-space_no-wrap",render:function(e){return r.P6.$0.formatPhoneView((0,i.get)(e,"phone"))}},{title:"Email",dataKey:"email",render:function(e){return e}},{title:"Tarif",dataKey:"tarif",render:function(e){return e}},{title:"Filiallar",dataKey:"filial",render:function(e){return r.P6.$0.showDegree(e)}},{title:"Mamlakat",dataKey:"country",render:function(e){return e}},{title:"Holati",dataKey:"status",render:function(e){return(0,m.jsx)(s.qb,{message:e,type:"success"})}}],items:[{id:"1",first_name:"Falonchi",last_name:"Falonchiyev",phone:99895655443,email:"birnima@gmail.com",tarif:"121",filial:3,country:"Uzbekistan",status:"active"}]})]})}}}]);
//# sourceMappingURL=999.fd101f97.chunk.js.map