import type { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Header from '../components/header';

const theme: DefaultTheme = {
  primary: "#040714",
  secondary: "#0070f3",
  white: "#ffffff",
  brightBlue: "#3e64e5",
  silver: "silver",
  darkGrey: "#31343e"
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
