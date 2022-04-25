---
to: <%= absPath %>/<%= component_name %>.tsx
---
<% if(children){ -%>
import { FC, PropsWithChildren } from "react";
<% }else{ -%>
import { FC } from "react";
<% } -%>

import styles from "./<%= component_name %>.module.scss";

import { I<%= component_name %>Props } from "./types";

export const <%= component_name %>: FC<PropsWithChildren<<I<%= component_name %>Props>>> = ({ dummy, children }): JSX.Element => (
  return (
    <div className={styles.container}>
      <h1>{dummy}</h1>
      <% if(children){ %>
      <div>{children}</div>
      <% } %>
    </div>
  );
};