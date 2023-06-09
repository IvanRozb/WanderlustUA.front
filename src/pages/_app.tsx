import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material";
import theme from "@/helpers/theme";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
