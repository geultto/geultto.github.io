(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{4078:(e,t,r)=>{"use strict";function o(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),r(6094),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8444:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let o=r(7677),n=r(4848),l=o._(r(6540)),a=r(6846),i=r(7262),s=r(5543),c=r(4881),d=r(3912),u=r(4671),f=r(3479),p=r(4078),b=r(5371),g=r(4293),h=new Set;function m(e,t,r,o){if((0,i.isLocalURL)(t)){if(!o.bypassPrefetchedCheck){let n=t+"%"+r+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(h.has(n))return;h.add(n)}e.prefetch(t,r,o).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let v=l.default.forwardRef(function(e,t){let r,o;let{href:s,as:h,children:v,prefetch:x=null,passHref:w,replace:k,shallow:j,scroll:M,locale:z,onClick:P,onMouseEnter:_,onTouchStart:O,legacyBehavior:C=!1,...$}=e;r=v,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let S=l.default.useContext(u.RouterContext),I=!1!==x,{href:E,as:R}=l.default.useMemo(()=>{if(!S){let e=y(s);return{href:e,as:h?y(h):e}}let[e,t]=(0,a.resolveHref)(S,s,!0);return{href:e,as:h?(0,a.resolveHref)(S,h):t||e}},[S,s,h]),L=l.default.useRef(E),N=l.default.useRef(R);C&&(o=l.default.Children.only(r));let T=C?o&&"object"==typeof o&&o.ref:t,[G,A,D]=(0,f.useIntersection)({rootMargin:"200px"}),W=l.default.useCallback(e=>{(N.current!==R||L.current!==E)&&(D(),N.current=R,L.current=E),G(e)},[R,E,D,G]),F=(0,g.useMergedRef)(W,T);l.default.useEffect(()=>{S&&A&&I&&m(S,E,R,{locale:z})},[R,E,A,z,I,null==S?void 0:S.locale,S]);let U={ref:F,onClick(e){C||"function"!=typeof P||P(e),C&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,o,n,l,a,s){let{nodeName:c}=e.currentTarget;"A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,i.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==a||a;"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:l,locale:s,scroll:e}):t[n?"replace":"push"](o||r,{scroll:e})})())}(e,S,E,R,k,j,M,z)},onMouseEnter(e){C||"function"!=typeof _||_(e),C&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&m(S,E,R,{locale:z,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){C||"function"!=typeof O||O(e),C&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&m(S,E,R,{locale:z,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(R))U.href=R;else if(!C||w||"a"===o.type&&!("href"in o.props)){let e=void 0!==z?z:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(R,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);U.href=t||(0,b.addBasePath)((0,d.addLocale)(R,e,null==S?void 0:S.defaultLocale))}return C?l.default.cloneElement(o,U):(0,n.jsx)("a",{...$,...U,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let o=r(6540),n=r(9820),l="function"==typeof IntersectionObserver,a=new Map,i=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!l,[d,u]=(0,o.useState)(!1),f=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{f.current=e},[]);return(0,o.useEffect)(()=>{if(l){if(c||d)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=a.get(o)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},i.push(r),a.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(o);let e=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!d){let e=(0,n.requestIdleCallback)(()=>u(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,d,f.current]),[p,d,(0,o.useCallback)(()=>{u(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=r(6540);function n(e,t){let r=(0,o.useRef)(()=>{}),n=(0,o.useRef)(()=>{});return(0,o.useMemo)(()=>e&&t?o=>{null===o?(r.current(),n.current()):(r.current=l(e,o),n.current=l(t,o))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1106:(e,t,r)=>{e.exports=r(8444)},827:(e,t,r)=>{"use strict";function o(e,t){return{files:[...e.map(e=>({type:"page",data:e,path:e._meta.filePath})),...t.map(e=>({type:"meta",data:e,path:e._meta.filePath}))]}}r.d(t,{f:()=>o})},2732:(e,t,r)=>{"use strict";r.d(t,{F:()=>a});var o=r(4164);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,a=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],o=null==i?void 0:i[e];if(null===t)return null;let l=n(t)||n(o);return a[e][l]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return l(e,s,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...c}[t]):({...i,...c})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},4164:(e,t,r)=>{"use strict";function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{$:()=>o})},2597:(e,t,r)=>{"use strict";function o(e){return Object.keys(e).forEach(t=>{void 0===e[t]&&delete e[t]}),e}function n(e){return e.split("/").filter(e=>e.length>0)}function l(e,t){let r=n(e),o=n(t);for(;o.length>0;){switch(o[0]){case"..":r.pop();break;case".":break;default:r.push(o[0])}o.shift()}return r.join("/")}function a(e){return e.startsWith("\\\\?\\")?e:e.replaceAll("\\","/")}r.d(t,{wG:()=>k});var i=Object.defineProperty,s=/^\((?<name>.+)\)$/,c=/^(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/,d=/^---(?<name>.*?)---$/;function u(e,t,r){let o=[],n=[];for(let l of[...e].sort((e,t)=>e.file.name.localeCompare(t.file.name))){if("data"in l&&"page"===l.format&&!l.file.locale){let e=p(l,t);if("index"===l.file.name){r||o.unshift(e);continue}o.push(e)}"children"in l&&n.push(f(l,!1,t))}return o.push(...n),o}function f(e,t,r){let n;let a=l(e.file.path,"meta"),i=r.storage.read(a,"meta");i=g(a,"meta",r)??i;let b=r.storage.read(l(e.file.flattenedPath,"index"),"page"),h=i?.data,m=b?p(b,r):void 0;if(i){let a=h?.root??t,i=new Set,s=h?.pages?.flatMap(t=>(function(e,t,r,n){if("..."===t)return"...";let a=d.exec(t);if(a?.groups){let e={type:"separator",name:a.groups.name};return[r.options.attachSeparator?.(e)??e]}let i=c.exec(t);if(i?.groups){let{icon:e,url:t,name:n}=i.groups,l=t.startsWith("/")||t.startsWith("#")||t.startsWith("."),a={type:"page",icon:r.options.resolveIcon?.(e),name:n,url:t,external:!l};return[o(r.options.attachFile?.(a)??a)]}let s=t.startsWith("!"),u=t.startsWith("..."),b=t;s?b=t.slice("!".length):u&&(b=t.slice("...".length));let g=l(e.file.path,b),h=r.storage.readDir(g)??r.storage.read(g,"page");if(!h||(n.add(h.file.path),s))return[];if("children"in h){let e=f(h,!1,r);return u?e.children:[e]}return[p(h,r)]})(e,t,r,i)),b=u(e.children.filter(e=>!i.has(e.file.path)),r,!a);n=s?.flatMap(e=>"..."===e?b:e)??b}else n=u(e.children,r,!t);let y={type:"folder",name:h?.title??m?.name??function(e,t=!1){let r=t?s.exec(e)?.[1]??e:e,o=[];for(let e of r)0===o.length?o.push(e.toLocaleUpperCase()):"-"===e?o.push(" "):o.push(e);return o.join("")}(e.file.name,!0),icon:r.options.resolveIcon?.(h?.icon)??m?.icon,root:h?.root,defaultOpen:h?.defaultOpen,description:h?.description,index:m,children:n,$ref:r.options.noRef?void 0:{metaFile:i?.file.path}};return o(r.options.attachFolder?.(y,e,i)??y)}function p(e,t){let r=g(e.file.flattenedPath,"page",t)??e,n={type:"page",name:r.data.data.title,icon:t.options.resolveIcon?.(r.data.data.icon),url:t.options.getUrl(r.data.slugs,t.lang),$ref:t.options.noRef?void 0:{file:r.file.path}};return o(t.options.attachFile?.(n,e)??n)}function b(e){let t=f(e.storage.root(),!0,e);return{name:t.name,children:t.children}}function g(e,t,r){if(r.lang)return r.storage.read(`${e}.${r.lang}`,t)}function h(e){let t=n(a(e)),r=t.slice(0,-1).join("/"),o=t.at(-1)??"",l=o.lastIndexOf("."),i=-1!==l?o.slice(0,l):o,s=[r,i].filter(e=>e.length>0).join("/"),[c,d]=y(i);return{dirname:r,name:c,flattenedPath:s,locale:d,path:t.join("/")}}function m(e){let t=n(a(e)),[r,o]=y(t.at(-1)??""),l=t.join("/");return{dirname:t.slice(0,-1).join("/"),name:r,flattenedPath:l,locale:o,path:l}}function y(e){let t=e.lastIndexOf(".");if(-1===t)return[e];let r=e.slice(t+1);return/\d+/.exec(r)?[e]:[e.slice(0,t),r]}function v(e){let t=n(a(e));if("."===t[0]||".."===t[0])throw Error("It must not start with './' or '../'");return t.join("/")}((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})({},{Storage:()=>x});var x=class{constructor(){this.files=new Map,this.folders=new Map,this.rootFolder={file:m(""),children:[]},this.folders.set("",this.rootFolder)}read(e,t){return this.files.get(`${e}.${t}`)}readDir(e){return this.folders.get(e)}root(){return this.rootFolder}write(e,t,r){let o={format:t,file:h(e),data:r};this.makeDir(o.file.dirname),this.readDir(o.file.dirname)?.children.push(o),this.files.set(`${o.file.flattenedPath}.${o.format}`,o)}list(){return[...this.files.values()]}makeDir(e){let t=n(e);for(let e=0;e<t.length;e++){let r=t.slice(0,e+1).join("/");if(this.folders.has(r))continue;let o={file:m(r),children:[]};this.folders.set(o.file.path,o),this.readDir(o.file.dirname)?.children.push(o)}}};function w(e){return[...e.dirname.split("/"),e.name].filter((e,t,r)=>0!==e.length&&(t===r.length-1?"index"!==e:!/^\(.+\)$/.test(e)))}function k(e){return function(e){var t,r;e.url||e.baseUrl||console.warn("`loader()` now requires a `baseUrl` option to be defined.");let{source:o,rootDir:n="",slugs:l=w}=e,a=e.url??(t=e.baseUrl??"/",r=e.i18n,(e,o)=>{let n;let l=r?.hideLocale??"never";"never"===l?n=o:"default-locale"===l&&o!==r?.defaultLanguage&&(n=o);let a=n?[n,...t.split("/"),...e]:[...t.split("/"),...e];return`/${a.filter(e=>e.length>0).join("/")}`}),i=function(e,t){let{transformers:r=[]}=t,o=new x,n=v(t.rootDir??"");for(let r of e){let e=v(r.path);if(!e.startsWith(n))continue;let l=e.slice(n.length);if("page"===r.type){let e=r.slugs??t.getSlugs(h(l));o.write(l,r.type,{slugs:e,data:r.data})}"meta"===r.type&&o.write(l,r.type,r.data)}for(let e of r)e({storage:o,options:t});return o}("function"==typeof o.files?o.files(n):o.files,{transformers:e.transformers,rootDir:n,getSlugs:l}),s=function(e,t,r=[]){let o=new Map,n=new Map,l=new Map,a=new Map;for(let i of(o.set("",a),e.list()))if("meta"===i.format&&l.set(i.file.path,{file:i.file,data:i.data}),"page"===i.format){let l=j(i,t,i.file.locale);if(n.set(i.file.path,l),i.file.locale)continue;for(let n of(a.set(l.slugs.join("/"),l),r)){let r=o.get(n)??new Map,l=j(e.read(`${i.file.flattenedPath}.${n}`,"page")??i,t,n);r.set(l.slugs.join("/"),l),o.set(n,r)}}return{i18n:o,pathToPage:n,pathToMeta:l}}(i,a,e.i18n?.languages),c={build(e){return b({options:e,builder:this,storage:e.storage})},buildI18n({i18n:e,...t}){return Object.fromEntries(e.languages.map(r=>{let o=b({lang:r,options:t,builder:this,storage:t.storage,i18n:e});return[r,o]}))}},d=void 0===e.i18n?c.build({storage:i,resolveIcon:e.icon,getUrl:a,...e.pageTree}):c.buildI18n({storage:i,resolveIcon:e.icon,getUrl:a,i18n:e.i18n,...e.pageTree});return{_i18n:e.i18n,pageTree:d,getPages:(t=e.i18n?.defaultLanguage??"")=>Array.from(s.i18n.get(t)?.values()??[]),getLanguages(){let e=[];for(let[t,r]of s.i18n)""!==t&&e.push({language:t,pages:Array.from(r.values())});return e},getPage:(t=[],r=e.i18n?.defaultLanguage??"")=>s.i18n.get(r)?.get(t.join("/")),getNodeMeta(e){if(e.$ref?.metaFile)return s.pathToMeta.get(e.$ref.metaFile)},getNodePage(e){if(e.$ref?.file)return s.pathToPage.get(e.$ref.file)},generateParams(t,r){return e.i18n?this.getLanguages().flatMap(e=>e.pages.map(o=>({[t??"slug"]:o.slugs,[r??"lang"]:e.language}))):Array.from(s.i18n.get("")?.values()??[]).map(e=>({[t??"slug"]:e.slugs}))}}}(e)}function j(e,t,r){return{file:e.file,url:t(e.data.slugs,r),slugs:e.data.slugs,data:e.data.data,locale:r}}},856:(e,t,r)=>{"use strict";r.d(t,{QP:()=>V});let o=e=>{let t=i(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||a(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let a=e.join("-");return t.validators.find(({validator:e})=>e(a))?.classGroupId},l=/^\[(.+)\]$/,a=e=>{if(l.test(e)){let t=l.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},i=e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),r).forEach(([e,r])=>{s(r,o,e,t)}),o},s=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:c(t,e)).classGroupId=r;return}if("function"==typeof e){if(d(e)){s(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{s(n,c(t,e),r,o)})})},c=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},d=e=>e.isThemeGetter,u=(e,t)=>t?e.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):e,f=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,l)=>{r.set(n,l),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},p=e=>{let{separator:t,experimentalParseClassName:r}=e,o=1===t.length,n=t[0],l=t.length,a=e=>{let r;let a=[],i=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===i){if(d===n&&(o||e.slice(c,c+l)===t)){a.push(e.slice(s,c)),s=c+l;continue}if("/"===d){r=c;continue}}"["===d?i++:"]"===d&&i--}let c=0===a.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:a,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:r&&r>s?r-s:void 0}};return r?e=>r({className:e,parseClassName:a}):a},b=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t},g=e=>({cache:f(e.cacheSize),parseClassName:p(e),...o(e)}),h=/\s+/,m=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,l=[],a=e.trim().split(h),i="";for(let e=a.length-1;e>=0;e-=1){let t=a[e],{modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=r(t),f=!!u,p=o(f?d.substring(0,u):d);if(!p){if(!f||!(p=o(d))){i=t+(i.length>0?" "+i:i);continue}f=!1}let g=b(s).join(":"),h=c?g+"!":g,m=h+p;if(l.includes(m))continue;l.push(m);let y=n(p,f);for(let e=0;e<y.length;++e){let t=y[e];l.push(h+t)}i=t+(i.length>0?" "+i:i)}return i};function y(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o}let v=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=v(e[o]))&&(r&&(r+=" "),r+=t);return r},x=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,j=new Set(["px","full","screen"]),M=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,P=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,C=e=>S(e)||j.has(e)||k.test(e),$=e=>q(e,"length",K),S=e=>!!e&&!Number.isNaN(Number(e)),I=e=>q(e,"number",S),E=e=>!!e&&Number.isInteger(Number(e)),R=e=>e.endsWith("%")&&S(e.slice(0,-1)),L=e=>w.test(e),N=e=>M.test(e),T=new Set(["length","size","percentage"]),G=e=>q(e,T,H),A=e=>q(e,"position",H),D=new Set(["image","url"]),W=e=>q(e,D,Q),F=e=>q(e,"",B),U=()=>!0,q=(e,t,r)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},K=e=>z.test(e)&&!P.test(e),H=()=>!1,B=e=>_.test(e),Q=e=>O.test(e);Symbol.toStringTag;let V=function(e,...t){let r,o,n;let l=function(i){return o=(r=g(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,l=a,a(i)};function a(e){let t=o(e);if(t)return t;let l=m(e,r);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=x("colors"),t=x("spacing"),r=x("blur"),o=x("brightness"),n=x("borderColor"),l=x("borderRadius"),a=x("borderSpacing"),i=x("borderWidth"),s=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),f=x("gap"),p=x("gradientColorStops"),b=x("gradientColorStopPositions"),g=x("inset"),h=x("margin"),m=x("opacity"),y=x("padding"),v=x("saturate"),w=x("scale"),k=x("sepia"),j=x("skew"),M=x("space"),z=x("translate"),P=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",L,t],T=()=>[L,t],D=()=>["",C,$],q=()=>["auto",S,L],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",L],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[S,L];return{cacheSize:500,separator:":",theme:{colors:[U],spacing:[C,$],blur:["none","",N,L],brightness:X(),borderColor:[e],borderRadius:["none","","full",N,L],borderSpacing:T(),borderWidth:D(),contrast:X(),grayscale:V(),hueRotate:X(),invert:V(),gap:T(),gradientColorStops:[e],gradientColorStopPositions:[R,$],inset:O(),margin:O(),opacity:X(),padding:T(),saturate:X(),scale:X(),sepia:V(),skew:X(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",L]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),L]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E,L]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",L]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",E,L]}],"grid-cols":[{"grid-cols":[U]}],"col-start-end":[{col:["auto",{span:["full",E,L]},L]}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":[U]}],"row-start-end":[{row:["auto",{span:[E,L]},L]}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",L]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",L]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",L,t]}],"min-w":[{"min-w":[L,t,"min","max","fit"]}],"max-w":[{"max-w":[L,t,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[L,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[L,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[L,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[L,t,"auto","min","max","fit"]}],"font-size":[{text:["base",N,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[U]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",L]}],"line-clamp":[{"line-clamp":["none",S,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,L]}],"list-image":[{"list-image":["none",L]}],"list-style-type":[{list:["none","disc","decimal",L]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,$]}],"underline-offset":[{"underline-offset":["auto",C,L]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",L]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),A]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",G]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},W]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:H()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[C,L]}],"outline-w":[{outline:[C,$]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[C,$]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,F]}],"shadow-color":[{shadow:[U]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",N,L]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",L]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",L]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",L]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[E,L]}],"translate-x":[{"translate-x":[z]}],"translate-y":[{"translate-y":[z]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",L]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",L]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",L]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,$,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);