import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <link
        href="https://fonts.loli.net/css2?family=Nunito:wght@200;400&display=swap"
        rel="stylesheet"
      ></link>

      <body className="bg-white inkstone">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
