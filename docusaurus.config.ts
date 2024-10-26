import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "글또 Document",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://geultto.github.io",
  baseUrl: "/",

  // GitHub pages deployment config.
  projectName: "geultto.github.io",
  organizationName: "geultto",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  deploymentBranch: "gh-pages",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/geultto/geultto.github.io/tree/main/docs",
        },
        blog: {
          path: "blog",
          blogTitle: "글또 블로그",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/geultto/geultto.github.io/tree/main/blog",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} 글또`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((_, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-1QK15KQ7TH",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/geultto-social-card.png",
    navbar: {
      logo: {
        alt: "글또 Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "가이드",
        },
        {
          to: "/blog",
          label: "블로그",
          position: "left",
          items: [
            { to: "/blog", label: "전체" },
            { to: "/blog/authors", label: "글또 작가들" },
          ],
        },
        {
          to: "/curation",
          label: "큐레이션",
          position: "left",
          items: [{ to: "/curation/10th", label: "10기" }],
        },
        {
          to: "/faq",
          label: "FAQ",
          position: "left",
        },
        {
          href: "https://github.com/geultto/geultto.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "튜토리얼",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "글또 Organization",
      //         href: "https://github.com/geultto/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "블로그",
      //         to: "/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/geultto/geultto.github.io",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} 글또`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
