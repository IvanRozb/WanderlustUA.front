import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material";
import theme from "@/helpers/theme";
import Header from "@/modules/header";
import {CookiesProvider} from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <ThemeProvider theme={theme}>
          <CookiesProvider>
              <Header />
              <Component {...pageProps} />
          </CookiesProvider>
      </ThemeProvider>
    </>
}
