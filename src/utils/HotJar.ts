import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

import config from '@/config/config';

const HotJar = (): null | JSX.Element => {
  useEffect(() => {
    hotjar.initialize(config.hotJar.hjid, config.hotJar.hjsv);
  }, []);

  return null;
};
// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
export default HotJar;
