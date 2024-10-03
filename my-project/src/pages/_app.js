import Theme from '../styles/theme';
import Head from 'next/head'
import '../styles/main.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portifólio Fujita</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
