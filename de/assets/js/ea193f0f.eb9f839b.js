(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{135:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/bigpicture-dca3be0043aec1840a9a6e56ed95421e.png"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(90)),o={id:"big-picture",title:"Big Picture"},p={unversionedId:"big-picture",id:"big-picture",isDocsHomePage:!1,title:"Big Picture",description:"Share your big picture. Where are you placed in the landscape? Helps for",source:"@site/docs/big-picture.md",slug:"/big-picture",permalink:"/docs-template/de/docs/big-picture",version:"current",sidebar:"sidebar",previous:{title:"Known Issues",permalink:"/docs-template/de/docs/known-issues"},next:{title:"Api Specs",permalink:"/docs-template/de/docs/api-specs"}},l=[{value:"Landscape",id:"landscape",children:[]},{value:"Graph Code",id:"graph-code",children:[]}],c={toc:l};function s(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Share your big picture. Where are you placed in the landscape? Helps for\norientation. Do it graphically and in code. So it can be easily adapted."),Object(a.b)("h2",{id:"landscape"},"Landscape"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Big Picture",src:t(135).default})),Object(a.b)("h2",{id:"graph-code"},"Graph Code"),Object(a.b)("p",null,"Just past the following code into ",Object(a.b)("a",{parentName:"p",href:"http://dreampuf.github.io/GraphvizOnline/"},"http://dreampuf.github.io/GraphvizOnline/"),"\nto update the graph on this page."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'digraph architecture {\n  rankdir=LR;\n\n  // Storage - #303F9F (dark blue)\n  node[fillcolor="#303F9F" style="filled" fontcolor="white"];\n  mongo[label="MongoDB"];\n  \n  // Clients - #FFEB3B (yellow)\n  node[fillcolor="#FFEB3B" style="filled" fontcolor="black"];\n  assemblylines_webui[label="AssemblyLines.WebUi"];\n  preparation_webui[label="Preparation.WebUi"];\n  shipping_webui[label="Shipping.WebUi"];\n  \n  // Backends - #C8E6C9 (light green)\n  node[fillcolor="#C8E6C9" style="filled" fontcolor="black"];\n  assemblylines_webapi[label="AssemblyLines.WebApi"];\n  preparation_webapi[label="Preparation.WebApi"];\n  shipping_webapi[label="Shipping.WebApi"];\n  webapi[label="WebApi"];\n  \n  // out of scope\n  node[fillcolor="#CFD8DC" style="filled" fontcolor="black"];\n  wws[label="WWS"];\n  syspro[label="Syspro"];\n  authorization[label="Authorization.Api"]\n  authentication[label="Authentication.Api"]\n  \n  subgraph clients {\n      assemblylines_webui -> {assemblylines_webapi, authentication};\n      preparation_webui -> {preparation_webapi, authentication};\n      shipping_webui -> {shipping_webapi, authentication};\n  }\n  \n  subgraph backends {\n      assemblylines_webapi -> {mongo, authorization};\n      preparation_webapi -> {mongo, authorization};\n      shipping_webapi -> {mongo, authorization};\n      webapi -> {mongo, syspro, wws};\n  }\n  \n  subgraph thirdparties {\n      wws -> webapi\n      syspro -> webapi\n  }\n  \n  {rank=same; webapi, mongo};\n}\n')))}s.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return t?i.a.createElement(f,p(p({ref:n},c),{},{components:t})):i.a.createElement(f,p({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);