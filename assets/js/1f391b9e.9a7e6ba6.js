"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85],{7662:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var a=t(512),l=t(4061),s=t(5281),i=t(9047),r=t(5893);function c(e){let{className:n}=e;return(0,r.jsx)(i.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,a.Z)(n,s.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var o=t(3230);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||a.unlisted)&&(0,r.jsx)(o.Z,{}),a.draft&&(0,r.jsx)(c,{})]})}},4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(7294);var a=t(512),l=t(8264),s=t(5281),i=t(6040),r=t(7395),c=t(9407),o=t(7662),d=t(7265);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(5893);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:v,editUrl:g,description:h,frontMatter:x,lastUpdatedBy:p,lastUpdatedAt:L}=t,{keywords:N,wrapperClassName:j,hide_table_of_contents:C}=x,H=f.image??x.image,k=!!(g||L||p);return(0,u.jsx)(l.FG,{className:(0,a.Z)(j??s.k.wrapper.mdxPages,s.k.page.mdxPage),children:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(l.d,{title:v,description:h,keywords:N,image:H}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.Z)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.Z)("col",!C&&"col--8"),children:[(0,u.jsx)(o.Z,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.Z,{children:(0,u.jsx)(n,{})})}),k&&(0,u.jsx)(d.Z,{className:(0,a.Z)("margin-top--sm",s.k.pages.pageFooterEditMetaRow),editUrl:g,lastUpdatedAt:L,lastUpdatedBy:p})]}),!C&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.Z,{toc:n.toc,minHeadingLevel:x.toc_min_heading_level,maxHeadingLevel:x.toc_max_heading_level})})]})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512),l=t(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=t(5893);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,a.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,i.jsx)(l.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(7294),l=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:s,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(3692),u=t(5893);function f(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?(0,u.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const v=a.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const g=(0,l.L)(),h=o??g.tableOfContents.minHeadingLevel,x=m??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:s(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:x}}),[r,c,h,x])),(0,u.jsx)(v,{toc:p,className:t,linkClassName:r,...f})}}}]);