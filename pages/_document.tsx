import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import * as snippet from "@segment/snippet";
import Router from "next/router";

const { SEGMENT_ANALYTICS_KEY = "", NODE_ENV = "development" } = process.env;

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  renderSnippet() {
    const opts = {
      apiKey: SEGMENT_ANALYTICS_KEY,
      page: true
    };

    if (NODE_ENV === "development") {
      return snippet.max(opts);
    }

    return snippet.min(opts);
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
    );
  }
}
