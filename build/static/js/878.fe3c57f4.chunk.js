"use strict";(self.webpackChunkviva=self.webpackChunkviva||[]).push([[878],{1886:function(e,s,a){a.r(s),a.d(s,{default:function(){return f}});var i=a(9439),t=a(2791),l=(a(8308),a(4357)),n=a(1343),o=a(1413),r=a(5705),d=a(763),c=a(8824),m=a(1966),x=a(184),h=function(e){var s=e.setFilter,a=(0,l.xB)().getLanguageValue;return(0,x.jsx)(m.Z.Form,{className:"filter",onSubmit:s,fields:[{name:"currency_id",validationType:"object",onSubmitValue:function(e){return(0,d.get)(e,"id")}},{name:"range",validationType:"object",onSubmitValue:function(e){return c.P6.$0.getRange(e)}},{name:"payment_type_id",validationType:"object",onSubmitValue:function(e){return(0,d.get)(e,"id")}}],children:function(e){e.setFieldValue;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",style:{width:"100%"},children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",style:{width:"60%"},children:[(0,x.jsx)(r.gN,{name:"currency_id",component:n.Iv.qb,style:{width:"50%"},loadOptionsUrl:"/currency",placeholder:"Buyurtma turi",getOptionLabel:function(e){return"label"in e?e.label:a((0,d.get)(e,"name"))},initialValue:[c._G.selectAll],className:"mr_15",onValueChange:function(e){return s((function(s){return(0,o.Z)((0,o.Z)({},s),{},{currency_id:(0,d.get)(e,"id")})}))}}),(0,x.jsx)(r.gN,{name:"payment_type_id",component:n.Iv.qb,loadOptionsUrl:"/payment-type",placeholder:"Tanlang",style:{width:"50%"},size:"sm",initialValue:[c._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:a((0,d.get)(e,"title"))},onValueChange:function(e){return s((function(s){return(0,o.Z)((0,o.Z)({},s),{},{payment_type_id:(0,d.get)(e,"id")})}))}})]}),(0,x.jsx)(r.gN,{name:"payment_type_id",component:n.Iv.qb,loadOptionsUrl:"/status",placeholder:"Taom qidirish",size:"sm",style:{width:"40%"},className:"ml_15",initialValue:[c._G.selectAll],getOptionLabel:function(e){return"label"in e?e.label:a((0,d.get)(e,"title"))},onValueChange:function(e){return s((function(s){return(0,o.Z)((0,o.Z)({},s),{},{payment_type_id:(0,d.get)(e,"id")})}))}})]})})}})},p=function(e){var s=e.isOpen,a=e.handleModalClose,l=e.onSuccess,o=e.isUpdate,h=e.values,p=(0,t.useState)(1),u=(0,i.Z)(p,2),j=u[0],y=u[1],b=function(){y(1==j?1:j-1)},v=function(){y(j+1)},f=(0,t.useState)(!1),g=(0,i.Z)(f,2),N=g[0],T=g[1];return(0,x.jsx)(n.eW,{innerClass:"max-width_500",isOpen:s,handleModalClose:a,children:(0,x.jsx)(m.Z.Form,{url:o?"/food/".concat((0,d.get)(h,"id")):"/food",method:o?"put":"post",onSuccess:l,fields:[{name:"title",validationType:"object",isLanguageSchema:!0,value:(0,d.get)(h,"title")},{name:"description",validationType:"object",isLanguageSchema:!0,value:(0,d.get)(h,"description")},{name:"products",validationType:"array",value:o?c.j$.productAdapter((0,d.get)(h,"products")):[{product_id:"",quantity:""}],lazy:function(e,s){return e.of(s.object().shape({quantity:s.string(),product_id:s.object()}))},onSubmitValue:function(e){return e.map((function(e){return{product_id:(0,d.get)(e,"product_id.id"),quantity:c.P6.$0.formatCurrencyApi(e.quantity)}}))}},{name:"category_id",validationType:"object",validations:[{type:"typeError"},{type:"required"}],value:(0,d.get)(h,"category"),onSubmitValue:function(e){return(0,d.get)(e,"id")}},{name:"status",value:1}],children:function(e){var s=e.isSubmitting;e.values,e.setFieldValue,e.errors;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"row g-4",children:(0,x.jsxs)("div",{className:"food-modal",children:[(0,x.jsxs)("div",{className:"food-modal__header",children:[(0,x.jsx)("img",{className:"food-modal__img",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsx)("div",{className:"icons",children:(0,x.jsx)(n.zx,{onClick:function(){return T(!N)}})})]}),(0,x.jsx)(n.ZT,{Type:"h4",text:"Hamburger",className:"food-modal__title"}),(0,x.jsx)(n.ZT,{Type:"p",text:"Oshirma xamirdan bulochka, maxsus sous, aysberg, tuzlangan bodring, mol go'shtidan kotlet, pomidor, pishloq, shirin piyoz halqalari \xabBrunsvik\xbb",className:"food-modal__desc"}),(0,x.jsxs)("div",{className:"food-modal__type",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Turi"}),(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)(r.Rt,{component:n.Iv.EU,label:"Qo'shimchalar",name:"type"}),(0,x.jsx)(n.ZT,{Type:"span",text:"10 000 so\u2019m"})]})]}),(0,x.jsxs)("div",{className:"food-modal__ingridients",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Ingredientlar"}),(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)(r.Rt,{component:n.Iv.Jg,label:"Pishloqli",name:"ingredients"}),(0,x.jsx)(n.ZT,{Type:"span",text:"10 000 so\u2019m"})]}),(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)(r.Rt,{component:n.Iv.Jg,label:"Chili",name:"ingredients"}),(0,x.jsx)(n.ZT,{Type:"span",text:"7 000 so\u2019m"})]})]}),(0,x.jsxs)("div",{className:"food-modal__btns",children:[(0,x.jsxs)("div",{className:"add-favourite",children:[(0,x.jsx)(n.zx,{onClick:b,className:"btn",design:"secondary",text:"-"}),(0,x.jsx)("span",{children:j}),(0,x.jsx)(n.zx,{onClick:v,className:"btn",design:"primary",text:"+"})]}),(0,x.jsx)(n.zx,{design:"primary",type:"submit",className:"btn submit_btn",text:"26 000 so\u2019m qo\u2019shish",isLoading:s})]})]})})})}})})},u=function(e){var s=e.isOpen,a=e.isUpdate,i=e.handleModalClose,t=(e.onSuccess,e.values);return(0,x.jsx)(n.eW,{innerClass:"max-width_500",isOpen:s,handleModalClose:i,children:(0,x.jsx)(m.Z.Form,{url:a?"/payment-type/".concat((0,d.get)(t,"id")):"/payment-type",method:a?"put":"post",params:{include:"userDetail,userDetail.avatar,position"},className:"row g-3",onSuccess:function(e){},fields:[{name:"name",validations:[{type:"required"}]}],children:function(e){var s=e.isSubmitting;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(n.ZT,{Type:"h3",text:"Yangi mijoz qo'shish "})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(r.Rt,{name:"name",component:n.Iv.oH,placeholder:"FIO",label:"FIO"})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(r.Rt,{name:"phone",component:n.Iv.vy,placeholder:"Telefon",label:"Telefon"})}),(0,x.jsx)("div",{className:"col-6 mb_15",children:(0,x.jsx)(n.zx,{className:"btn w_full",design:"primary",type:"submit",text:a?"Tahrirlash":"Saqlash",isLoading:s})})]})}})})},j=function(e){var s=e.setFilter,a=(0,l.xB)().getLanguageValue;return(0,x.jsx)(m.Z.Form,{className:"filter mb_20",style:{padding:"0"},onSubmit:s,fields:[{name:"name",validationType:"object",onSubmitValue:function(e){return(0,d.get)(e,"id")}}],children:function(e){e.setFieldValue;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(r.gN,{name:"name",component:n.Iv.qb,loadOptionsUrl:"/currency",placeholder:"Mijoz qidirish",getOptionLabel:function(e){return"label"in e?e.label:a((0,d.get)(e,"name"))},initialValue:[c._G.selectAll],className:"filter__control w_full p_0",onValueChange:function(e){return s((function(s){return(0,o.Z)((0,o.Z)({},s),{},{currency_id:(0,d.get)(e,"id")})}))}})})}})},y=function(e){var s=e.isOpen,a=e.isUpdate,i=e.handleModalClose,t=e.values;return(0,x.jsx)(n.eW,{innerClass:"max-width_500",isOpen:s,handleModalClose:i,children:(0,x.jsx)(m.Z.Form,{url:a?"/payment-type/".concat((0,d.get)(t,"id")):"/payment-type",method:a?"put":"post",params:{include:"userDetail,userDetail.avatar,position"},className:"row g-3",onSuccess:function(e){},fields:[{name:"name",validations:[{type:"required"}]}],children:function(e){var s=e.isSubmitting;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(n.ZT,{Type:"h3",text:"Izoh qo'shish "})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(r.Rt,{name:"name",component:n.Iv.gx,placeholder:"Izoh",size:"textarea",label:"Izoh"})}),(0,x.jsx)("div",{className:"col-6 mb_15",children:(0,x.jsx)(n.zx,{className:"btn w_full",design:"primary",type:"submit",text:a?"Tahrirlash":"Saqlash",isLoading:s})})]})}})})},b=function(){var e=(0,t.useState)(1),s=(0,i.Z)(e,2),a=s[0],l=s[1];return(0,x.jsxs)("div",{className:"basket__card",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"basket__card-header",children:(0,x.jsx)(n.ZT,{Type:"h4",text:"Pishloqli lavash"})}),(0,x.jsx)(n.ZT,{Type:"p",className:"text",text:"Standart, chili, ketchup lavash"})]}),(0,x.jsxs)("div",{className:"basket__card-bottom",children:[(0,x.jsx)("p",{className:"price",children:"26 000 so\u2019m"}),(0,x.jsxs)("div",{className:"add-favourite",children:[(0,x.jsx)(n.zx,{onClick:function(){l(1==a?1:a-1)},className:"btn",design:"secondary",text:"-"}),(0,x.jsx)("span",{children:a}),(0,x.jsx)(n.zx,{onClick:function(){l(a+1)},className:"btn",design:"primary",text:"+"})]})]})]})},v=function(){return(0,x.jsx)("div",{className:"basket__card",children:(0,x.jsxs)("ul",{className:"basket__list",children:[(0,x.jsxs)("li",{className:"basket__list-item",children:[(0,x.jsx)(n.ZT,{Type:"p",text:"Buyurtma miqdori:"}),(0,x.jsx)(n.ZT,{Type:"h4",text:"84 000 so'm"})]}),(0,x.jsxs)("li",{className:"basket__list-item",children:[(0,x.jsx)(n.ZT,{Type:"p",text:"Soliq:"}),(0,x.jsx)(n.ZT,{Type:"h4",text:"4 000 so'm"})]}),(0,x.jsxs)("li",{className:"basket__list-item",children:[(0,x.jsx)(n.ZT,{Type:"p",text:"Yetkazib berish:"}),(0,x.jsx)(n.ZT,{Type:"h4",text:"14 000 so'm"})]}),(0,x.jsxs)("li",{className:"basket__list-item total-summ",children:[(0,x.jsx)(n.ZT,{Type:"p",text:"Umumiy summa:"}),(0,x.jsx)(n.ZT,{Type:"h4",text:"110 000 so'm"})]})]})})},f=function(){var e=(0,t.useState)("Barchasi"),s=(0,i.Z)(e,2),a=s[0],o=s[1],r=(0,l.Ir)({uniqueName:"addOrderModal",onClose:function(){return setIsUpdate(!1)}}),d=(0,l.Ir)({uniqueName:"addNewClientModal",onClose:function(){return setIsUpdate(!1)}}),c=(0,l.Ir)({uniqueName:"addNewCommentModal",onClose:function(){return setIsUpdate(!1)}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p,{isOpen:r.isOverlayOpen,handleModalClose:r.handleOverlayClose,onSuccess:function(){r.handleOverlayClose()}}),(0,x.jsx)(u,{isOpen:d.isOverlayOpen,handleModalClose:d.handleOverlayClose,onSuccess:function(){d.handleOverlayClose()}}),(0,x.jsx)(y,{isOpen:c.isOverlayOpen,handleModalClose:c.handleOverlayClose,onSuccess:function(){c.handleOverlayClose()}}),(0,x.jsx)(n.CD,{links:[{link:"/dashboard",label:"Asosiy"},{link:"/dashboard/orders",label:"Buyurtmalar"},{label:"Buyurtma qo'shish"}],title:"Buyurtma qo'shish"}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-8",children:[(0,x.jsx)(h,{}),(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)(n.pE,{className:"mb_20 mt_20",labels:["Barchasi","Somsalar","Ichimliklar","Gazaklar","Desertlar","Shirinliklar"],currentLabel:a,onPaneChange:function(e,s){return o(e)}}),(0,x.jsx)("div",{className:"cards",children:"Barchasi"===a?(0,x.jsxs)("div",{className:"row all",children:[(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",onClick:r.handleOverlayOpen,children:[(0,x.jsx)("img",{width:"100%",src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Pizza"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",onClick:r.handleOverlayOpen,children:[(0,x.jsx)("img",{width:"100%",src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Pizza"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Pizza"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Pizza"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Pizza"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Pizza"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})})]}):"Somsalar"===a?(0,x.jsxs)("div",{className:"row somsalar",children:[(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",onClick:r.handleOverlayOpen,children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})}),(0,x.jsx)("div",{className:"col-3",children:(0,x.jsxs)("div",{className:"order-card mr-2",children:[(0,x.jsx)("img",{width:"100%",src:"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c=",alt:""}),(0,x.jsxs)("div",{className:"order-card_body",children:[(0,x.jsx)(n.ZT,{Type:"h4",text:"Somsa"}),(0,x.jsx)(n.ZT,{Type:"p",text:"25 000 so'm"})]})]})})]}):""})]})})]}),(0,x.jsx)("div",{className:"col-4",children:(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)(j,{}),(0,x.jsx)(n.zx,{onClick:d.handleOverlayOpen,design:"primary",className:"btn mb_20",style:{margin:"o auto"},text:"+ Yangi mijoz qo'shish"}),(0,x.jsx)(b,{}),(0,x.jsx)(b,{}),(0,x.jsx)(b,{}),(0,x.jsx)(n.zx,{onClick:c.handleOverlayOpen,design:"primary",className:"btn mt_20",style:{margin:"o auto"},text:"+ Buyurtmaga izoh qo'shish"}),(0,x.jsx)(v,{}),(0,x.jsxs)("div",{className:"btns d-flex",children:[(0,x.jsx)(n.zx,{onClick:c.handleOverlayOpen,design:"primary",className:"btn mr_20",text:"X"}),(0,x.jsx)(n.zx,{onClick:c.handleOverlayOpen,design:"primary",className:"btn w_full",style:{margin:"o auto"},text:"Tasdiqlash"})]})]})})]})]})}},8308:function(){}}]);
//# sourceMappingURL=878.fe3c57f4.chunk.js.map