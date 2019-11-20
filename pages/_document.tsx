import Document, { Head, Main, NextScript } from 'next/document'
// @ts-ignore
import * as snippet from '@segment/snippet'

const { SEGMENT_ANALYTICS_KEY, NODE_ENV = 'development' } = process.env

console.log(process.env)


// @ts-ignore
export default class extends Document {
  // @ts-ignore
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  renderSnippet() {
    const opts = {
      apiKey: SEGMENT_ANALYTICS_KEY,
      page: true,
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render() {
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}