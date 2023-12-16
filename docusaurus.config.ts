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

  onBrokenLinks: "throw",
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
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/geultto/geultto.github.io/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/geultto/geultto.github.io/tree/main/blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/geultto-social-card.png",
    navbar: {
      title: "글또",
      logo: {
        alt: "글또 Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "튜토리얼",
        },
        { to: "/blog", label: "블로그", position: "left" },
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
