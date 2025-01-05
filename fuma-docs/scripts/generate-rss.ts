// // TODO:

// import { blogSource, curationSource, guideSource } from '@/src/lib/source';
// import { generateFeed } from '@/src/lib/rss';
// import fs from 'fs';
// import path from 'path';

// async function generateRSSFeeds() {
//   // 각 섹션별 피드 생성
//   const feeds = {
//     blog: generateFeed({
//       title: '글또 블로그',
//       description: '글또 블로그 RSS 피드',
//       posts: blogSource.getPages().map(page => ({
//         title: page.data.title,
//         description: page.data.description || "",
//         date: new Date(page.data.date || Date.now()),
//         url: `https://geultto.github.io/blog/${page.slug}`,
//         author: "글쓰는 또라이"
//       }))
//     }),
//     curation: generateFeed({
//       title: '글또 큐레이션',
//       description: '글또 큐레이션 RSS 피드',
//       posts: curationSource.getPages().map(page => ({
//         title: page.data.title,
//         description: page.data.description,
//         date: new Date(page.data.date || Date.now()),
//         url: `https://geultto.github.io/curation/${page.slug}`,
//         author: page.data.author
//       }))
//     }),
//     guide: generateFeed({
//       title: '글또 가이드',
//       description: '글또 가이드 RSS 피드',
//       posts: guideSource.getPages().map(page => ({
//         title: page.data.title,
//         description: page.data.description,
//         date: new Date(page.data.date || Date.now()),
//         url: `https://geultto.github.io/guide/${page.slug}`,
//         author: page.data.author
//       }))
//     })
//   };

//   // public 디렉토리에 RSS 파일 생성
//   const publicDir = path.join(process.cwd(), 'public');
  
//   // public 디렉토리가 없다면 생성
//   if (!fs.existsSync(publicDir)) {
//     fs.mkdirSync(publicDir);
//   }

//   // 각 피드 파일 작성
//   Object.entries(feeds).forEach(([type, feed]) => {
//     fs.writeFileSync(
//       path.join(publicDir, `${type}.xml`),
//       feed.rss2()
//     );
//   });
// }

// generateRSSFeeds(); 