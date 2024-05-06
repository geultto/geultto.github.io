"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[118],{3665:(e,t,a)=>{a.d(t,{Z:()=>B});a(7294);var s=a(512),n=a(9460),l=a(5893);function r(e){let{children:t,className:a}=e;return(0,l.jsx)("article",{className:a,children:t})}var i=a(3692);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,n.C)(),{permalink:c,title:d}=a,u=r?"h1":"h2";return(0,l.jsx)(u,{className:(0,s.Z)(o.title,t),children:r?d:(0,l.jsx)(i.Z,{to:c,children:d})})}var d=a(5999),u=a(8824),m=a(9788);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.c)();return t=>{const a=Math.ceil(t);return e(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)(l.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,children:a})}function x(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:r,readingTime:i}=a,o=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,s.Z)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(g,{readingTime:i})]})]});var c}function f(e){return e.href?(0,l.jsx)(i.Z,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function v(e){let{author:t,className:a}=e;const{name:n,title:r,url:i,imageURL:o,email:c}=t,d=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,s.Z)("avatar margin-bottom--sm",a),children:[o&&(0,l.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,l.jsxs)("div",{className:"avatar__intro",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(f,{href:d,children:(0,l.jsx)("span",{children:n})})}),r&&(0,l.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,n.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",i?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.Z)(!i&&"col col--6",i?b.imageOnlyAuthorCol:b.authorCol),children:(0,l.jsx)(v,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(c,{}),(0,l.jsx)(j,{}),(0,l.jsx)(Z,{})]})}var U=a(8780),_=a(7395);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,n.C)();return(0,l.jsx)("div",{id:r?U.blogPostContainerID:void 0,className:(0,s.Z)("markdown",a),children:(0,l.jsx)(_.Z,{children:t})})}var y=a(5281),P=a(7265),k=a(1526);function C(){return(0,l.jsx)("b",{children:(0,l.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function T(e){const{blogPostTitle:t,...a}=e;return(0,l.jsx)(i.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,l.jsx)(C,{})})}function A(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:r,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=a.length>0;if(!(m||u||i))return null;if(t){const e=!!(i||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,s.Z)("row","margin-top--sm",y.k.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(k.Z,{tags:a})})}),e&&(0,l.jsx)(P.Z,{className:(0,s.Z)("margin-top--sm",y.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,s.Z)("col",{"col--9":u}),children:(0,l.jsx)(k.Z,{tags:a})}),u&&(0,l.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":m}),children:(0,l.jsx)(T,{blogPostTitle:r,to:e.permalink})})]})}function B(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(r,{className:(0,s.Z)(i,a),children:[(0,l.jsx)(N,{}),(0,l.jsx)(w,{children:t}),(0,l.jsx)(A,{})]})}},7265:(e,t,a)=>{a.d(t,{Z:()=>x});a(7294);var s=a(512),n=a(5999),l=a(5281),r=a(3692);const i={iconEdit:"iconEdit_Z9Sw"};var o=a(5893);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(r.Z,{to:t,className:l.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=a(9788);function m(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,u.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:l.k.common.lastUpdated,children:[(0,o.jsx)(n.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(m,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function x(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:l}=e;return(0,o.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(d,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.Z)("col",p.lastUpdated),children:(n||l)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:l})})]})}},2244:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var s=a(512),n=a(3692),l=a(5893);function r(e){const{permalink:t,title:a,subLabel:r,isNext:i}=e;return(0,l.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},3008:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var s=a(512),n=a(3692);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(5893);function i(e){let{permalink:t,label:a,count:i}=e;return(0,r.jsxs)(n.Z,{href:t,className:(0,s.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,r.jsx)("span",{children:i})]})}},1526:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var s=a(512),n=a(5999),l=a(3008);const r={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(5893);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.Z)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,i.jsx)("li",{className:r.tag,children:(0,i.jsx)(l.Z,{label:t,permalink:a})},a)}))})]})}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var s=a(7294),n=a(902),l=a(5893);const r=s.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,l.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},9788:(e,t,a)=>{a.d(t,{P:()=>n});var s=a(2263);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.Z)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(7294),n=a(2263);const l=["zero","one","two","few","many","other"];function r(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return s[Math.min(l,s.length-1)]}(a,t,e)}}}}]);