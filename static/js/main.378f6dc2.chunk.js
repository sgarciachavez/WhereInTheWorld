(this.webpackJsonpcountriesapp=this.webpackJsonpcountriesapp||[]).push([[0],{36:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/moon-white.74556d31.svg"},40:function(e,t,a){e.exports=a.p+"static/media/mag-glass.6650aba8.svg"},41:function(e,t,a){e.exports=a.p+"static/media/mag-glass_blk.6f5fc00b.svg"},50:function(e,t,a){e.exports=a.p+"static/media/left-arrow.c5dfb360.svg"},51:function(e,t,a){e.exports=a.p+"static/media/left-arrow-blk.fc68b46a.svg"},54:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=(a(36),a(9)),s=a(10),i=a(13),u=a(11),m=a(14),h=a(38),d=a.n(h),p=a(19),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-container"},this.props.countries.map((function(e){return r.a.createElement(p.b,{to:{pathname:"/country/",search:"?code=".concat(e.alpha3Code)},key:e.alpha3Code,style:{textDecoration:"none",color:"white"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(e.flag,")"),backgroundSize:"cover",overflow:"hidden",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),r.a.createElement("div",{className:"summary"},r.a.createElement("p",null,e.name),r.a.createElement("p",{className:"info"},"Population: ",e.population,r.a.createElement("br",null),"Region: ",e.region,r.a.createElement("br",null),"Capital: ",e.capital))))})))}}]),t}(n.Component),f=a(40),v=a.n(f),E=a(41),b=a.n(E),y=a(70),j=a(71),O=a(29),k=a(43),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleChange=function(e){a.setState({search:e.target.value})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="//./search/?name=".concat(this.state.search),t=localStorage.getItem("theme");return r.a.createElement("div",{className:"search-area"},r.a.createElement("div",null,r.a.createElement(y.a,{className:"mb-3"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Search for a country...",className:"search-string",value:this.state.search,onChange:this.handleChange})),r.a.createElement(y.a.Append,null,r.a.createElement(k.a,{variant:"outline-secondary",href:e},r.a.createElement("img",{src:"light"===t?b.a:v.a,className:"",alt:"magnifying glass"}))))),r.a.createElement("div",null,r.a.createElement(j.a,{id:"region-filter",title:"Filter by Region",variant:t},r.a.createElement(O.a.Item,{href:"./"},"All Regions"),r.a.createElement(O.a.Item,{href:"./?region=Africa"},"Africa"),r.a.createElement(O.a.Item,{href:"./?region=Americas"},"Americas"),r.a.createElement(O.a.Item,{href:"./?region=Asia"},"Asia"),r.a.createElement(O.a.Item,{href:"./?region=Europe"},"Europe"),r.a.createElement(O.a.Item,{href:"./?region=Oceania"},"Oceania"))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countries:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search).get("region"),a="?fields=name;population;region;capital;flag;alpha3Code",n="https://restcountries.eu/rest/v2/all"+a;null!==t&&(n="https://restcountries.eu/rest/v2/region/"+t+a),fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({countries:t})})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(g,{countries:this.state.countries}))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countries:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search).get("name"),a="?fields=name;population;region;capital;flag;alpha3Code",n="https://restcountries.eu/rest/v2/all"+a;null!==t&&(n="https://restcountries.eu/rest/v2/name/"+t+a),""!==t&&fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({countries:t})})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(g,{countries:this.state.countries}))}}]),t}(n.Component),S=a(50),A=a.n(S),I=a(51),x=a.n(I),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={borders:[],fetch:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getBorders",value:function(){var e=this;if(this.state.fetch){var t="https://restcountries.eu/rest/v2/alpha?codes="+this.props.codes.join(";");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({borders:t,fetch:!1})})).catch(console.log)}}},{key:"render",value:function(){var e=localStorage.getItem("theme");return void 0!==this.props.codes&&this.getBorders(),void 0!==this.state.borders&&this.state.borders.length>0&&(this.borders=this.state.borders.map((function(t,a){var n="./?code=".concat(t.alpha3Code);return r.a.createElement(k.a,{variant:e,key:t.alpha3Code,href:n,size:"sm",className:"border-country"},t.name)}))),r.a.createElement("div",null,r.a.createElement("strong",null,"Border Countries:")," ",this.borders)}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={country:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search).get("code");if(null!==t){fetch("https://restcountries.eu/rest/v2/alpha/"+t+"?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag").then((function(e){return e.json()})).then((function(t){e.setState({country:t})})).catch(console.log)}}},{key:"render",value:function(){var e=localStorage.getItem("theme");return void 0!==this.state.country.currencies&&(this.currencies=this.state.country.currencies.map((function(e,t){return r.a.createElement("li",{key:e.code},e.name)}))),void 0!==this.state.country.languages&&(this.languages=this.state.country.languages.map((function(e,t){return r.a.createElement("li",{key:e.iso639_1},e.name)}))),r.a.createElement("div",{className:"details-container"},r.a.createElement(p.b,{to:"/"},r.a.createElement(k.a,{variant:e},r.a.createElement("img",{src:"light"===e?x.a:A.a,className:"moonw",alt:"left arrow"}),"Back to all countries")),r.a.createElement("div",{className:"country-info"},r.a.createElement("div",{className:"flag-container"},r.a.createElement("img",{src:this.state.country.flag,alt:"left arrow",className:"responsive"})),r.a.createElement("div",{className:"info-container"},r.a.createElement("p",null,r.a.createElement("strong",null,this.state.country.name)),r.a.createElement("div",{className:"specs-container"},r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"info"},r.a.createElement("strong",null,"Native Name:")," ",this.state.country.nativeName,r.a.createElement("br",null),r.a.createElement("strong",null,"Population:")," ",this.state.country.population,r.a.createElement("br",null),r.a.createElement("strong",null,"Region:")," ",this.state.country.region,r.a.createElement("br",null),r.a.createElement("strong",null,"Sub Region:")," ",this.state.country.subregion,r.a.createElement("br",null),r.a.createElement("strong",null,"Capital:")," ",this.state.country.capital,r.a.createElement("br",null),r.a.createElement("strong",null,"Top Level Domain:")," ",this.state.country.topLevelDomain)),r.a.createElement("div",{className:"column info"},r.a.createElement("strong",null,"Currencies:")," ",r.a.createElement("ul",null,this.currencies),r.a.createElement("strong",null,"Languages:")," ",r.a.createElement("ul",null,this.languages))),r.a.createElement(D,{codes:this.state.country.borders}))))}}]),t}(n.Component),L=a(5),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={theme:"dark",label:"Dark"},a.toggleTheme=function(){var e="dark"===a.state.theme?"light":"dark";a.updateState(e)},a.updateState=function(e){null===e&&(e="dark"),a.setState({theme:e});var t="dark"===e?"Dark":"Light";a.setState({label:t}),document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateState(localStorage.getItem("theme"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"title"},"Where in the world?"),r.a.createElement("div",{className:"mode"},r.a.createElement("img",{src:d.a,className:"moonw",alt:"moon"}),r.a.createElement(k.a,{className:"mode-button",variant:this.state.theme,onClick:this.toggleTheme},this.state.label," Mode"))),r.a.createElement(L.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(L.a,{exact:!0,path:"/country",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(L.a,{exact:!0,path:"/search",render:function(){return r.a.createElement(C,null)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(r.a.createElement(p.a,{basename:"/WhereInTheWorld"},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.378f6dc2.chunk.js.map