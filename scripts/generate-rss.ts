import { blogSource, curationSource, guideSource } from '../src/lib/source';
import { generateFeed } from '../src/lib/rss';
import fs from 'node:fs';
import path from 'node:path';

async function generateRSSFeeds() {
  // 각 섹션별 피드 생성
  const feeds = {
    blog: generateFeed({
      title: '글또 블로그',
      description: '글또 블로그 RSS 피드',
      posts: blogSource.getPages().map(page => ({
        title: page.data.title,
        description: page.data.description || "",
        date: new Date(Date.now()),
        url: `https://geultto.github.io/blog/${page.slugs.join('/')}`,
      }))
    }),
    curation: generateFeed({
      title: '글또 큐레이션',
      description: '글또 큐레이션 RSS 피드',
      posts: curationSource.getPages().map(page => ({
        title: page.data.title,
        description: page.data.description || "",
        date: new Date(Date.now()),
        url: `https://geultto.github.io/curation/${page.slugs.join('/')}`,
      }))
    }),
    guide: generateFeed({
      title: '글또 가이드',
      description: '글또 가이드 RSS 피드',
      posts: guideSource.getPages().map(page => ({
        title: page.data.title,
        description: page.data.description || "",
        date: new Date(Date.now()),
        url: `https://geultto.github.io/guide/${page.slugs.join('/')}`,
      }))
    })
  };

  // public 디렉토리에 RSS 파일 생성
  const publicDir = path.join(process.cwd(), 'public');
  
  // public 디렉토리가 없다면 생성
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // 각 피드 파일 작성
  for (const [type, feed] of Object.entries(feeds)) {
    const dir = path.join(publicDir, type);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(
      path.join(dir, "rss.xml"),
      feed.rss2()
    );
  }
}

generateRSSFeeds();
