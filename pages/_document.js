import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>English Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Head /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
