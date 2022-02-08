import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700;800&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="bg-gray-800 before:block before:fixed before:w-full before:h-full before:bg-landing before:top-0 before:left-0 before:bg-repeat before:bg-cover">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
