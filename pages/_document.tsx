import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="icon" href="/fetch-logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
        </Head>
        <body style={{ width: "100%", margin: 0 }}>
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}
