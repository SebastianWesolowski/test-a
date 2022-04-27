import { FC, PropsWithChildren } from "react";

export const GlobalContainer: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <div className='flex min-h-screen flex-col'>{children}</div>
);
