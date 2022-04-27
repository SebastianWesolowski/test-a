---
to: "<%= children && category !== 'pages' ? `${absPath}/${component_name}.tsx` : null %>"
---
import { FC, PropsWithChildren } from "react";
<% if(style){ -%>

  import styles from "./<%= component_name %>.module.scss";
<% } -%>

import { I<%= component_name %>Props } from "./types";

export const <%= component_name %>: FC<PropsWithChildren<I<%= component_name %>Props>> = ({ dummy, children }): JSX.Element => (
  <div<%= style ? ` className={styles.container} ` : '' %>>
    <h1>{dummy}</h1>
    <div>{children}</div>
  </div>
);
