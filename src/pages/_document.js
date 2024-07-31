/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* CSS Imports */}
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap-icons/font/bootstrap-icons.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/css/theme.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* JS Global Compulsory */}
          <script
            async
            src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
          ></script>

          {/* JS Implementing Plugins */}
          <script
            async
            src="/assets/vendor/countdown/countdown.js"
          ></script>

          {/* JS Space */}
          <script
            async
            src="/assets/js/theme.min.js"
          ></script>
          <script
            async
            src="/assets/js/counter.js"
          ></script>
        </body>
      </Html>
    );
  }
}
