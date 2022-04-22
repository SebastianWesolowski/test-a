import Basic from './configBasic';

const cardImage = {
  openGraph: {
    first: 'https://hr.wesolowski.dev/assets/image/openGraph.png',
    second: 'https://hr.wesolowski.dev/assets/image/openGraph.png',
  },
};

const SEO = {
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/assets/favicon/favicon.ico',
    },
  ],
  title: Basic.title,
  siteName: Basic.title,
  description: Basic.description,
  canonical: Basic.url.production,
  locale: Basic.locale,
  keywords:
    'Learn React, React Workshops, Testing JavaScript Training, React Training, Learn JavaScript, Learn TypeScript',
  twitter: {
    handle: '@handle',
    site: '@wesolowski',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: Basic.locale,
    url: Basic.url.production,
    title: Basic.title,
    description: Basic.description,
    site_name: Basic.title,
    images: [
      {
        url: cardImage.openGraph.first,
        alt: Basic.title,
        width: 2240,
        height: 1260,
      },
      {
        url: cardImage.openGraph.second,
        alt: 'Wesolowski.dev',
        width: 300,
        height: 300,
      },
    ],
  },
};

export default SEO;
