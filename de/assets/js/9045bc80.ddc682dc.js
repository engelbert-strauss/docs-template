(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(90)),c={id:"interfaces",title:"Interfaces"},i={unversionedId:"interfaces",id:"interfaces",isDocsHomePage:!1,title:"Interfaces",description:"Please describe your interfaces here like RabbitMq, Apache Kafka, Sftp Uploads, etc.",source:"@site/docs/interfaces.md",slug:"/interfaces",permalink:"/docs-template/de/docs/interfaces",version:"current",sidebar:"sidebar",previous:{title:"Api Specs",permalink:"/docs-template/de/docs/api-specs"}},s=[{value:"Models",id:"models",children:[{value:"<code>DocumentationDto</code>",id:"docs-dto",children:[]}]},{value:"RabbitMq",id:"rabbitmq",children:[{value:"<code>DocumentationChangedMessage</code>",id:"documentationchangedmessage",children:[]},{value:"<code>DocumentationDeletedMessage</code>",id:"documentationdeletedmessage",children:[]}]},{value:"Apache Kafka",id:"apache-kafka",children:[{value:"<code>documentations.stream</code>",id:"documentationsstream",children:[]}]}],d={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Please describe your interfaces here like ",Object(o.b)("em",{parentName:"p"},"RabbitMq"),", ",Object(o.b)("em",{parentName:"p"},"Apache Kafka"),", ",Object(o.b)("em",{parentName:"p"},"Sftp Uploads"),", etc."),Object(o.b)("h2",{id:"models"},"Models"),Object(o.b)("h3",{id:"docs-dto"},Object(o.b)("inlineCode",{parentName:"h3"},"DocumentationDto")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "name": "Documentation template",\n    "url": "https://engelbert-strauss.github.io/docs-tempalte/",\n}\n')),Object(o.b)("h2",{id:"rabbitmq"},"RabbitMq"),Object(o.b)("h3",{id:"documentationchangedmessage"},Object(o.b)("inlineCode",{parentName:"h3"},"DocumentationChangedMessage")),Object(o.b)("p",null,"The microservices publishes the event when a new documentation\nwas added or an existing documentation was updated. The message contains a\n",Object(o.b)("a",{parentName:"p",href:"#docs-dto"},Object(o.b)("inlineCode",{parentName:"a"},"DocumentationDto")),"."),Object(o.b)("h3",{id:"documentationdeletedmessage"},Object(o.b)("inlineCode",{parentName:"h3"},"DocumentationDeletedMessage")),Object(o.b)("p",null,"The microservice publishes the event when a documentation was deleted. The\nevent only contains the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of the documentation was deleted."),Object(o.b)("h2",{id:"apache-kafka"},"Apache Kafka"),Object(o.b)("h3",{id:"documentationsstream"},Object(o.b)("inlineCode",{parentName:"h3"},"documentations.stream")),Object(o.b)("p",null,"The microservice pushes documentation as ",Object(o.b)("a",{parentName:"p",href:"#docs-dto"},Object(o.b)("inlineCode",{parentName:"a"},"DocumentationDto")),"'s\ninto the stream. Use this stream to get all documentations that are currently\npresent. In case a a documentation will be deleted, it is removed from the\nstream."))}l.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,i(i({ref:t},d),{},{components:n})):r.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);