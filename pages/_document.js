import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/IBMPlexSans-Bold.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/IBMPlexSans-Regular.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/IBMPlexSans-SemiBold.ttf'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
