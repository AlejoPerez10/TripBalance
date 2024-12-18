import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta para SEO */}
        <meta name="description" content="Gestión para gastos de viajes entre amigos, nunca hay problemas de pagos =)." />
        <meta name="keywords" content="gestión, viajes, gastos, amigos, pagos, grupo" />
        <meta name="robots" content="index, follow" />
        
        {/* Meta para redes sociales (Open Graph) */}
        <meta property="og:title" content="TripBalance" />
        <meta property="og:description" content="Gestiona los gastos de tus viajes con tus amigos. Nunca más discutir por los pagos." />
        {/*<meta property="og:image" content="/images/og-image.jpg" /> {/* Puedes cambiar la URL a una imagen representativa}
        <meta property="og:url" content="https://www.tusitio.com" />*/}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Fuentes externas (si usas Google Fonts u otras) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />

        {/* Metaetiqueta para viewport (para dispositivos móviles) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>TripBalance</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
