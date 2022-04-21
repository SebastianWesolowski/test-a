import Basic from './configBasic';

const SEO = {
  title: Basic.title,
  description: Basic.description,
  canonical: Basic.url.production,
  locale: Basic.locale,
  openGraph: {
    type: 'website',
    locale: Basic.locale,
    url: Basic.url.production,
    title: Basic.title,
    description: Basic.description,
    site_name: Basic.title,
    images: [
      {
        url: 'https://hr.wesolowski.dev/assets/image/openGraph.png',
        alt: Basic.title,
        width: 2240,
        height: 1260,
      },
      {
        url: 'https://hr.wesolowski.dev/assets/image/logo.png',
        alt: 'Wesolowski.dev',
        width: 300,
        height: 300,
      },
    ],
  },
};

export default SEO;
