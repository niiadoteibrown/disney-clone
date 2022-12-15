import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../globalstyles'

const theme: DefaultTheme = {
  primary: '#040714',
  secondary: '#0070f3',
  white: "#ffffff",
  brightBlue: "#3e64e5",
  silver: "silver",
  darkGrey: "#31343e"
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
