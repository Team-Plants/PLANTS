import CommonFormProvider from '@/components/formProvider/FormProvider'
import '@/styles/globals.css'
import '@/styles/variables.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <CommonFormProvider><Component {...pageProps} /></CommonFormProvider>
}
