import loadable from '@loadable/component';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import '@/styles/global.css';

import config from '@/config/config';
import { AppProvider } from '@/templates/AppProvider';
import { GlobalContainer } from '@/templates/GlobalContainer';

const HotJar = loadable(() => import('@/utils/HotJar'));
const Header = loadable(() => import('@/components/Header'));
const Footer = loadable(() => import('@/components/Footer'));

// Client-side cache, shared for the whole session of the user in the browser.

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return (
    <>
      <HotJar />
      <Head>
        <title>{config.SEO.title}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <DefaultSeo {...config.SEO} />
      <AppProvider>
        <GlobalContainer>
          <Header />
          <AnyComponent {...pageProps} />
          <Footer />
        </GlobalContainer>
      </AppProvider>
    </>
  );
};

export default MyApp;
