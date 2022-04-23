import { AppProps } from 'next/app';

import '@/styles/global.css';
import '@/styles/prism-a11y-dark.css';

import { AppProvider } from '@/templates/AppProvider';
import { GlobalContainer } from '@/templates/GlobalContainer';
import Analytics from '@/utils/Analytics/Analytics';

// Client-side cache, shared for the whole session of the user in the browser.

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return (
    <>
      <AppProvider>
        <Analytics />
        <GlobalContainer>
          <AnyComponent {...pageProps} />
        </GlobalContainer>
      </AppProvider>
    </>
  );
};

export default MyApp;
