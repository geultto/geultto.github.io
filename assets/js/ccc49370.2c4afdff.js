"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{9209:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(7294);var r=t(512),i=t(8264),s=t(5281),a=t(3548),l=t(1627),o=t(1161),c=t(5999),d=t(2244),u=t(5893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,a.nO)(),{title:t,description:r,date:s,tags:l,authors:o,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.d,{title:t,description:r,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),o.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var f=t(5742);function x(){const e=(0,a.iZ)();return(0,u.jsx)(f.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var g=t(9407),v=t(7662);function p(e){let{sidebar:n,children:t}=e;const{metadata:r,toc:i}=(0,a.nO)(),{nextItem:s,prevItem:c,frontMatter:d}=r,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:x}=d;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!h&&i.length>0?(0,u.jsx)(g.Z,{toc:i,minHeadingLevel:f,maxHeadingLevel:x}):void 0,children:[(0,u.jsx)(v.Z,{metadata:r}),(0,u.jsx)(o.Z,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function j(e){const n=e.content;return(0,u.jsx)(a.n4,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(x,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},3230:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var r=t(512),i=t(4061),s=t(5281),a=t(9047),l=t(5893);function o(e){let{className:n}=e;return(0,l.jsx)(a.Z,{type:"caution",title:(0,l.jsx)(i.cI,{}),className:(0,r.Z)(n,s.k.common.unlistedBanner),children:(0,l.jsx)(i.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.T$,{}),(0,l.jsx)(o,{...e})]})}},7662:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var r=t(512),i=t(4061),s=t(5281),a=t(9047),l=t(5893);function o(e){let{className:n}=e;return(0,l.jsx)(a.Z,{type:"caution",title:(0,l.jsx)(i.ht,{}),className:(0,r.Z)(n,s.k.common.draftBanner),children:(0,l.jsx)(i.xo,{})})}var c=t(3230);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:r}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||r.unlisted)&&(0,l.jsx)(c.Z,{}),r.draft&&(0,l.jsx)(o,{})]})}},9407:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var r=t(512),i=t(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=t(5893);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(i.Z,{...t,linkClassName:l,linkActiveClassName:o})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(7294),i=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):r.push(i)})),r}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>l(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,r.useRef)(void 0),t=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let i=n;i<=t;i+=1)r.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:a}),c=o(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(3692),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:r,isChild:i}=e;return n.length?(0,m.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const f=r.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,i.L)(),g=c??x.tableOfContents.minHeadingLevel,v=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,r.useMemo)((()=>a({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:g,maxHeadingLevel:v});return d((0,r.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:v}}),[l,o,g,v])),(0,m.jsx)(f,{toc:p,className:t,linkClassName:l,...h})}},4061:(e,n,t)=>{t.d(n,{T$:()=>o,cI:()=>a,eU:()=>l,ht:()=>c,xo:()=>d});t(7294);var r=t(5999),i=t(5742),s=t(5893);function a(){return(0,s.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},1627:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512),i=t(6040),s=t(5893);function a(e){const{toc:n,children:t,...a}=e;return(0,s.jsx)(i.Z,{...a,children:(0,s.jsx)("div",{className:"container margin-vert--lg",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("main",{className:(0,r.Z)("col col-7"),children:t}),n&&(0,s.jsx)("div",{className:"col col--2",children:n})]})})})}},5460:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(4087),i=t(7294),s=t(8192);const a="curationContentContainer_ljt9",l="curationContent_VE8p",o="authorContainer_mfGu",c="authorImg_Jh1K",d="curationContentLink_G8xS",u="curationContentThumbnail_T71x";var m=t(5893);function h(e){const n=["th","st","nd","rd"],t=e%100;return e+(n[(t-20)%10]||n[t]||n[0])}const f=i.createContext({curation:null,authors:null,metadata:null}),x=e=>{const{"\uc81c\ubaa9":n,"\uc8fc\uc18c":t,"\uc791\uac00":r,"\uc124\uba85":s}=e,a=i.useContext(f).authors,h=i.useContext(f).metadata,x=a[r],g=h?.find((e=>e.author===r))?.ogImage;return(0,m.jsx)("div",{className:l,children:x?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("img",{className:c,src:x.image_url,alt:x.name}),(0,m.jsx)("a",{href:x.url,target:"_blank",rel:"noreferrer",children:x.name}),"\ub2d8\uc758"]}),(0,m.jsx)("a",{className:d,href:t,target:"_blank",rel:"noreferrer",children:n}),g&&(0,m.jsx)("img",{className:u,src:g,alt:x.name}),(0,m.jsx)("p",{children:s})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{children:[r,"\ub2d8\uc758"]}),(0,m.jsx)("a",{className:d,href:t,target:"_blank",rel:"noreferrer",children:n}),(0,m.jsx)("p",{children:s})]})})},g={questionContainer:"questionContainer_TxWd",title:"title_v2PZ",content:"content_GbRl",center:"center_WitD"};var v=t(512);const p={answerContainer:"answerContainer_l8H1",profile:"profile_Lkl2",name:"name_yJT3",profileContainer:"profileContainer_YRmr",content:"content_s92A"},j="divider_bnZE",b="profileCard_Gab7",_="content_iM_e",N="tooltip_DQDi",L="target_qu6L",C={...r.Z,Curation:e=>{let{"\ud68c\ucc28":n,"\uae30\uc218":t=10,"\uc9c1\uad70":r}=e;const l=h(n),o=h(t),[c,d]=i.useState(null),[u,g]=i.useState(null),[v,p]=i.useState(null);return i.useEffect((()=>{(async()=>{try{const e=await fetch(`/__metadata__/curation-${t}-${n}.json`),r=await e.json();p(r)}catch(e){console.error("Error loading the __metadata__ file:",e)}})()}),[t,n]),i.useEffect((()=>{(async()=>{try{const e=await fetch("/curation.yml"),n=await e.text(),t=s.ZP.parse(n);d(t)}catch(e){console.error("Error loading the Curation YAML file:",e)}})()}),[]),i.useEffect((()=>{(async()=>{try{const e=await fetch("/authors.yml"),n=await e.text(),t=s.ZP.parse(n);g(t)}catch(e){console.error("Error loading the Author YAML file:",e)}})()}),[]),c&&u?(0,m.jsx)(f.Provider,{value:{curation:c,authors:u,metadata:v},children:(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:r?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:r}),c[o]?.[l]?.[r]?.map((e=>(0,m.jsx)(x,{...e},e.\uc81c\ubaa9)))]}):(0,m.jsx)(m.Fragment,{children:Object.entries(c[o]?.[l]).map((e=>{let[n,t]=e;return(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)("h2",{children:n}),t.map((e=>(0,m.jsx)(x,{...e},e.\uc81c\ubaa9)))]},n)}))})})}):(0,m.jsx)("div",{children:"Loading..."})},Question:e=>{let{children:n}=e;return(0,m.jsxs)("div",{className:g.questionContainer,children:[(0,m.jsx)("div",{className:g.header,children:(0,m.jsx)("p",{className:g.title,children:"Q."})}),n]})},Answer:e=>{const{children:n,profileImg:t,name:r="",direction:i="right"}=e;return(0,m.jsxs)("div",{className:(0,v.Z)(p.answerContainer,p[i]),children:["left"===i&&(0,m.jsx)("div",{className:p.content,children:n}),t&&(0,m.jsxs)("div",{className:p.profileContainer,children:[(0,m.jsx)("div",{className:p.profile,children:(0,m.jsx)("img",{src:t,alt:"profile"})}),r&&(0,m.jsx)("p",{className:p.name,children:r})]}),("right"===i||"center"===i)&&(0,m.jsx)("div",{className:p.content,children:n})]})},Divider:()=>(0,m.jsx)("div",{className:j}),ProfileCard:e=>{const{profileImg:n,title:t,url:r,children:i}=e;return(0,m.jsxs)("a",{className:b,href:r,children:[(0,m.jsx)("img",{src:n,alt:"Profile"}),(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)("h3",{children:t}),i,(0,m.jsx)("p",{children:r})]})]})},HintTooltip:e=>{let{children:n,content:t}=e;const[r,s]=(0,i.useState)(!1),[a,l]=(0,i.useState)({top:0,left:0}),o=(0,i.useRef)(null),c=(0,i.useRef)(null),d=()=>{s(!0),h()},u=()=>{s(!1)},h=()=>{const e=o.current,n=c.current;if(e&&n){const t=e.getBoundingClientRect(),r=n.getBoundingClientRect();let i=r.top-t.height-8,s=r.left+r.width/2-t.width/2;i<0&&(i=r.bottom+8),s<0&&(s=8),s+t.width>window.innerWidth&&(s=window.innerWidth-t.width-8),l({top:i+window.scrollY,left:s+window.scrollX})}};(0,i.useEffect)((()=>(r?(h(),window.addEventListener("scroll",u),window.addEventListener("resize",u)):(window.removeEventListener("scroll",u),window.removeEventListener("resize",u)),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u)})),[r]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{ref:c,className:L,onMouseEnter:d,onMouseLeave:u,onClick:d,onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||d()},children:[n,(0,m.jsx)("sup",{children:"!"})]}),r&&(0,m.jsx)("div",{ref:o,className:N,style:{top:a.top,left:a.left},children:t})]})}}}}]);