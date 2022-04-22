import { AppProps } from 'next/app';

import '@/styles/global.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { AppProvider } from '@/templates/AppProvider';
import { GlobalContainer } from '@/templates/GlobalContainer';

// Client-side cache, shared for the whole session of the user in the browser.

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return (
    <>
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
