const path = require('path');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Glossary Plugin Example',
  url: 'https://example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'example',
  projectName: 'glossary-example-site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ (
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
          },
          blog: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }
      ),
    ],
  ],

  plugins: [
    [
      // Use the local plugin from the repo root
      path.resolve(__dirname, '../../'),
      {
        glossaryPath: 'glossary/glossary.json',
        routePath: '/glossary',
        autoLinkTerms: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Glossary Example',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/glossary', label: 'Glossary', position: 'left' },
      ],
    },
  },
};


