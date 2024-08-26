import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/styles/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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