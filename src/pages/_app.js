import "@/styles/globals.css";
import Header from '@/components/header';
import HeaderExit from '@/components/headerExit';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isAuthPage = router.pathname === '/' || router.pathname === '/signUp';

  return (
    <>
      {isAuthPage ? <Header /> : <HeaderExit />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
