---
to: <%= absPath %>/<%= component_name %>.tsx
---
import { FC } from 'react';

import "./<%= component_name %>.scss";

import { I<%= component_name %>Props } from "./types";

export const <%= component_name %>: FC<I<%= component_name %>Props> = ({ dummy }): JSX.Element => {
  return (
    <div className='Banan__container'>
      <h1>{dummy}</h1>
    </div>
  );
};
