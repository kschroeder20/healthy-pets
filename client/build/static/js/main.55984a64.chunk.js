(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a(222)},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(58),o=a.n(c),i=a(7),l=a(8),s=a(10),u=a(9),m=a(11),h=a(20),p=a(13),d=a(24),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Healthy Pets"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/profile"},"Login"))))))}}]),t}(n.Component),v=a(4),f=a.n(v),E=a(25),g=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Welcome to HealthyPet!"),r.a.createElement("h3",null,"Your one stop location for all your pet's information."),r.a.createElement("p",{className:"lead"},"This app is designed to give you a convenient place to store all of the details of your pets' lives from their food preference to veterinary appointments. Login now to get started and create your pet profiles.")))},k=Object(d.withAuth)(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:null},a.checkAuthentication=Object(E.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.auth.isAuthenticated();case 2:(t=e.sent)!==a.state.authenticated&&a.setState({authenticated:t});case 4:case"end":return e.stop()}},e)})),a.login=Object(E.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.login("/");case 1:case"end":return e.stop()}},e)})),a.logout=Object(E.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.logout("/");case 1:case"end":return e.stop()}},e)})),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(E.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null===this.state.authenticated)return null;var e=this.state.authenticated?r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"You have been logged in!"," ",r.a.createElement(h.b,{to:"/profile"},"click here")),r.a.createElement("button",{className:"btn btn-light btn-lg",onClick:this.logout},"Logout")):r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"Right now, we have to have someone on the back end manually add users"),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:this.login},"Login"));return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-4"},"Pet Portal"),e))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentUserName:"",currentUserEmail:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("okta-token-storage"));this.setState({currentUserEmail:e.idToken.claims.email,currentUserName:e.idToken.claims.name})}},{key:"render",value:function(){var e=this.state,t=e.currentUserEmail,a=e.currentUserName;return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",a),r.a.createElement("p",null,"Email: ",t),r.a.createElement("p",null,"This is where we are going to put all of our pet information"))}}]),t}(n.Component),O=a(116),y=a.n(O),w=(a(221),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=o.a.findDOMNode(this);this.widget=new y.a({baseUrl:this.props.baseUrl,logo:"logo.png"}),this.widget.renderEl({el:e},this.props.onSuccess,this.props.onError)}},{key:"componentWillUnmount",value:function(){this.widget.remove()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component)),N=Object(d.withAuth)(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSuccess=function(e){return a.props.auth.redirect({sessionToken:e.session.token})},a.onError=function(e){console.log("error logging in",e)},a.state={authenticated:null},a.checkAuthentication(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"checkAuthentication",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.auth.isAuthenticated();case 2:(t=e.sent)!==this.state.authenticated&&this.setState({authenticated:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return null===this.state.authenticated?null:this.state.authenticated?r.a.createElement(p.Redirect,{to:{pathname:"/"}}):r.a.createElement(w,{baseUrl:this.props.baseUrl,onSuccess:this.onSuccess,onError:this.onError})}}]),t}(n.Component));function x(e){e.history.push("/login")}var A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d.Security,{issuer:"https://dev-217893.okta.com/oauth2/default",client_id:"0oax790rjgenQw6O3356",redirect_uri:window.location.origin+"/implicit/callback",onAuthRequired:x},r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.Route,{path:"/",exact:!0,component:k}),r.a.createElement(d.SecureRoute,{path:"/profile",exact:!0,component:j}),r.a.createElement(p.Route,{path:"/login",render:function(){return r.a.createElement(N,{baseUrl:"https://dev-217893.okta.com"})}}),r.a.createElement(p.Route,{path:"/implicit/callback",component:d.ImplicitCallback})))))}}]),t}(n.Component);o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.55984a64.chunk.js.map