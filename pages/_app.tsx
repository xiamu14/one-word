import "../styles/globals.css";
import "../styles/prism_simple.css";
import "../styles/heti.css";
import "windi.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
