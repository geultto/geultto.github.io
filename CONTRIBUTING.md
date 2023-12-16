## 설치하기

```shell
$ yarn install
```

만약 `yarn`이 설치되어 있지 않다면 [yarn 설치하기](https://classic.yarnpkg.com/en/docs/install)를 참고하세요.

## 시작하기

```shell
$ yarn start # http://localhost:3000
```

## docs, blog 작성하기

기본적으로 docs는 `docs` 폴더에, blog는 `blog` 폴더에 마크다운 형식의 파일을 작성하면 됩니다.
자동으로 `md` 파일을 인식해서 UI로 그려줍니다.

- [docs에 대해서](https://docusaurus.io/docs/docs-introduction)
- [docs frontmatter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)
- [blog에 대해서](https://docusaurus.io/docs/blog)
- [blog frontmatter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter)

## authors.yml에 작성자 추가하기

[authors.yml](./blog/authors.yml) 파일에 작성자를 추가하면 됩니다.

```yml
정현수: # frontmatter에 작성될 author 이름
  name: 정현수 # 페이지에 보일 이름
  title: Frontend Engineer @ Daangn # 페이지에 보일 직함
  url: https://github.com/junghyeonsu # 페이지에 보일 링크
  image_url: https://github.com/junghyeonsu.png # 페이지에 보일 이미지
```
