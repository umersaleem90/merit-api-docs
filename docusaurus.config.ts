import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'Merit LMS API Documentation',
  tagline: 'Complete API reference for Merit LMS Alpha',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'merit', // Usually your GitHub org/user name.
  projectName: 'merit-api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/merit/merit-api-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
          editUrl: 'https://github.com/merit/merit-api-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api-lms-valpha', // plugin id for alpha version
        docsPluginId: 'classic', // configured for preset-classic
        config: {
          lmsVAlpha: {
            specPath: 'static/swagger/lms_vAlpha.yaml',
            outputDir: 'docs/lms-valpha',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api-lms-v1-0', // plugin id for v1.0 version
        docsPluginId: 'classic', // configured for preset-classic
        config: {
          lmsV1_0: {
            specPath: 'static/swagger/lms_v1_0.yaml',
            outputDir: 'docs/lms-v1-0',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Merit LMS API',
      logo: {
        alt: 'Merit LMS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lmsValphaSidebar',
          position: 'left',
          label: 'API Reference (Alpha)',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lmsV1_0Sidebar',
          position: 'left',
          label: 'API Reference (v1.0)',
        },
        {
          href: 'https://github.com/merit/merit-api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/merit-lms',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/merit-lms',
            },
            {
              label: 'X',
              href: 'https://x.com/merit-lms',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/merit/merit-api-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Merit LMS, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};

export default config;
