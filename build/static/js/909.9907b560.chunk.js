"use strict";(self.webpackChunkviva=self.webpackChunkviva||[]).push([[909],{4167:function(e,a,s){s(2791);a.Z=s.p+"static/media/auth-success.e1dcaf4c36231f1b7fc2af7e81025699.svg"},7123:function(e,a,s){s.d(a,{W:function(){return t}});s(2791);var n=s(1343),i=s(184),t=function(e){var a=e.isOpen,t=e.handleModalClose;return(0,i.jsxs)(n.Y0,{isOpen:a,innerClass:"p_60",children:[(0,i.jsx)("img",{src:s(4167).Z,alt:"Success",className:"mb_50"}),(0,i.jsxs)("div",{className:"text-align_center mb_70",children:[(0,i.jsx)(n.ZT,{Type:"h2",className:"auth__title",text:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d!"}),(0,i.jsx)(n.ZT,{Type:"p",className:"auth__subtitle",text:"\u041f\u0430\u0440\u043e\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u0432\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d!"})]}),(0,i.jsx)(n.zx,{className:"btn w_full",design:"primary",text:"\u041e\u043a, \u0434\u0430\u043b\u044c\u0448\u0435",onClick:t})]})}},7909:function(e,a,s){s.r(a);var n=s(9439),i=s(2791),t=s(7689),l=s(5705),r=s(763),o=s(4357),c=s(8824),d=s(1966),m=s(7984),p=s(1343),u=s(7123),h=s(184);a.default=function(){(0,o.xB)().getLanguageValue;var e=(0,t.s0)(),a=(0,i.useState)(""),s=(0,n.Z)(a,2),x=s[0],v=s[1],j=(0,o.Ir)({uniqueName:"codeSent",onClose:function(){return e("/confirm-password/".concat(x),{state:{fromRegister:!0}})}});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.W,{isOpen:j.isOverlayOpen,handleModalClose:j.handleOverlayClose}),(0,h.jsxs)("div",{className:"auth__top mb_50 d-flex align-items-center justify-content-between",children:[(0,h.jsx)("div",{className:"logo",children:(0,h.jsx)(p.ZT,{Type:"h1",children:"Logo"})}),(0,h.jsx)("div",{className:"lang",children:(0,h.jsx)(m.S,{})})]}),(0,h.jsx)("div",{className:"auth__heading mb_30",children:(0,h.jsx)(p.ZT,{Type:"h1",className:"auth__title",text:"Ro'yxatdan o'tish"})}),(0,h.jsx)(d.Z.Form,{url:"/user/sign-up",className:"row g-3",onSuccess:function(e){v((0,r.get)(e,"data.phone_number")),j.handleOverlayOpen()},fields:[{name:"first_name",validations:[{type:"typeError"},{type:"required"}]},{name:"email",validations:[{type:"typeError"},{type:"required"}]},{name:"country-code",validationType:"object",validations:[{type:"required"}]},{name:"last_name",validations:[{type:"typeError"},{type:"required"}]},{name:"phone",validations:[{type:"phone"},{type:"required"}],onSubmitValue:function(e){return c.P6.$0.formatPhoneApi(e)}},{name:"password",validations:[{type:"required"}]},{name:"password_confirm",validations:[{type:"required"}],lazy:function(e,a){return e.oneOf([a.ref("password")],"Sizning parolingiz birinchisiga to'g'ri kelmayapti")}}],children:function(e){var a=e.isSubmitting;e.values,e.isValid,e.dirty;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(l.Rt,{name:"country-code",component:p.Iv.Ph,options:[{label:"O'zbekiston",value:"uz"}],placeholder:"Mamlakat"})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(l.Rt,{name:"phone",component:p.Iv.vy,placeholder:"+998",prepend:""})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(l.Rt,{name:"email",type:"email",component:p.Iv.oH,placeholder:"Elektron pochta"})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(l.Rt,{name:"first_name",component:p.Iv.oH,placeholder:"Ism"})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(l.Rt,{name:"last_name",component:p.Iv.oH,placeholder:"Familiya"})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsx)(l.Rt,{name:"password",component:p.CM,placeholder:"Parol"})}),(0,h.jsx)("div",{className:"col-12 mb_30",children:(0,h.jsx)(l.Rt,{name:"password_confirm",placeholder:"Parolni tasdiqlang",component:p.CM})}),(0,h.jsx)("div",{className:"col-12 mb_30",children:(0,h.jsx)(l.Rt,{name:"terms",component:p.Iv.Jg,label:(0,h.jsxs)(h.Fragment,{children:["\"Ro'yxatdan o'tish orqali siz bizning"," ",(0,h.jsx)("a",{className:"color_brand-blue",href:"#",children:"Ommaviy oferta"})," va ",(0,h.jsx)("a",{className:"color_brand-blue",href:"#",children:"Maxfiylik siyosatiga"})," ","rozilik bildirasiz."]})})}),(0,h.jsx)("div",{className:"col-12 mb_15",children:(0,h.jsx)(p.zx,{className:"btn w_full",design:"primary",type:"submit",text:"Ro'yxatdan o'tish",isLoading:a})})]})}}),(0,h.jsx)(p.ZT,{Type:"p",className:"text-align_center control__text",children:function(){return(0,h.jsxs)(h.Fragment,{children:["Ro'yxatdan o'tganmisiz?"," ",(0,h.jsx)(p.FX,{link:"/login",className:"color_brand-blue",text:"Tizimga kirish"})]})}})]})}}}]);
//# sourceMappingURL=909.9907b560.chunk.js.map