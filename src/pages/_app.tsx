import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import '@/styles/global.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import config from '@/config/config';
import { AppProvider } from '@/templates/AppProvider';
import { GlobalContainer } from '@/templates/GlobalContainer';
import HotJar from '@/utils/HotJar';

// Client-side cache, shared for the whole session of the user in the browser.

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
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
        <Component {...pageProps} />
        <Footer />
      </GlobalContainer>
    </AppProvider>
  </>
);

export default MyApp;
