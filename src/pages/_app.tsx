import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  <ChakraProvider theme={theme}>
  return <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp