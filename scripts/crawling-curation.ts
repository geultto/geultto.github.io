import yaml from "yaml";
import { readFileSync, writeFileSync } from "node:fs";
import fetch from "node-fetch";
import { parse } from "node-html-parser";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import path from "node:path";
import fs from "node:fs";

import type { CurationYml } from "@/src/types/curation";

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
    const ogImageUrl = normalizeImageUrl(ogImage ?? "", url) || null;

    const metadata = {
      url,
      ogTitle: root.querySelector('meta[property="og:title"]')?.getAttribute("content") || null,
      ogDescription: root.querySelector('meta[property="og:description"]')?.getAttribute("content") || null,
      ogImage: ogImageUrl,
    };

    // og 태그가 없는 경우를 위한 폴백
    if (!metadata.ogTitle) metadata.ogTitle = root.querySelector("title")?.text || null;

    return metadata;
  } catch (error) {
    console.error(`Error fetching metadata for ${url}:`, error);
    return { url, error: (error as Error).message };
  }
}

async function processYaml() {
  try {
    const inputPath = path.join(__dirname, "../curation.yml");
    console.log(`Reading YAML file: ${inputPath}`);

    const fileContents = readFileSync(inputPath, "utf8");
    const data = yaml.parse(fileContents) as CurationYml;

    const results = [];
    const tenthData = data["10th"]; // 10기 데이터만 가져오기

    // 10기 데이터가 없는 경우 처리
    if (!tenthData) {
      console.log("No data found for 10th generation");
      return;
    }

    // 모든 회차(1st~10th)를 순회
    for (const [round, categories] of Object.entries(tenthData)) {
      // categories가 없는 경우 스킵
      if (!categories) {
        console.log(`No categories found for round ${round}`);
        continue;
      }

      // 각 회차의 모든 카테고리를 순회
      for (const [category, items] of Object.entries(categories)) {
        // items가 없거나 빈 배열인 경우 스킵
        if (!items || !Array.isArray(items) || items.length === 0) {
          console.log(`No items found for category ${category} in round ${round}`);
          continue;
        }

        for (const item of items) {
          // item이나 필수 필드가 없는 경우 스킵
          if (!item || !item.주소 || !item.작가 || !item.제목 || !item.설명) {
            console.log(`Invalid item found in category ${category}, round ${round}`);
            continue;
          }

          try {
            const url = item.주소;
            console.log(`Fetching metadata for: ${url}`);
            const metadata = await getMetadata(url);
            
            results.push({
              round,
              category,
              author: item.작가,
              originalTitle: item.제목,
              originalDescription: item.설명,
              ...metadata,
            });
          } catch (error) {
            console.error(`Error processing item in category ${category}, round ${round}:`, error);
            // biome-ignore lint/correctness/noUnnecessaryContinue: <explanation>
            continue;
          }
        }
      }
    }

    // 결과가 없는 경우 처리
    if (results.length === 0) {
      console.log("No results were generated");
      return;
    }

    // 결과를 JSON 파일로 저장
    const metadataFolder = path.join(__dirname, "../__metadata__");
    if (!fs.existsSync(metadataFolder)) {
      fs.mkdirSync(metadataFolder, { recursive: true });
    }

    const outputFileName = "curation-10.json";
    const outputPath = path.join(metadataFolder, outputFileName);
    writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`Results have been saved to ${outputPath}`);
  } catch (error) {
    console.error("Error processing YAML:", error);
  }
}

// 스크립트 실행
processYaml();
