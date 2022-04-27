import { AppProps } from "next/app";

import { AppProvider, GlobalContainer } from "@/layout";
import { Analytics } from "@/utils";

import "@/styles/global.css";
import "@/styles/prism-a11y-dark.css";

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
