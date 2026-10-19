import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  chineseSidebar: [
    'intro-zh',
    {
      type: 'category',
      label: '开始使用',
      collapsed: false,
      items: [
        'guide-zh/requirements',
        'guide-zh/getting-started',
        'guide-zh/commands',
        'guide-zh/search',
      ],
    },
    {
      type: 'category',
      label: '配置菜单',
      collapsed: false,
      items: [
        'guide-zh/categories',
        'guide-zh/custom-buttons',
        'guide-zh/menu-sounds',
      ],
    },
    'guide-zh/updating',
    'guide-zh/changelog',
    'guide-zh/troubleshooting',
    'guide-zh/building',
  ],
  englishSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'guide/requirements',
        'guide/getting-started',
        'guide/commands',
        'guide/search',
      ],
    },
    {
      type: 'category',
      label: 'Customize the menu',
      collapsed: false,
      items: [
        'guide/categories',
        'guide/custom-buttons',
        'guide/menu-sounds',
      ],
    },
    'guide/updating',
    'guide/changelog',
    'guide/troubleshooting',
    'guide/building',
  ],
};

export default sidebars;
