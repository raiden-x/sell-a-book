import Document, { Html, Head, Main, NextScript } from 'next/document';
import css from 'styled-jsx/css';
import { ServerStyleSheets } from '@material-ui/core/styles';


const globalStyles = css.global`
  a,
  a:focus {
    font-weight: 400;
    color: #1565c0;
    text-decoration: none;
    outline: none;
  }
  a:hover,
  button:hover {
    opacity: 0.75;
    cursor: pointer;
  }
  blockquote {
    padding: 0 1em;
    color: #555;
    border-left: 0.25em solid #dfe2e5;
  }
  pre {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #fff;
    color: #000;
    border: 1px solid #ddd;
  }
  code {
    font-size: 14px;

    background: #fff;
    padding: 3px 5px;
  }
`;

class customDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const styleSheets = new ServerStyleSheets();


    ctx.renderPage = () => originalRenderPage({
      // useful for wrapping the whole react tree
      enhanceApp: (App) => (props) => styleSheets.collect(<App {...props} />),
      // useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    console.log(initialProps);
    console.log(styleSheets);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styleSheets.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#1976D2" />
          <link
            rel="shortcut icon"
            href="https://storage.googleapis.com/builderbook/favicon32.png"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:300,400:latin"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/builderbook/nprogress.min.css"
          />
          <link rel="stylesheet" href="https://storage.googleapis.com/builderbook/vs.min.css" />
          <style jsx global>
            {globalStyles}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default customDocument;