# 기여 가이드

## 시작하기

1. 이 저장소를 포크합니다.
2. 로컬에 클론합니다: `git clone https://github.com/YOUR-USERNAME/geultto.github.io.git`
3. 의존성을 설치합니다: `yarn install` (yarn이 없다면 [설치](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)하셔야 합니다.)
4. 개발 서버를 실행합니다: `yarn dev`
5. 브라우저에서 `http://localhost:3000`으로 접속하여 변경사항을 확인할 수 있습니다.

## 폴더 구조

웹사이트에 실제로 게시되는 컨텐츠 문서는 크게 세 개의 폴더가 있습니다.

- `content/docs` (가이드 문서)
- `content/blog` (블로그)
- `content/curation` (큐레이션)

위 세 개의 폴더 중 하나에 컨텐츠를 작성하면 됩니다.
폴더 구조나 파일명 규칙이 불확실하다면, 해당 폴더의 루트에 `mdx` 파일을 생성하고 PR을 제출해주세요. 리뷰 과정에서 필요한 경우 조정할 수 있습니다.

## 컨텐츠 작성 (blog, docs)

작성하고자 하는 컨텐츠 폴더 하위에 `mdx` 파일을 생성합니다.

### Frontmatter 작성

컨텐츠 제일 상단에는 다음과 같은 frontmatter를 작성하고 그 아래에 본문을 작성합니다.

- `title`: 글의 제목입니다.
- `description`: 글의 설명입니다.
- `tags`: 글의 태그입니다. 추후에 필터링 기능을 추가할 때 사용됩니다. 배열 형태로 작성합니다.
- `authors`: 글의 작성자입니다. 작성자 이름은 `authors.yml` 파일에 등록되어 있어야 합니다.
- `createdAt`: 글의 작성일입니다. YYYY-MM-DD 형식으로 작성합니다.
- `updatedAt`: 글의 수정일입니다. (선택사항)

아래는 예시입니다.

```mdx
---
title: 글 제목 ex: 오픈소스 기여 시리즈 1, MDN 오거나이저 상철님을 만나다 🚀
description: 글 설명 ex: MDN 한국어 번역 작업에 기여하고 계신 MDN 오거나이저 상철님을 만나 이야기를 나눠보았습니다 🥳
tags: [openSource, MDN, interview, 10th]
authors: [금정민]
createdAt: 2024-12-23
updatedAt: 2024-12-23
---
```

### 본문 작성

Frontmatter 아래에 [markdown 문법](https://gist.github.com/ihoneymon/652be052a0727ad59601)으로 본문을 작성합니다.
다음과 같은 요소들을 활용할 수 있습니다.

- 제목 (`#`, `##`, `###` 등)
- 목록 (`-`, `1.`, `2.` 등)
- 링크 (`[텍스트](URL)`)
- 이미지 (`![대체텍스트](이미지URL)`)
- 코드 블록 (``` 사용)
- 인용문 (`>` 사용)

## 컨텐츠 작성 (curation)

큐레이션은 기수별로 관리됩니다. 예를 들어, 10기 큐레이션은 `content/curation/10th` 폴더에 작성합니다.

### 큐레이션 파일 작성

```mdx
---
title: 큐레이션 10기 6회차
description: 10기 6회차에 글또에서 선정된 글을 소개합니다.
tags: [curation, 10th]
authors: [송경근]
createdAt: 2025-01-25
---

<Curation 회차={6} />
```

위 포맷에서 회차 번호만 변경해서 큐레이션 폴더에 작성해주시면 됩니다.

### curation.yml 파일 업데이트

그리고 [curation.yml](./curation.yml) 파일에 큐레이션된 글들을 추가해주셔야 합니다.
양식은 아래와 같고 줄 띄움을 잘 적용해서 올려주셔야 합니다.

```yaml
10th:
  # 큐레이션 회차
  1st:
    PMPO:
      - 제목:
        작가:
        주소:
        설명:
    # - ...

    Frontend:
      - 제목:
        작가:
        주소:
        설명:
    # - ...

    Backend:
      - 제목:
        주소:
        작가:
        설명:
    # - ...
    Data:
      - 제목:
        주소:
        작가:
        설명:
    # - ...

    Fullstack:
      - 제목:
        주소:
        작가:
        설명:
    # - ...
```

## meta.json 작성

사이드바에 컨텐츠를 추가하려면 `mdx` 파일이 있는 폴더에 `meta.json` 파일을 작성해야 합니다.
해당 파일에 대한 자세한 포맷은 아래 문서 링크를 참고해주시고, 다른 파일을 참고하셔도 됩니다.

- [fumadocs meta.json 가이드 문서](https://fumadocs.vercel.app/docs/ui/page-conventions#meta)

## authors.yml 작성

글의 작성자를 등록하려면 [authors.yml](./authors.yml) 파일에 작성자 정보를 등록해야 합니다.

```yaml
정현수:
  name: 정현수
  title: Frontend Engineer @ Daangn
  url: https://github.com/junghyeonsu
  image_url: https://github.com/junghyeonsu.png
  page: true
  socials:
    linkedin: hyeonsu-jung-5483911a5
    github: junghyeonsu
    blog: https://junghyeonsu.com/
```

위의 포맷을 참고하셔서 작성자를 추가하는 PR을 생성해주시거나, 어려움이 있으시면 슬랙에서 @정현수를 언급해주세요.
위와 같이 작성하면 글의 `frontmatter`의 `authors` 필드에 이름만 추가하면 자동으로 작성자 프로필이 추가됩니다.

## Pull Request 제출

`main` 브랜치에 직접 커밋할 수 없도록 설정되어 있으므로, 다음 단계를 따라 PR을 제출해주세요:

1. 새 브랜치를 생성합니다: `git checkout -b feature/your-feature-name`
2. 변경사항을 커밋합니다: `git commit -am "Add new content: 제목"`
3. 브랜치를 푸시합니다: `git push origin feature/your-feature-name`
4. GitHub에서 Pull Request를 생성합니다.
5. PR 설명에 변경사항에 대한 간략한 설명을 추가합니다.

PR이 검토되고 승인되면 `main` 브랜치에 병합됩니다.

## 도움이 필요하신가요?

기여 과정에서 어려움이 있거나 질문이 있으시면 GitHub 이슈를 생성하거나 슬랙 컨텐츠 크루 채널 혹은 글또운영질문 채널에서 문의해주세요.
