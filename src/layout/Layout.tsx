import { FC, PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
