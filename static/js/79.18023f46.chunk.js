"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{6079:function(e,n,a){a.r(n),a.d(n,{default:function(){return v}});var t=a(5861),r=a(9439),s=a(7757),i=a.n(s),o=a(2791),l=a(9434),c=a(5705),m=a(9273),d=a(319),u=a(3682),p=a(6727),x=p.Ry({email:p.Z_().matches(/^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Error! Email must be in a format: aaaaa@aaa.aaa").min(12,"At least 12 symbols").max(50,"Maximum 50 symbols").required("Required field"),password:p.Z_().matches(/^\S+$/,"Space is not allowed").min(7,"At least 7 symbols").max(32,"Maximum 32 symbols").required("Required field"),confirm:p.Z_().oneOf([p.iH("password"),null],"Passwords must match").required("Required field")}),h=p.Ry({name:p.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490\s]*[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490][a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490\s]*$/,"Only cyrillic and latin letters are allowed").required("Required field"),city:p.Z_().required("Required field (City, region)"),phone:p.Z_().matches(/^\+380\d{9}$/,"Invalid phone number(+380111111111)").min(13).max(13).required("Required field")}),j=a(3037),f=a(6179),y=a(1604),w=a(9001),g=a(3329),b=function(e){var n=(0,o.useState)(!1),a=(0,r.Z)(n,2),t=a[0],s=a[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y.II,{type:"email",name:"email",placeholder:"Email"}),(0,g.jsx)(y.jj,{name:"email",component:"div"}),(0,g.jsxs)(f.ZC,{children:[(0,g.jsx)(y.II,{name:"password",placeholder:"Password",type:t?"text":"password"}),(0,g.jsx)(f.yS,{type:"button",onClick:function(){s(!t)},children:t?(0,g.jsx)(f.rr,{}):(0,g.jsx)(f.OF,{})}),(0,g.jsx)(y.jj,{name:"password",component:"div"})]}),(0,g.jsx)(y.II,{type:t?"text":"password",name:"confirm",placeholder:"Confirm Password"}),(0,g.jsx)(y.jj,{name:"confirm",component:"div"}),(0,g.jsx)(y.zx,{type:"button",onClick:e.next,disabled:!1,children:"Next"}),(0,g.jsxs)(w.t,{href:"https://petly-gd7x.onrender.com/api/users/google",children:[(0,g.jsx)(f.DW,{src:j.Z,alt:"Google"}),"Signup with Google"]})]})},Z=function(e){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y.II,{type:"text",name:"name",placeholder:"Name"}),(0,g.jsx)(y.jj,{name:"name",component:"div"}),(0,g.jsx)(y.II,{type:"text",name:"city",placeholder:"City, region"}),(0,g.jsx)(y.jj,{name:"city",component:"div"}),(0,g.jsx)(y.II,{type:"tel",name:"phone",placeholder:"Mobile phone"}),(0,g.jsx)(y.jj,{name:"phone",component:"div"}),(0,g.jsx)(y.zx,{type:"submit",children:"Register"}),(0,g.jsx)(y.zx,{type:"button",onClick:e.back,children:"Back"})]})},I=a(9887),k={email:"",password:"",confirm:"",name:"",city:"",phone:""},v=function(){var e=(0,o.useState)(0),n=(0,r.Z)(e,2),a=n[0],s=n[1],p=(0,l.I0)(),j=function(){var e=(0,t.Z)(i().mark((function e(n,a){var t,r,s,o,l,c,d,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,r=n.password,s=n.name,o=n.city,l=n.phone,c=a.resetForm,e.next=4,p((0,m.IU)({email:t,password:r,name:s,city:o,phone:l}));case 4:if("auth/signup/fulfilled"!==(d=e.sent).type){e.next=11;break}return console.log("resultSignup",d),e.next=9,p((0,m.Ib)({email:t,password:r}));case 9:u=e.sent,console.log("resultLogIn",u);case 11:c();case 12:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();return(0,g.jsx)(u.x,{as:"section",children:(0,g.jsx)(y.lY,{children:(0,g.jsx)(d.W,{children:(0,g.jsxs)(y.bh,{children:[(0,g.jsx)(y.zD,{children:"Registration"}),(0,g.jsx)(c.J9,{initialValues:k,onSubmit:j,validationSchema:0===a?x:h,autoComplete:"off",children:(0,g.jsxs)(y.gR,{autoComplete:"off",children:[0===a&&(0,g.jsx)(b,{next:function(){s((function(e){return e+1}))}}),1===a&&(0,g.jsx)(Z,{back:function(){s((function(e){return e-1}))}})]})}),(0,g.jsx)(I.Z,{link:"/login",question:"Already have an account??",pageName:"login"})]})})})})}}}]);
//# sourceMappingURL=79.18023f46.chunk.js.map