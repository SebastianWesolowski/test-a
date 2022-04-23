import config from '@/config/config';

import GoogleAnalytics from './components/GoogleAnalytics';
import HotJar from './components/HotJar';
import Umami from './components/Umami';

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return (
    <>
      {isProduction && config.analytics.umamiWebsiteId && <Umami />}
      {isProduction && config.analytics.googleAnalyticsId && <GoogleAnalytics />}
      {isProduction && config.analytics.hjid && <HotJar />}
    </>
  );
};

export default Analytics;
