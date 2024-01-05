import Error from '@/components/error/error';
import ErrorBoundary from '@/components/error/errorBoundary';
import '@/constants/common';
import ReactQueryProviders from '@/libs/reactQueryProvider';
import '@/styles/globals.css';
import '@/styles/variables.css';
import plantsGradient from '@/utils/gradient';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

plantsGradient();

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReactQueryProviders>
      <ErrorBoundary fallback={<Error />}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </ReactQueryProviders>
  );
}

export default App;
