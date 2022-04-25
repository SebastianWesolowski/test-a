import { FC, PropsWithChildren } from "react";

import { Footer, Header } from "@/components";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
