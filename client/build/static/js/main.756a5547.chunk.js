(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(29),l=a.n(s),o=(a(92),a(25)),c=a(36),i=a(10),u=a(14),m=a(15),p=a(18),h=a(16),d=a(17),E=a(128),f=a(134),g=a(77),v=a(79),y=a(78),b=a(129),w=a(130),O=a(80),k=a(131),S=a(11),j=a(12),N="GET_ERRORS",C=function(){return function(e){e({type:"CLEAR_ERRORS",payload:{}})}},U=function(){return function(e){e({type:"CLEAR_MESSAGE",payload:{}})}},T=function(){return function(e){e({type:"CLEAR_SHORT_URL",payload:{}})}},L=a(6),x=a.n(L),P=a(27),_=a(13),R=a.n(_),A=a(9),D=(a(57),a(34),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.clearErrors(),a.props.clearMessages(),a.props.clearShortUrl(),a.props.shortenAnonymousUser({url:a.state.url}),a.setState({url:""})},a.onCopy=function(){navigator.clipboard.writeText(a.shortUrl.current.value)},a.state={url:"",shortUrl:"",errors:{},message:{}},a.shortUrl=n.a.createRef(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.message&&this.setState({message:e.message}),e.errors&&this.setState({errors:e.errors,message:{}}),this.setState({shortUrl:e.urlData.shortUrl})}},{key:"componentWillUnmount",value:function(){this.props.clearErrors(),this.props.clearMessages(),this.props.clearShortUrl()}},{key:"render",value:function(){var e=this,t=this.state,a=t.shortUrl,r=t.errors,s=t.message;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,null,r.error&&n.a.createElement("div",{className:"margin-top-20 alert alert-danger",role:"alert"},r.error),s.success&&n.a.createElement("div",{className:"margin-top-20 alert alert-success",role:"alert"},s.success),n.a.createElement(f.a,{className:"margin-top-50",onSubmit:this.onSubmit},n.a.createElement(g.a,{controlId:""},n.a.createElement(v.a,null,"Shorten URL"),n.a.createElement(y.a,{type:"text",placeholder:"Enter URL",name:"url",value:this.state.url,onChange:this.onChange}),n.a.createElement(f.a.Text,null,"This short URL will be valid only for one month, If you want short URL for long time then just sign in")),n.a.createElement(b.a,{type:"submit"}," Shorten ")),a&&n.a.createElement("div",{className:"margin-top-50"},n.a.createElement(w.a,null,n.a.createElement(O.a,{md:{span:10,offset:1}},n.a.createElement("form",{className:"form-inline"},n.a.createElement(f.a.Label,{className:"left-right-margin col-md"},"short url "),n.a.createElement("input",{className:"form-control left-right-margin text-align-center col-md",ref:this.shortUrl,value:"https://kut-ty.herokuapp.com/"+a,disabled:!0}),n.a.createElement(b.a,{onClick:function(){return e.onCopy()},className:"left-right-margin light col-md"},n.a.createElement(S.a,{className:"copy-grey",icon:j.c}),n.a.createElement("span",{className:"text-dark"}," Copy link")))))),n.a.createElement("h4",{className:"margin-top-50"},"Services we offer for our users"),n.a.createElement(k.a,{className:"margin-top-20 margin-bottom-20",striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Services"),n.a.createElement("th",null,"Anonymous members"),n.a.createElement("th",null,"Our members"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"URL expiration"),n.a.createElement("td",null,"1 month"),n.a.createElement("td",null,"User defined")),n.a.createElement("tr",null,n.a.createElement("td",null,"Custom URLs"),n.a.createElement("td",null,n.a.createElement(S.a,{className:"ban-red",icon:j.a})),n.a.createElement("td",null,n.a.createElement(S.a,{className:"check-green",icon:j.b}))),n.a.createElement("tr",null,n.a.createElement("td",null,"URL shortening APIs"),n.a.createElement("td",null,n.a.createElement(S.a,{className:"ban-red",icon:j.a})),n.a.createElement("td",null,n.a.createElement(S.a,{className:"check-green",icon:j.b}))),n.a.createElement("tr",null,n.a.createElement("td",null,"URL management"),n.a.createElement("td",null,n.a.createElement(S.a,{className:"ban-red",icon:j.a})),n.a.createElement("td",null,n.a.createElement(S.a,{className:"check-green",icon:j.b})))))))}}]),t}(r.Component)),G=Object(A.b)((function(e){return{auth:e.auth,urlData:e.url,errors:e.errors,message:e.message}}),{clearErrors:C,clearMessages:U,clearShortUrl:T,shortenAnonymousUser:function(e){return function(t){R.a.post("https://kut-ty.herokuapp.com/url/anonymousShorten/",e).then((function(e){console.log(e.data),t({type:"GET_SHORT_URL",payload:e.data}),t({type:"GET_MESSAGE",payload:{success:e.data.success}})})).catch((function(e){t({type:N,payload:e.response.data})}))}}})(D),I=a(133),M=a(135),W=function(e){e?R.a.defaults.headers.common.Authorization=e:delete R.a.defaults.headers.common.Authorization},B=a(50),H=a.n(B),F=function(e){return{type:"SET_CURRENT_USER",payload:e}},K=function(){return function(e){localStorage.removeItem("jwtToken"),W(!1),e(F({}))}},V=(a(119),function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).onLogoutClick=function(){a.props.logout()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,r=n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,{className:"mr-auto"},n.a.createElement(o.b,{className:"nav-link nav-text-light",to:"/dashboard"},"Dashboard")),n.a.createElement(I.a,null,n.a.createElement(o.b,{className:"nav-link nav-text-light",to:"/user"},n.a.createElement(S.a,{icon:j.e})," ",a.username),n.a.createElement("a",{className:"nav-link nav-text-light",onClick:this.onLogoutClick},"Log out"))),s=n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,{className:"mr-auto"}),n.a.createElement(I.a,null,n.a.createElement(o.b,{className:"nav-link nav-text-light",to:"/register"},"Register"),n.a.createElement(o.b,{className:"nav-link nav-text-light",to:"/signin"},"Sign in")));return n.a.createElement("div",null,n.a.createElement(M.a,{className:"navbar-primary-color",collapseOnSelect:!0,expand:"sm",variant:"dark"},n.a.createElement(o.b,{to:"/"},n.a.createElement(M.a.Brand,{className:"nav-text-light"},"Kut-ty")),n.a.createElement(M.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(M.a.Collapse,{id:"responsive-navbar-nav"},t?r:s)))}}]),t}(r.Component)),X=Object(A.b)((function(e){return{auth:e.auth}}),{logout:K})(V),Y=a(4),z=a.n(Y),J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};a.props.loginUser(t)},a.onChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.state={email:"",password:"",errors:{},message:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard"),this.props.message&&(this.state.message=this.props.message)}},{key:"componentWillUnmount",value:function(){this.props.clearErrors(),this.props.clearMessages(),this.props.clearShortUrl()}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.message&&(this.state.message=e.message),e.errors&&this.setState({errors:e.errors,message:{}})}},{key:"render",value:function(){var e=this.state,t=e.errors,a=e.message;return n.a.createElement(E.a,null,t.error&&n.a.createElement("div",{className:"margin-top-20 alert alert-danger",role:"alert"},t.error),a.success&&n.a.createElement("div",{className:"margin-top-20 alert alert-success",role:"alert"},a.success),n.a.createElement(w.a,null,n.a.createElement(O.a,{md:{span:6,offset:3}},n.a.createElement(f.a,{className:"margin-top-50",onSubmit:this.onSubmit},n.a.createElement(f.a.Group,{controlId:"formBasicEmail"},n.a.createElement(f.a.Label,null,"Email address"),n.a.createElement(f.a.Control,{className:z()("",{"is-invalid":t.email}),type:"email",placeholder:"Enter email",name:"email",onChange:this.onChange,value:this.state.email}),t.email&&n.a.createElement("div",{className:"invalid-feedback"},t.email)),n.a.createElement(f.a.Group,{controlId:"formBasicPassword"},n.a.createElement(f.a.Label,null,"Password"),n.a.createElement(f.a.Control,{className:z()("",{"is-invalid":t.password}),type:"password",placeholder:"Password",name:"password",onChange:this.onChange,value:this.state.password}),t.password&&n.a.createElement("div",{className:"invalid-feedback"},t.password)),n.a.createElement(b.a,{variant:"primary",type:"submit"},"Sign in")))))}}]),t}(r.Component),$=Object(A.b)((function(e){return{auth:e.auth,errors:e.errors,message:e.message}}),{loginUser:function(e,t){return function(){var t=Object(P.a)(x.a.mark((function t(a){var r,n,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.post("https://kut-ty.herokuapp.com/user/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),W(n),s=H()(n),a(F(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:N,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},clearErrors:C,clearMessages:U,clearShortUrl:T})(J),q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,email:a.state.email,password:a.state.password,confirmPassword:a.state.confirmPassword};console.log(t),a.props.createUser(t,a.props.history)},a.state={username:"",email:"",password:"",confirmPassword:"",errors:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillUnmount",value:function(){this.props.clearErrors(),this.props.clearShortUrl()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement(E.a,null,n.a.createElement(w.a,null,n.a.createElement(O.a,{md:{span:6,offset:3}},n.a.createElement(f.a,{className:"margin-top-50",onSubmit:this.onSubmit},n.a.createElement(f.a.Group,{controlId:"formBasicEmail"},n.a.createElement(f.a.Label,null,"Username"),n.a.createElement(f.a.Control,{type:"text",className:z()("",{"is-invalid":e.username}),placeholder:"Enter username",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement(f.a.Group,{controlId:"formBasicEmail"},n.a.createElement(f.a.Label,null,"Email address"),n.a.createElement(f.a.Control,{type:"email",className:z()("",{"is-invalid":e.email}),placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.onChange}),e.email&&n.a.createElement("div",{className:"invalid-feedback"},e.email)),n.a.createElement(f.a.Group,{controlId:"formBasicPassword"},n.a.createElement(f.a.Label,null,"Password"),n.a.createElement(f.a.Control,{type:"password",className:z()("",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement(f.a.Group,{controlId:"formBasicPassword"},n.a.createElement(f.a.Label,null,"Password"),n.a.createElement(f.a.Control,{type:"password",className:z()("",{"is-invalid":e.confirmPassword}),placeholder:"Confirmation password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement(f.a.Text,{className:"text-dark"},"We'll never share your email with anyone else."),n.a.createElement(b.a,{className:"margin-top-20",variant:"primary",type:"submit"},"Sign in")))))}}]),t}(r.Component),Q=Object(A.b)((function(e){return{errors:e.errors,auth:e.auth}}),{createUser:function(e,t){return function(){var a=Object(P.a)(x.a.mark((function a(r){var n;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R.a.post("https://kut-ty.herokuapp.com/user/register",e);case 3:n=a.sent,t.push("/signin"),r({type:"GET_MESSAGE",payload:n.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),r({type:N,payload:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},clearErrors:C,clearMessages:U,clearShortUrl:T})(q),Z=a(136),ee=a(137),te=(a(121),a(132)),ae=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleDelete=function(){var e={url:a.props.urlData.original_url};a.props.deleteUrl(e),a.handleClose()},a.state={show:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.urlData,t=e.original_url,a=e.shortened_url,r=e.no_of_redirections,s=e.creation_time,l=e.expiration_time;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ee.a,{border:"info"},n.a.createElement(ee.a.Body,null,n.a.createElement(w.a,null,n.a.createElement(O.a,{sm:5},n.a.createElement("code",{className:"text-dark"},t)),n.a.createElement(O.a,{sm:5},"Short Url: ",n.a.createElement("code",null,"https://kut-ty.herokuapp.com/",a)),n.a.createElement(O.a,{sm:2},n.a.createElement(b.a,{onClick:this.handleShow},n.a.createElement(S.a,{icon:j.d})))))),n.a.createElement("br",null),n.a.createElement(te.a,{show:this.state.show,onHide:this.handleClose,centered:!0},n.a.createElement(te.a.Header,{closeButton:!0},n.a.createElement(te.a.Title,null,t)),n.a.createElement(te.a.Body,null,n.a.createElement(E.a,{fluid:!0},n.a.createElement(f.a,null,n.a.createElement(f.a.Group,{as:w.a},n.a.createElement(f.a.Label,null,"Short Url"),n.a.createElement(O.a,null,n.a.createElement(y.a,{type:"text",disabled:!0,defaultValue:"https://kut-ty.herokuapp.com/"+a}))),n.a.createElement(f.a.Group,{as:w.a},n.a.createElement(f.a.Label,null,"No. of redirection"),n.a.createElement(O.a,null,n.a.createElement(y.a,{type:"text",disabled:!0,defaultValue:r}))),n.a.createElement(f.a.Group,{as:w.a},n.a.createElement(f.a.Label,null,"Creation time"),n.a.createElement(O.a,null,n.a.createElement(y.a,{type:"text",disabled:!0,value:new Date(s)}))),n.a.createElement(f.a.Group,{as:w.a},n.a.createElement(f.a.Label,null,"Expiration time"),n.a.createElement(O.a,null,n.a.createElement(y.a,{type:"text",disabled:!0,value:new Date(l)})))))),n.a.createElement(te.a.Footer,null,n.a.createElement(b.a,{className:"bg-danger btn-danger",variant:"danger",onClick:this.handleDelete},"Delete Url"),n.a.createElement(b.a,{variant:"secondary",onClick:this.handleClose},"Close"))))}}]),t}(r.Component),re=Object(A.b)(null,{deleteUrl:function(e){return function(){var t=Object(P.a)(x.a.mark((function t(a){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Do you want to delete this url (".concat(e.url,")?"))){t.next=12;break}return t.prev=1,t.next=4,R()({method:"DELETE",url:"https://kut-ty.herokuapp.com/url/",data:{url:e.url}});case 4:r=t.sent,a({type:"DELETE_SHORT_URL",payload:r.data.url}),a({type:"GET_MESSAGE",payload:{success:r.data.success}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),401===t.t0.response.status?window.location.href="/signin":a({type:N,payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})(ae),ne=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.clearErrors(),a.props.clearMessages(),a.props.clearShortUrl(),a.props.shortenUrl({url:a.state.url}),a.props.getUrlList()},a.onChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onCopy=function(){console.log(a.shortUrl.current.value),navigator.clipboard.writeText(a.shortUrl.current.value)},a.state={url:"",shortUrl:"",urls:[],errors:{},message:{}},a.shortUrl=n.a.createRef(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getUrlList()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),e.message&&this.setState({message:e.message});var t=e.urlData,a=t.urlList,r=t.shortUrl;this.setState({shortUrl:r,urls:a})}},{key:"componentWillUnmount",value:function(){this.props.clearErrors(),this.props.clearMessages(),this.props.clearShortUrl()}},{key:"render",value:function(){var e=this,t=this.state,a=t.shortUrl,r=t.errors,s=t.message,l=t.urls;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,null,r.error&&n.a.createElement("div",{className:"margin-top-20 alert alert-danger",role:"alert"},r.error),s.success&&n.a.createElement("div",{className:"margin-top-20 alert alert-success",role:"alert"},s.success),n.a.createElement(f.a,{className:"margin-top-50",onSubmit:this.onSubmit},n.a.createElement(g.a,{controlId:""},n.a.createElement(v.a,null,"Shorten URL"),n.a.createElement(y.a,{type:"text",placeholder:"Enter URL",name:"url",value:this.state.url,onChange:this.onChange}),n.a.createElement(f.a.Text,null,"This short URL will be valid only for one month, If you want short URL for long time then just sign in")),n.a.createElement(b.a,{type:"submit"}," Shorten ")),a&&n.a.createElement("div",{className:"margin-top-50"},n.a.createElement(w.a,null,n.a.createElement(O.a,{md:{span:10,offset:1}},n.a.createElement("form",{className:"form-inline"},n.a.createElement(f.a.Label,{className:"left-right-margin col-md"},"short url"),n.a.createElement("input",{className:"form-control left-right-margin text-align-center col-md",ref:this.shortUrl,value:"https://kut-ty.herokuapp.com/"+a,disabled:!0}),n.a.createElement(b.a,{onClick:function(){return e.onCopy()},className:"left-right-margin light col-md"},n.a.createElement(S.a,{className:"copy-grey",icon:j.c}),n.a.createElement("span",{className:"text-dark"}," Copy link"))))))),n.a.createElement(E.a,{fluid:!0,className:"margin-top-50"},n.a.createElement("h4",null,"Manage URLs"),n.a.createElement(Z.a,null,n.a.createElement(ee.a,null,n.a.createElement(ee.a.Header,null,n.a.createElement(Z.a.Toggle,{className:"text-dark-hover",as:o.b,variant:"link",eventKey:"0"},"URLs shortened")),n.a.createElement(Z.a.Collapse,{eventKey:"0"},n.a.createElement(ee.a.Body,null,function(){var e=l.filter((function(e){return!e.is_api}));return 0===e.length?n.a.createElement("div",{className:"alert alert-success",role:"alert"},"You have no shortened URLs"):e.map((function(e){return n.a.createElement(re,{key:e._id,urlData:e})}))}()))),n.a.createElement(ee.a,null,n.a.createElement(ee.a.Header,null,n.a.createElement(Z.a.Toggle,{className:"text-dark-hover",as:o.b,variant:"link",eventKey:"1"},"URLs shortened with API")),n.a.createElement(Z.a.Collapse,{eventKey:"1"},n.a.createElement(ee.a.Body,null,function(){var e=l.filter((function(e){return e.is_api}));return 0===e.length?n.a.createElement("div",{className:"alert alert-success",role:"alert"},"You have no shortened URLs created with API"):e.map((function(e){return n.a.createElement(re,{key:e._id,urlData:e})}))}()))))))}}]),t}(r.Component),se=Object(A.b)((function(e){return{urlData:e.url,errors:e.errors,message:e.message}}),{shortenUrl:function(e){return function(t){R.a.post("https://kut-ty.herokuapp.com/url/",e).then((function(e){t({type:"GET_SHORT_URL",payload:e.data}),e.data.updateList&&t({type:"ADD_TO_URL_LIST",payload:e.data.url}),t({type:"GET_MESSAGE",payload:{success:e.data.success}})})).catch((function(e){401===e.response.status?window.location.href="/signin":t({type:N,payload:e.response.data})}))}},clearErrors:C,clearMessages:U,clearShortUrl:T,getUrlList:function(){return function(){var e=Object(P.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://kut-ty.herokuapp.com/url/urls/");case 3:a=e.sent,t({type:"GET_URLS_LIST",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),401===e.t0.response.status?window.location.href="/signin":t({type:N,payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(ne),le=(a(122),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1,modalValue:"",changePassword:!1,modalText:"",modalInputName:"",confirmPassword:"",passwordToChange:"",usernameToChange:"",emailToChange:""})},a.handleShow=function(e,t){a.setState({show:!0,modalText:e,modalInputName:t}),"password"===e&&a.setState({changePassword:!0})},a.onChange=function(e){var t;(console.log(e.target.name),"confirmPassword"===e.target.name)?a.setState(Object(i.a)({},e.target.name,e.target.value)):a.setState((t={},Object(i.a)(t,e.target.name,e.target.value),Object(i.a)(t,"modalValue",e.target.value),t))},a.enableApi=function(){a.props.enableAPIService()},a.updateDetail=function(e){if(console.log(a.state.email),"username"===e){var t={newUsername:a.state.usernameToChange};a.props.updateUsername(t)}else if("email"===e){var r={newEmail:a.state.emailToChange};a.props.updateEmail(r)}else if("password"===e){var n={newPassword:a.state.passwordToChange,confirmPassword:a.state.confirmPassword};a.props.updatePassword(n)}a.handleClose()},a.onCopy=function(){navigator.clipboard.writeText(a.apilink.current.value)},a.state={show:!1,changePassword:!1,modalText:"",modalValue:"",modalInputName:"",usernameToChange:"",emailToChange:"",passwordToChange:"",confirmPassword:"",username:"",email:"",noOfLinksShortened:0,noOfActiveLinks:0,noOfLinksCreatedWithAPI:0,totalNumberOfRedirections:0,hasApi:!1,apiKey:"",errors:{},message:{}},a.apilink=n.a.createRef(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserProfileDetails()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),e.message!==Object&&this.setState({message:e.message});var t=e.userDetails,a=t.username,r=t.email,n=t.noOfLinksShortened,s=t.noOfActiveLinks,l=t.noOfLinksCreatedWithAPI,o=t.totalNumberOfRedirections,c=t.hasApi,i=t.apiKey;this.setState({username:a,email:r,noOfLinksShortened:n,noOfActiveLinks:s,noOfLinksCreatedWithAPI:l,totalNumberOfRedirections:o,hasApi:c,apiKey:i})}},{key:"componentWillUnmount",value:function(){this.props.clearErrors(),this.props.clearMessages()}},{key:"render",value:function(){var e=this,t=this.state,a=t.errors,r=t.hasApi,s=t.message;return n.a.createElement(E.a,{fluid:!0},a.error&&n.a.createElement("div",{className:"margin-top-20 alert alert-danger",role:"alert"},a.error),s.success&&n.a.createElement("div",{className:"margin-top-20 alert alert-success",role:"alert"},s.success),n.a.createElement("h2",{className:"margin-top-50"},"Profile"),n.a.createElement(w.a,{className:"margin-top-20"},n.a.createElement(O.a,{className:"text-right-align"},"Username : "),n.a.createElement(O.a,null,this.state.username),n.a.createElement(O.a,null,n.a.createElement(b.a,{onClick:function(){return e.handleShow("username","usernameToChange")}},n.a.createElement(S.a,{icon:j.d}),"Edit"))),n.a.createElement(w.a,{className:"margin-top-20"},n.a.createElement(O.a,{className:"text-right-align"},"Email :"),n.a.createElement(O.a,null,this.state.email),n.a.createElement(O.a,null,n.a.createElement(b.a,{onClick:function(){return e.handleShow("email","emailToChange")}},n.a.createElement(S.a,{icon:j.d})," Edit"))),n.a.createElement(w.a,{className:"margin-top-20"},n.a.createElement(O.a,{className:"text-right-align"},"No. of links shortened :"),n.a.createElement(O.a,null,this.state.noOfLinksShortened),n.a.createElement(O.a,null)),n.a.createElement(w.a,{className:"margin-top-10"},n.a.createElement(O.a,{className:"text-right-align"},"No. of active links :"),n.a.createElement(O.a,null,this.state.noOfActiveLinks),n.a.createElement(O.a,null)),r&&n.a.createElement(w.a,{className:"margin-top-10"},n.a.createElement(O.a,{className:"text-right-align"},"No. of links created with api :"),n.a.createElement(O.a,null,this.state.noOfLinksCreatedWithAPI),n.a.createElement(O.a,null)),n.a.createElement(w.a,{className:"margin-top-10"},n.a.createElement(O.a,{className:"text-right-align"},"Total No. of redirections :"),n.a.createElement(O.a,null,this.state.totalNumberOfRedirections),n.a.createElement(O.a,null)),!r&&n.a.createElement(b.a,{className:"margin-top-50",onClick:this.enableApi},"Enable an API service"),n.a.createElement("br",null),n.a.createElement(b.a,{className:"margin-top-20 bg-danger btn-danger",onClick:function(){return e.handleShow("password","passwordToChange")}},"Change Password"),r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("form",{className:"margin-top-20 form-inline"},n.a.createElement(f.a.Label,{className:"left-right-margin col-md"},"Your API Link"),n.a.createElement("input",{className:"form-control left-right-margin text-align-center col-md",ref:this.apilink,value:"https://kut-ty.herokuapp.com/api/"+this.state.apiKey,disabled:!0}),n.a.createElement(b.a,{onClick:function(){return e.onCopy()},className:"left-right-margin light col-md"},n.a.createElement(S.a,{className:"copy-grey",icon:j.c}),n.a.createElement("span",{className:"text-dark"}," Copy link"))),n.a.createElement("div",{className:"margin-top-10"},"json body sholud contain",n.a.createElement("br",null),n.a.createElement("code",null,'"url":"https://www.example.com"'))),n.a.createElement(te.a,{show:this.state.show,onHide:this.handleClose,centered:!0},n.a.createElement(te.a.Header,{closeButton:!0},n.a.createElement(te.a.Title,null,"Change ",this.state.modalText)),n.a.createElement(te.a.Body,null,n.a.createElement(f.a,null,n.a.createElement(f.a.Label,null,"Enter new ",this.state.modalText),n.a.createElement(f.a.Control,{type:this.state.changePassword?"password":"text",name:this.state.modalInputName,value:this.state.modalValue,onChange:this.onChange}),this.state.changePassword&&n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a.Label,null,"Enter confirmation password"),n.a.createElement(f.a.Control,{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange})))),n.a.createElement(te.a.Footer,null,n.a.createElement(b.a,{variant:"secondary",onClick:this.handleClose},"Cancel"),n.a.createElement(b.a,{type:"submit",variant:"primary",onClick:function(){return e.updateDetail(e.state.modalText)}},"Update"))))}}]),t}(r.Component)),oe=Object(A.b)((function(e){return{userDetails:e.userDetails,errors:e.errors,message:e.message}}),{getUserProfileDetails:function(){return function(){var e=Object(P.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://kut-ty.herokuapp.com/user/");case 3:a=e.sent,t({type:"GET_USER_DETAILS",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),401===e.t0.response.status?window.location.href="/signin":t({type:N,payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},updateUsername:function(e){return function(){var t=Object(P.a)(x.a.mark((function t(a){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.put("https://kut-ty.herokuapp.com/user/changeUsername/",e);case 3:r=t.sent,a({type:"GET_USERNAME",payload:r.data}),a({type:"GET_MESSAGE",payload:{success:"Username updated successfully"}}),a({type:N,payload:{}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),401===t.t0.response.status?window.location.href="/signin":a({type:N,payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},updateEmail:function(e){return function(){var t=Object(P.a)(x.a.mark((function t(a){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.put("https://kut-ty.herokuapp.com/user/changeEmail/",e);case 3:r=t.sent,a({type:"GET_EMAIL",payload:r.data}),a({type:"GET_MESSAGE",payload:{success:"Email updated successfully"}}),a({type:N,payload:{}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),401===t.t0.response.status?window.location.href="/signin":a({type:N,payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},updatePassword:function(e){return function(){var t=Object(P.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.put("https://kut-ty.herokuapp.com/user/changePassword/",e);case 3:t.sent,a({type:"GET_MESSAGE",payload:"Password updated successfully"}),a({type:N,payload:{}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),401===t.t0.response.status?window.location.href="/signin":a({type:N,payload:t.t0.response.data});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},clearErrors:C,clearMessages:U,enableAPIService:function(){return function(){var e=Object(P.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.put("https://kut-ty.herokuapp.com/user/enableAPIService/");case 3:a=e.sent,t({type:"GET_MESSAGE",payload:a.data}),t({type:"GET_API_STATUS",payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),401===e.t0.response.status?window.location.href="/signin":t({type:N,payload:e.t0.response.data});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})(le),ce=(a(123),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"text-muted"},"\xa9 Copyright 2019 kut.ty"))))}}]),t}(r.Component)),ie=a(30),ue=a(85),me={};function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de={shortUrl:"",urlList:[]};function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ge={},ve={};function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var we={isAuthenticated:!1,user:{}},Oe=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},ke=Object(ie.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:case"CLEAR_ERRORS":return t.payload;default:return e}},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SHORT_URL":return he({},e,{shortUrl:t.payload.url.shortened_url});case"GET_URLS_LIST":return he({},e,{urlList:t.payload});case"ADD_TO_URL_LIST":return e.urlList.push(t.payload),e;case"CLEAR_SHORT_URL":return he({},e,{shortUrl:t.payload});case"DELETE_SHORT_URL":return he({},e,{urlList:e.urlList.filter((function(e){return e.shortened_url!==t.payload}))});default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_DETAILS":return t.payload;case"GET_USERNAME":return fe({},e,{username:t.payload.username});case"GET_EMAIL":return fe({},e,{email:t.payload.email});case"GET_API_STATUS":return fe({},e,{hasApi:t.payload});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MESSAGE":case"CLEAR_MESSAGE":return t.payload;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return be({},e,{isAuthenticated:!Oe(t.payload),user:t.payload});default:return e}}}),Se={},je=[ue.a],Ne=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Ce=window.navigator.userAgent.includes("Chrome")&&Ne?Object(ie.e)(ke,Se,Object(ie.d)(ie.a.apply(void 0,je),Ne)):Object(ie.e)(ke,Se,Object(ie.d)(ie.a.apply(void 0,je))),Ue=(a(124),a(125),a(86)),Te=Object(A.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,r=Object(Ue.a)(e,["component","auth"]);return n.a.createElement(c.b,Object.assign({},r,{render:function(e){return!0===a.isAuthenticated?n.a.createElement(t,e):n.a.createElement(c.a,{to:"/signin"})}}))}));if(localStorage.jwtToken){W(localStorage.jwtToken);var Le=H()(localStorage.jwtToken);Ce.dispatch(F(Le));var xe=Date.now()/1e3;Le.exp<xe&&(Ce.dispatch(K()),window.location.href="/signin")}var Pe=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(A.a,{store:Ce},n.a.createElement(o.a,null,n.a.createElement(X,null),n.a.createElement(c.b,{exact:!0,path:"/signin",component:$}),n.a.createElement(c.b,{exact:!0,path:"/register",component:Q}),n.a.createElement(c.b,{exact:!0,path:"/",component:G}),n.a.createElement(c.d,null,n.a.createElement(Te,{exact:!0,path:"/dashboard",component:se}),n.a.createElement(Te,{exact:!0,path:"/user",component:oe})),n.a.createElement(ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,a){},57:function(e,t,a){},87:function(e,t,a){e.exports=a(126)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.756a5547.chunk.js.map