import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { inter } from '@/app/fonts';

import "@/styles/globals.css";

export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx }
}