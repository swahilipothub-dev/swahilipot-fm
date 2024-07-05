import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* CSS Implementing Plugins */}
          <link
            rel='stylesheet'
            href='/assets/vendor/bootstrap-icons/font/bootstrap-icons.css'
          />
          <link
            rel='stylesheet'
            href='/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css'
          />
          {/* CSS Space Template */}
          <link
            rel='stylesheet'
            href='/assets/css/theme.css'
          />

          {/* Font */}
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
          />

          {/* Favicons */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicon/site.webmanifest' />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* JS Global Compulsory */}
          <script
            async
            src='/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
          ></script>

          {/* JS Implementing Plugins */}
          <script
            async
            src='/assets/vendor/countdown/countdown.js'
          ></script>

          {/* JS Space */}
          <script
            async
            src='/assets/js/theme.min.js'
          ></script>
          <script async src='/assets/js/counter.js'></script>
        </body>
      </Html>
    );
  }
}
