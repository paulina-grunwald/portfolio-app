import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='description' content='My programming portfolio site' />
          <link rel='stylesheet'
            hrer='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
          <meta charset='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' />
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Open Sans', sans-serif;
          }
        `}</style>
      </html>

    )
  }
}
