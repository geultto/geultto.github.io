import yaml from "yaml";
import { readFileSync, writeFileSync } from "node:fs";
import fetch from "node-fetch";
import { parse } from "node-html-parser";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import path from "node:path";

import type { CurationYml } from "@site/src/components/Curation";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function normalizeImageUrl(imageUrl: string, baseUrl: string) {
  if (!imageUrl) return imageUrl;

  //로 시작하는 경우 (브런치 예외 케이스)
  if (imageUrl.startsWith("//")) {
    return `https:${imageUrl}`;
  }

  // /로 시작하는 경우 (상대 경로)
  if (imageUrl.startsWith("/")) {
    const url = new URL(baseUrl);
    return `${url.protocol}//${url.host}${imageUrl}`;
  }

  return imageUrl;
}

async function getMetadata(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const root = parse(html);

    const ogImage = root.querySelector('meta[property="og:image"]')?.getAttribute("content");
    const ogImageUrl = normalizeImageUrl(ogImage, url) || null;

    const metadata = {
      url,
      ogTitle: root.querySelector('meta[property="og:title"]')?.getAttribute("content"),
      ogDescription: root.querySelector('meta[property="og:description"]')?.getAttribute("content"),
      ogImage: ogImageUrl,
    };

    // og 태그가 없는 경우를 위한 폴백
    if (!metadata.ogTitle) metadata.ogTitle = root.querySelector("title")?.text;

    return metadata;
  } catch (error) {
    console.error(`Error fetching metadata for ${url}:`, error);
    return { url, error: error.message };
  }
}

// 딜레이 함수
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function toOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

async function processYaml({ 기수, 회차, 파일이름 }: { 기수: number; 회차: number; 파일이름?: string }) {
  try {
    // YAML 파일 읽기
    const 기수문자열 = toOrdinal(기수);
    const 회차문자열 = toOrdinal(회차);
    const inputPath = path.join(__dirname, "../static/curation.yml");
    console.log(`Reading YAML file: ${inputPath}`);

    const fileContents = readFileSync(inputPath, "utf8");
    const data = yaml.parse(fileContents) as CurationYml;

    const results = [];
    const curations = data[기수문자열][회차문자열];

    // 모든 카테고리를 순회
    for (const [category, items] of Object.entries(curations)) {
      for (const item of items) {
        const url = item.주소;
        console.log(`Fetching metadata for: ${url}`);
        const metadata = await getMetadata(url);
        await delay(1000); // 1초 딜레이
        results.push({
          category,
          author: item.작가,
          originalTitle: item.제목,
          originalDescription: item.설명,
          ...metadata,
        });
      }
    }

    // 결과를 JSON 파일로 저장
    const outputFileName = 파일이름 ? `${파일이름}.json` : `curation-${기수}-${회차}.json`;
    const outputPath = path.join(__dirname, "../static/__metadata__", outputFileName);
    writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`Results have been saved to ${outputFileName}`);
  } catch (error) {
    console.error("Error processing YAML:", error);
  }
}

// 스크립트 실행
processYaml({
  기수: 10,
  회차: 1,
  파일이름: "curation-10-1",
});
