/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation Template',
  tagline: 'Document the docs!',
  url: 'https://engelbert-strauss.github.io',
  baseUrl: '/docs-template/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'engelbert-strauss', // Usually your GitHub org/user name.
  projectName: 'docs-template', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      de: {
        label: 'Deutsch'
      }
    }
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'Documentation Template',
      logo: {
        alt: 'Documentation Template',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/user-guide', label: 'Users', position: 'right' },
        { to: 'docs/big-picture', label: 'Developers', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
      style: 'primary',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {
              label: 'Users',
              to: 'docs/user-guide',
            },
            {
              label: 'Developers',
              to: 'docs/big-picture',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: '<SQUAD_MAIL>',
              href: 'mailto:<SQUAD_MAIL>',
            },
            {
              label: '#<SQUAD_CHANNEL>',
              href: 'slack://<SQUAD_CHANNEL_URL>',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} engelbert-strauss GmbH & Co. KG`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
