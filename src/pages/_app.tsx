import ReactQueryProviders from '@/libs/reactQueryProvider';
import '@/styles/globals.css';
import '@/styles/variables.css';
import { NextPage } from 'next';
import '@/constants/common';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReactQueryProviders>
      {getLayout(<Component {...pageProps} />)}
    </ReactQueryProviders>
  );
}

export default App;
