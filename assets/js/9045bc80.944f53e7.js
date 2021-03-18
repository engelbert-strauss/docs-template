(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(91)),c={id:"interfaces",title:"Interfaces"},i={unversionedId:"interfaces",id:"interfaces",isDocsHomePage:!1,title:"Interfaces",description:"Please describe your interfaces here like RabbitMq, Apache Kafka, Sftp Uploads, etc.",source:"@site/docs/interfaces.md",slug:"/interfaces",permalink:"/docs-template/docs/interfaces",version:"current",sidebar:"sidebar",previous:{title:"Api Specs",permalink:"/docs-template/docs/api-specs"},next:{title:"Troubleshooting",permalink:"/docs-template/docs/troubleshooting"}},s=[{value:"Models",id:"models",children:[{value:"<code>DocumentationDto</code>",id:"docs-dto",children:[]}]},{value:"RabbitMq",id:"rabbitmq",children:[{value:"<code>DocumentationAddedMessage</code>",id:"documentationaddedmessage",children:[]}]},{value:"Apache Kafka",id:"apache-kafka",children:[{value:"<code>escid.documentation.stream</code>",id:"esciddocumentationstream",children:[]}]}],d={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Please describe your interfaces here like ",Object(o.b)("em",{parentName:"p"},"RabbitMq"),", ",Object(o.b)("em",{parentName:"p"},"Apache Kafka"),", ",Object(o.b)("em",{parentName:"p"},"Sftp Uploads"),", etc."),Object(o.b)("h2",{id:"models"},"Models"),Object(o.b)("h3",{id:"docs-dto"},Object(o.b)("inlineCode",{parentName:"h3"},"DocumentationDto")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1234",\n    "url": "https://docs.io/content-url",\n}\n')),Object(o.b)("h2",{id:"rabbitmq"},"RabbitMq"),Object(o.b)("h3",{id:"documentationaddedmessage"},Object(o.b)("inlineCode",{parentName:"h3"},"DocumentationAddedMessage")),Object(o.b)("p",null,"The microservices publishes the following event when a new documentation\nwas added. The message contains a ",Object(o.b)("a",{parentName:"p",href:"#docs-dto"},Object(o.b)("inlineCode",{parentName:"a"},"DocumentationDto"))),Object(o.b)("h2",{id:"apache-kafka"},"Apache Kafka"),Object(o.b)("h3",{id:"esciddocumentationstream"},Object(o.b)("inlineCode",{parentName:"h3"},"escid.documentation.stream")),Object(o.b)("p",null,"The microservice pushes documentation as ",Object(o.b)("a",{parentName:"p",href:"#docs-dto"},Object(o.b)("inlineCode",{parentName:"a"},"DocumentationDto")),"'s\ninto the stream. Use this stream to get all documentations that are currently\npresent."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,i(i({ref:t},d),{},{components:n})):a.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);