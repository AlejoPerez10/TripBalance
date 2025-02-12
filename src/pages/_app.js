import "@/styles/globals.css";
import Header from '@/components/header';
import HeaderExit from '@/components/headerExit';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isAuthPage = router.pathname === '/' || router.pathname === '/signUp';

  return (
    <>
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
        <Link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Metaetiqueta para viewport (para dispositivos móviles) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>TripBalance</title>
      </Head>
      
      {isAuthPage ? <Header /> : <HeaderExit />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
