(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(e,n,t){e.exports=t(511)},258:function(e,n){},260:function(e,n){},276:function(e,n){},278:function(e,n){},442:function(e,n){},507:function(e,n,t){},511:function(e,n,t){"use strict";t.r(n);var a=t(6),i=t.n(a),r=t(237),s=t.n(r),o=t(514),l=t(35),c=t(36),u=t(57),m=t(58),d=t(74),p="https://s3.amazonaws.com/onename/avatar-placeholder.png",g=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={person:{name:function(){return"Anonymous"},avatarUrl:function(){return p}}},a}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props,n=e.handleSignOut,t=e.userSession,a=this.state.person;return t.isSignInPending()?null:i.a.createElement("div",{className:"panel-welcome",id:"section-2"},i.a.createElement("div",{className:"avatar-section"},i.a.createElement("img",{src:a.avatarUrl()?a.avatarUrl():p,className:"img-rounded avatar",id:"avatar-image",alt:""})),i.a.createElement("h1",null,"Hello, ",i.a.createElement("span",{id:"heading-name"},a.name()?a.name():"Nameless Person"),"!"),i.a.createElement("p",{className:"lead"},i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signout-button",onClick:n.bind(this)},"Logout")))}},{key:"componentWillMount",value:function(){var e=this.props.userSession;this.setState({person:new d.Person(e.loadUserData().profile)})}}]),t}(a.Component),h=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.handleSignIn;return i.a.createElement("div",{className:"panel-landing",id:"section-1"},i.a.createElement("h1",{className:"landing-heading"},"COVID-19: Stay Informed"),i.a.createElement("h2",{className:"landing-heading"},"First, protect your identity!"),i.a.createElement("p",{className:"lead"},i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signin-button",onClick:e.bind(this)},"Sign In with Blockstack")))}}]),t}(a.Component),f=new d.AppConfig,v=new d.UserSession({appConfig:f}),b=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"handleSignIn",value:function(e){e.preventDefault(),v.redirectToSignIn()}},{key:"handleSignOut",value:function(e){e.preventDefault(),v.signUserOut(window.location.origin)}},{key:"render",value:function(){return i.a.createElement("div",{className:"site-wrapper"},i.a.createElement("div",{className:"site-wrapper-inner"},v.isUserSignedIn()?i.a.createElement(g,{userSession:v,handleSignOut:this.handleSignOut}):i.a.createElement(h,{userSession:v,handleSignIn:this.handleSignIn})))}},{key:"componentDidMount",value:function(){var e=this;v.isSignInPending()&&v.handlePendingSignIn().then(function(n){window.history.replaceState({},document.title,"/"),e.setState({userData:n})})}}]),t}(a.Component);t(506),t(507);s.a.render(i.a.createElement(o.a,null,i.a.createElement(b,null)),document.getElementById("root"))}},[[239,1,2]]]);
//# sourceMappingURL=main.8f282c1e.chunk.js.map