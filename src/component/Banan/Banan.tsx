import { FC } from 'react';

import './Banan.scss';

import { IBananProps } from './types';

export const Banan: FC<IBananProps> = ({ dummy }): JSX.Element => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className='Banan__container'>
      <h1>{dummy}</h1>
    </div>
  );
};
