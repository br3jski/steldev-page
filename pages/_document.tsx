import Document, { Head, Html, Main, NextScript, type DocumentContext } from 'next/document';

class MyDocument extends Document<{ lang: 'pl' | 'en' }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = ctx.pathname === '/en' ? 'en' : 'pl';

    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
