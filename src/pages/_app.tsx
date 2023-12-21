import ReactQueryProviders from '@/libs/reactQueryProvider';
import '@/styles/globals.css';
import '@/styles/variables.css';
import '@/constants/common';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProviders>
      <Component {...pageProps} />
    </ReactQueryProviders>
  );
}
