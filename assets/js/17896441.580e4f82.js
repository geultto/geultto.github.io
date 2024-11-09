"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{3230:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(4061),i=n(5281),l=n(9047),r=n(5893);function o(e){let{className:t}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(a.cI,{}),className:(0,s.Z)(t,i.k.common.unlistedBanner),children:(0,r.jsx)(a.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.T$,{}),(0,r.jsx)(o,{...e})]})}},7662:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var s=n(512),a=n(4061),i=n(5281),l=n(9047),r=n(5893);function o(e){let{className:t}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(a.ht,{}),className:(0,s.Z)(t,i.k.common.draftBanner),children:(0,r.jsx)(a.xo,{})})}var c=n(3230);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||s.unlisted)&&(0,r.jsx)(c.Z,{}),s.draft&&(0,r.jsx)(o,{})]})}},9152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var s=n(7294),a=n(8264),i=n(902),l=n(5893);const r=s.createContext(null);function o(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(r.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(r);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(512),m=n(7524),h=n(5999),x=n(2244);function v(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(x.Z,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(x.Z,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=c();return(0,l.jsx)(v,{previous:e.previous,next:e.next})}var g=n(2263),f=n(3692),p=n(143),j=n(5281),C=n(298),L=n(3797);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function Z(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(f.Z,{to:n,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.Z)(),{pluginId:a}=(0,p.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,C.J)(a),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,p.Jo)(a),c=r??(d=o).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(Z,{versionLabel:o.label,to:c.path,onClick:()=>i(o.name)})})]})}function T(e){let{className:t}=e;const n=(0,L.E)();return n.banner?(0,l.jsx)(k,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,L.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var y=n(1526),M=n(7265);function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,r=!!(t||n||s);return i||r?(0,l.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.Z)("row margin-top--sm",j.k.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(y.Z,{tags:a})})}),r&&(0,l.jsx)(M.Z,{className:(0,u.Z)("margin-top--sm",j.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var w=n(6043),E=n(3743);const B={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function A(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",B.tocCollapsibleButton,!t&&B.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const V={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:r}=(0,w.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!i&&V.tocCollapsibleExpanded,n),children:[(0,l.jsx)(A,{collapsed:i,onClick:r}),(0,l.jsx)(w.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(E.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const S={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,S.tocMobile)})}var P=n(9407);function R(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(P.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var U=n(2503),D=n(5042);function z(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(U.Z,{as:"h1",children:n})}),(0,l.jsx)(D.Z,{children:t})]})}var G=n(6565),$=n(8596),q=n(4996);function J(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const W={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Y(){const e=(0,q.ZP)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(f.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(J,{className:W.breadcrumbHomeIcon})})})}const K={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Q(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(f.Z,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function X(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,G.s1)(),t=(0,$.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(Y,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(X,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(Q,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var te=n(7662);const ne={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(F,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(R,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ne.docItemCol),children:[(0,l.jsx)(te.Z,{metadata:s}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:ne.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ee,{}),(0,l.jsx)(H,{}),n.mobile,(0,l.jsx)(z,{children:t}),(0,l.jsx)(I,{})]}),(0,l.jsx)(b,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ae(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(o,{content:e.content,children:(0,l.jsxs)(a.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(se,{children:(0,l.jsx)(n,{})})]})})}},2244:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var s=n(512),a=n(3692),i=n(5893);function l(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return(0,i.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(5893);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:r,linkActiveClassName:o})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>v});var s=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>r(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(3692),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,a.L)(),b=c??v.tableOfContents.minHeadingLevel,g=u??v.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:b,maxHeadingLevel:g}}),[r,o,b,g])),(0,m.jsx)(x,{toc:f,className:n,linkClassName:r,...h})}},3008:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(512),a=n(3692);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(5893);function r(e){let{permalink:t,label:n,count:r,description:o}=e;return(0,l.jsxs)(a.Z,{href:t,title:o,className:(0,s.Z)(i.tag,r?i.tagWithCount:i.tagRegular),children:[n,r&&(0,l.jsx)("span",{children:r})]})}},1526:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(512),a=n(5999),i=n(3008);const l={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(5893);function o(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(i.Z,{...e})},e.permalink)))})]})}},4061:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>l,eU:()=>r,ht:()=>c,xo:()=>d});n(7294);var s=n(5999),a=n(5742),i=n(5893);function l(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(a.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},8398:(e,t,n)=>{n.d(t,{Z:()=>v});var s=n(4087),a=n(7294),i=n(8192);const l="curationContentContainer_ljt9",r="curationContent_VE8p",o="authorContainer_mfGu",c="authorImg_Jh1K",d="curationContentLink_G8xS";var u=n(5893);function m(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}const h=a.createContext({curation:null,authors:null}),x=e=>{const{"\uc81c\ubaa9":t,"\uc8fc\uc18c":n,"\uc791\uac00":s,"\uc124\uba85":i}=e,l=a.useContext(h).authors[s];return(0,u.jsx)("div",{className:r,children:l?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("img",{className:c,src:l.image_url,alt:l.name}),(0,u.jsx)("a",{href:l.url,children:l.name}),"\ub2d8\uc758"]}),(0,u.jsx)("a",{className:d,href:n,children:t}),(0,u.jsx)("p",{children:i})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("span",{children:[s,"\ub2d8\uc758"]}),(0,u.jsx)("a",{className:d,href:n,children:t}),(0,u.jsx)("p",{children:i})]})})},v={...s.Z,Curation:e=>{let{"\ud68c\ucc28":t,"\uae30\uc218":n=10,"\uc9c1\uad70":s}=e;const r=m(t),o=m(n),[c,d]=a.useState(null),[v,b]=a.useState(null);return a.useEffect((()=>{(async()=>{try{const e=await fetch("/curation.yml"),t=await e.text(),n=i.ZP.parse(t);d(n)}catch(e){console.error("Error loading the YAML file:",e)}})()}),[]),a.useEffect((()=>{(async()=>{try{const e=await fetch("/authors.yml"),t=await e.text(),n=i.ZP.parse(t);b(n)}catch(e){console.error("Error loading the YAML file:",e)}})()}),[]),c&&v?(0,u.jsx)(h.Provider,{value:{curation:c,authors:v},children:(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:s}),c[o]?.[r]?.[s]?.map((e=>(0,u.jsx)(x,{...e},e.\uc81c\ubaa9)))]}):(0,u.jsx)(u.Fragment,{children:Object.entries(c[o]?.[r]).map((e=>{let[t,n]=e;return(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)("h2",{children:t}),n.map((e=>(0,u.jsx)(x,{...e},e.\uc81c\ubaa9)))]},t)}))})})}):(0,u.jsx)("div",{children:"Loading..."})}}}}]);