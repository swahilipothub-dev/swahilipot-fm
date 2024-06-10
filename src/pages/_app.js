// pages/_app.js
import '@/styles/globals.css';
import Header from './header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}