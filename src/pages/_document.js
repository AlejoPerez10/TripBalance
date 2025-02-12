import { Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link';

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* Fuentes externas (si usas Google Fonts u otras) */}
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
