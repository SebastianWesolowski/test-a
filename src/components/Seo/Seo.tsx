import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { openGraph } from '@/lib/helper';

import config from '@/config/config';

import { favicons } from './favicons';

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  siteName: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://tsnext-tw.thcl.dev',
  type: 'website',
  robots: 'follow, index',
  /** No need to be filled, will be populated with openGraph function */
  image: '',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  config.SEO.title = props.templateTitle ? `${props.templateTitle} | ${config.SEO.siteName}` : config.SEO.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.image = openGraph({
    description: config.SEO.description,
    siteName: props.templateTitle ? config.SEO.siteName : config.SEO.title,
    templateTitle: props.templateTitle,
  });

  config.SEO.openGraph.url = `${config.url.production}${router.asPath}`;
  config.SEO.canonical = `${config.url.production}${router.asPath}`;

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover' />

        <meta name='keywords' content={config.SEO.keywords} />

        {/* <meta property='og:url' content={`${config.url.production}${router.asPath}`} /> */}

        {/* Open Graph */}
        {/* <meta property='og:type' content={config.SEO.openGraph.type} />
      <meta property='og:site_name' content={config.SEO.openGraph.siteName} />
      <meta property='og:description' content={config.SEO.openGraph.description} />
      <meta property='og:title' content={config.SEO.openGraph.title} />
      <meta name='image' property='og:image' content={config.SEO.openGraph.images[0]} /> */}
        {/* Twitter */}
        {/* <meta name='twitter:card' content={config.SEO.twitterCard.card} />
      <meta name='twitter:site' content={config.SEO.twitterCard.site} />
      <meta name='twitter:title' content={config.SEO.twitterCard.title} />
      <meta name='twitter:description' content={config.SEO.twitterCard.description} />
      <meta name='twitter:image' content={config.SEO.twitterCard.image} /> */}
        {meta.date && (
          <>
            <meta property='article:published_time' content={meta.date} />
            <meta name='publish_date' property='og:publish_date' content={meta.date} />
            <meta name='author' property='article:author' content='Theodorus Clarence' />
          </>
        )}

        {/* Favicons */}
        {favicons.map((linkProps) => {
          if (linkProps.tag === 'link') {
            return (
              <link
                key={linkProps.href}
                rel={linkProps.rel}
                sizes={linkProps.sizes}
                href={linkProps.href}
                type={linkProps.type}
                color={linkProps.color}
              />
            );
          }
          return <meta key={linkProps.href} name={linkProps.name} content={linkProps.content} />;
        })}
      </Head>
      <NextSeo {...config.SEO} additionalLinkTags={config.SEO.additionalLinkTags} />
    </>
  );
}

// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { NextSeo } from 'next-seo';

// type IMetaProps = {
//   title: string;
//   description: string;
//   canonical?: string;
// };

// const Meta = (props: IMetaProps) => {
//   const router = useRouter();

//   return (
//     <>
//       <Head>
//         <meta charSet='UTF-8' key='charset' />
//         <meta name='viewport' content='width=device-width,initial-scale=1' key='viewport' />
//         <link rel='apple-touch-icon' href={`${router.basePath}/apple-touch-icon.png`} key='apple' />
//         <link rel='icon' type='image/png' sizes='32x32' href={`${router.basePath}/favicon-32x32.png`} key='icon32' />
//         <link rel='icon' type='image/png' sizes='16x16' href={`${router.basePath}/favicon-16x16.png`} key='icon16' />
//         <link rel='icon' href={`${router.basePath}/favicon.ico`} key='favicon' />
//       </Head>
//       <NextSeo
//         title={props.title}
//         description={props.description}
//         canonical={props.canonical}
//         openGraph={{
//           title: props.title,
//           description: props.description,
//           url: props.canonical,
//           // locale: AppConfig.locale,
//           // site_name: AppConfig.site_name,
//         }}
//       />
//     </>
//   );
// };

// export { Meta };
