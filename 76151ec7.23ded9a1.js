/*! For license information please see 76151ec7.23ded9a1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,y=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(y,i(i({ref:t},l),{},{components:r})):o.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,p=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}function v(){}function w(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var S=w.prototype=new v;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},N={current:null},C=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){for(var l=Array(p),u=0;u<p;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===o[n]&&(o[n]=p[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,_=[];function R(e,t,r,n){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function A(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return r(n,e,""===t?"."+q(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var l=t+q(o=e[p],p);i+=A(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),p=0;!(o=e.next()).done;)i+=A(o=o.value,l=t+q(o,p++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function I(e,t,r){return null==e?0:A(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),I(e,M,t=R(t,a,n,o)),$(t)}function F(){var e=k.current;if(null===e)throw Error(h(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,D,t=R(null,null,t,r)),$(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:l,StrictMode:p,Suspense:b,createElement:P,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,p=N.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)C.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:p}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n}},L={default:B},H=L&&B||L;e.exports=H.default||H},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,p=c(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))o.call(r,u)&&(p[u]=r[u]);if(n){i=n(r);for(var s=0;s<i.length;s++)a.call(r,i[s])&&(p[i[s]]=r[i[s]])}}return p}},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(114),r(113)),c={id:"adding-typescript",title:"Adding TypeScript"},i={unversionedId:"adding-typescript",id:"adding-typescript",isDocsHomePage:!1,title:"Adding TypeScript",description:"Note: this feature is available with react-scripts@2.1.0 and higher.",source:"@site/../docs/adding-typescript.md",slug:"/adding-typescript",permalink:"/docs/adding-typescript",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-typescript.md",version:"current",lastUpdatedBy:"Dylan Brookes",lastUpdatedAt:1595881511,sidebar:"docs",previous:{title:"Adding Flow",permalink:"/docs/adding-flow"},next:{title:"Adding Relay",permalink:"/docs/adding-relay"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Getting Started with TypeScript and React",id:"getting-started-with-typescript-and-react",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.1.0")," and higher.")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a typed superset of JavaScript that compiles to plain JavaScript."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"To start a new Create React App project with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),", you can run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template typescript\n\n# or\n\nyarn create react-app my-app --template typescript\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(a.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",Object(a.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," to ensure that ",Object(a.b)("inlineCode",{parentName:"p"},"npx")," always uses the latest version."),Object(a.b)("p",{parentName:"blockquote"},"Global installs of ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app")," are no longer supported.")),Object(a.b)("p",null,"To add ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," to an existing Create React App project, first install it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n\n# or\n\nyarn add typescript @types/node @types/react @types/react-dom @types/jest\n")),Object(a.b)("p",null,"Next, rename any file to be a TypeScript file (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.js")," to ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.tsx"),") and ",Object(a.b)("strong",{parentName:"p"},"restart your development server"),"!"),Object(a.b)("p",null,"Type errors will show up in the same console as the build one. You'll have to fix these type errors before you continue development or build your project. For advanced configuration, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced-configuration"}),"see here"),"."),Object(a.b)("h2",{id:"getting-started-with-typescript-and-react"},"Getting Started with TypeScript and React"),Object(a.b)("p",null,"You are not required to make a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),Object(a.b)("inlineCode",{parentName:"a"},"tsconfig.json")," file"),", one will be made for you. You are allowed to edit the generated TypeScript configuration."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript Handbook")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react"}),"TypeScript Example on React")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"}),"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),Object(a.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("p",null,"If your project is not created with TypeScript enabled, npx may be using a cached version of ",Object(a.b)("inlineCode",{parentName:"p"},"create-react-app"),". Remove previously installed versions with ",Object(a.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn global remove create-react-app")," (see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035"}),"#6119"),")."),Object(a.b)("p",null,"If you are currently using ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wmonk/create-react-app-typescript/"}),"create-react-app-typescript"),", see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"}),"this blog post")," for instructions on how to migrate to Create React App."),Object(a.b)("p",null,"Constant enums and namespaces are not supported, you can learn about the constraints of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats"}),"using Babel with TypeScript here"),"."))}u.isMDXComponent=!0}}]);