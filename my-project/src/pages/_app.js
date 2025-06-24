import Theme from '../styles/theme';
import Head from 'next/head'
import '../styles/main.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eu Fujita</title>
        {/* Favicon */}
        <link rel="icon" href="/images/logotipp.png" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}