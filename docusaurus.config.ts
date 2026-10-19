import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CraftEngineRecipe',
  tagline: 'Browse items. Find recipes.',
  favicon: 'img/CraftEngineRecipe-32x.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://che11111.github.io',
  baseUrl: '/CraftEngineRecipe-wiki/',
  trailingSlash: true,

  organizationName: 'che11111',
  projectName: 'CraftEngineRecipe-wiki',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: 'filename',
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/CraftEngineRecipe.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CraftEngineRecipe',
      logo: {
        alt: 'CraftEngineRecipe Logo',
        src: 'img/CraftEngineRecipe.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'englishSidebar',
          position: 'left',
          label: 'English Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'chineseSidebar',
          position: 'left',
          label: '中文指南',
        },
        {to: '/docs/guide/changelog', label: 'Changelog', position: 'right'},
        {href: 'https://github.com/che11111/CraftEngineRecipe', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'User Guide',
          items: [
            {label: 'Getting started', to: '/docs/guide/getting-started'},
            {label: 'Updating', to: '/docs/guide/updating'},
            {label: 'Changelog', to: '/docs/guide/changelog'},
          ],
        },
        {
          title: '中文指南',
          items: [
            {label: '快速开始', to: '/docs/guide-zh/getting-started'},
            {label: '更新插件', to: '/docs/guide-zh/updating'},
            {label: '常见问题', to: '/docs/guide-zh/troubleshooting'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Plugin source', href: 'https://github.com/che11111/CraftEngineRecipe'},
            {label: 'Wiki source', href: 'https://github.com/che11111/CraftEngineRecipe-wiki'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} CraftEngineRecipe · nsoer & che1s`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
