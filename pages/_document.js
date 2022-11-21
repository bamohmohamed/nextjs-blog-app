import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
