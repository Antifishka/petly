"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[20],{5923:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(5861),a=r(9439),o=r(4687),s=r.n(o),i=r(2791),c=r(9434),u=r(7689),l=r(5705),d=r(9230),p=r(1898),h=r(5218),m=r(9273),x=r(319),f=r(3682),y=r(6727),j=y.Ry().shape({email:y.Z_().matches(/^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,p.Z.t("email_match")).min(5,p.Z.t("at_least_five")).required(p.Z.t("required_field")),password:y.Z_().matches(/^\S+$/,p.Z.t("no_space")).min(7,p.Z.t("at_least_seven")).max(32,p.Z.t("max_tt")).required(p.Z.t("required_field")),confirm:y.Z_().oneOf([y.iH("password"),null],p.Z.t("Passwords_match")).required(p.Z.t("required_field"))}),Z=y.Ry().shape({name:y.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+(?: [a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490]+)*$/,p.Z.t("Only_cyrillic_latin")).required(p.Z.t("required_field")),city:y.Z_(),phone:y.Z_().matches(/^\+380\d{9}$/,"Invalid phone number(+380111111111)").min(13).max(13)}),g=r(3037),v=r(3997),_=r(1604),b=r(9001),C=r(3329),w=function(e){var t=(0,i.useState)(!1),r=(0,a.Z)(t,2),n=r[0],o=r[1],s=(0,i.useState)(!1),c=(0,a.Z)(s,2),u=c[0],l=c[1],p=(0,d.$G)().t;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_.ZP,{type:"email",name:"email",placeholder:p("Email"),errors:e.errors,touched:e.touched,values:e.values.email,required:!0,autoFocus:!0}),(0,C.jsx)(_.jj,{name:"email",component:"div"}),(0,C.jsxs)(v.ZC,{children:[(0,C.jsx)(_.ZP,{id:"password",name:"password",placeholder:p("Password"),type:n?"text":"password",errors:e.errors,touched:e.touched,values:e.values.password,required:!0}),(0,C.jsx)(v.yS,{type:"button",onClick:function(){o(!n)},children:n?(0,C.jsx)(v.rr,{}):(0,C.jsx)(v.OF,{})}),(0,C.jsx)(_.jj,{name:"password",component:"div"})]}),(0,C.jsxs)(v.ZC,{children:[(0,C.jsx)(_.ZP,{id:"confirm",type:u?"text":"password",name:"confirm",placeholder:p("Confirm_Password"),errors:e.errors,touched:e.touched,values:e.values.confirm,required:!0}),(0,C.jsx)(v.yS,{type:"button",onClick:function(){l(!u)},children:u?(0,C.jsx)(v.rr,{}):(0,C.jsx)(v.OF,{})}),(0,C.jsx)(_.jj,{name:"confirm",component:"div"})]}),(0,C.jsx)(_.zx,{type:"button",onClick:e.next,disabled:e.isValid,children:p("Next")}),(0,C.jsxs)(b.tw,{href:"https://petly-gd7x.onrender.com/api/users/google",children:[(0,C.jsx)(v.DW,{src:g.Z,alt:"Google"}),p("Signup_with_Google")]})]})},k=r(9593),E=r(5737),q=r.n(E),F=(r(8404),r(922)),S=function(e){return e.map((function(e){var t=Object.assign({},e);return Number(e.useCounty)?(t.value="".concat(e.cityEn,", ").concat(e.countyEn,", ").concat(e.stateEn," region"),t.label="".concat(e.cityEn,", ").concat(e.countyEn,", ").concat(e.stateEn," region")):(t.value="".concat(e.cityEn,", ").concat(e.stateEn," region"),t.label="".concat(e.cityEn,", ").concat(e.stateEn," region")),t}))},P={},z=function(e){var t=(0,d.$G)().t,r=(0,i.useState)(null),o=(0,a.Z)(r,2),c=o[0],u=o[1],l=(0,i.useState)([]),m=(0,a.Z)(l,2),x=m[0],f=m[1],y=(0,i.useState)(!1),j=(0,a.Z)(y,2),Z=j[0],g=j[1];return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c<3)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,g(!0),e.next=6,F.tF.get("api/cities?query=".concat(c));case 6:t=e.sent,r=t.data,f(S(r)),g(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("city error",e.t0),h.ZP.error(p.Z.t("Try_again"));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_.ZP,{type:"text",name:"name",placeholder:t("Name"),errors:e.errors,touched:e.touched,values:e.values.name,required:!0}),(0,C.jsx)(_.jj,{name:"name",component:"div"}),(0,C.jsx)(k.ZP,{onInputChange:function(e){e.length>=3&&u(e)},options:x,onChange:function(t){return e.forCity(t.value)},placeholder:t("City_region"),isSearchable:"true",isLoading:Z,noOptionsMessage:function(e){var r=e.inputValue;return t(r?"City_notfound":"City_letters")},styles:{control:function(e,t){return{display:"flex",padding:"4px",border:"1px solid #F59256",borderRadius:"20px",backgroundColor:"#FDF7F2",borderColor:t.isSelected?"#3CBC81":"#F59256"}}}}),(0,C.jsx)(_.jj,{name:"city",component:"div"}),(0,C.jsx)(q(),{name:"phone",type:"tel",className:P,onlyCountries:["ua"],country:"ua",countryCodeEditable:!1,errors:e.errors,value:e.values.phone,touched:e.touched,onChange:function(t,r,n){e.setFieldValue("phone","+".concat(t)),t.length<12?n.target.style.border="1px solid #E2001A":n.target.style.border="1px solid #3CBC81"}}),(0,C.jsx)(_.zx,{type:"submit",children:t("Register")}),(0,C.jsx)(_.zx,{type:"button",onClick:e.back,children:t("Back")})]})},V=r(9887),$={email:"",password:"",confirm:"",name:"",city:"",phone:""},R=function(){var e=(0,i.useState)(0),t=(0,a.Z)(e,2),r=t[0],o=t[1],y=(0,d.$G)().t,g=(0,u.TH)();(0,i.useEffect)((function(){document.title="Registration"}),[g]);var v=(0,c.I0)(),b=function(){o(r+1)},k=function(){o(r-1)},E=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a,o,i,c,u,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,a=t.password,o=t.name,i=t.city,c=t.phone,u=r.resetForm,i){e.next=5;break}return h.ZP.error(p.Z.t("City_required")),e.abrupt("return");case 5:if(13===c.length){e.next=8;break}return h.ZP.error(p.Z.t("Enter_phone")),e.abrupt("return");case 8:return e.next=10,v((0,m.IU)({email:n,password:a,name:o,city:i,phone:c}));case 10:if(l=e.sent,console.log("resultSignup",l),"auth/signup/fulfilled"!==l.type){e.next=15;break}return e.next=15,v((0,m.Ib)({email:n,password:a}));case 15:"auth/signup/rejected"===l.type&&h.ZP.error(l.payload.message),u();case 17:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return(0,C.jsx)(f.x,{as:"section",children:(0,C.jsx)(_.lY,{children:(0,C.jsx)(x.W,{children:(0,C.jsxs)(_.bh,{children:[(0,C.jsx)(_.zD,{children:y("Registration")}),(0,C.jsx)(l.J9,{initialValues:$,onSubmit:E,validationSchema:0===r?j:Z,children:function(e){var t=e.errors,n=e.touched,a=e.isValid,o=e.setFieldValue,s=e.values;return(0,C.jsxs)(_.gR,{autoComplete:"off",children:[0===r&&(0,C.jsx)(w,{next:b,errors:t,touched:n,isValid:!a,values:s}),1===r&&(0,C.jsx)(z,{back:k,errors:t,touched:n,values:s,setFieldValue:o,forCity:function(e){o("city",e)}})]})}}),(0,C.jsx)(V.Z,{link:"/login",question:y("Is_account"),pageName:y("Log_in")})]})})})})}}}]);
//# sourceMappingURL=20.58eba2af.chunk.js.map