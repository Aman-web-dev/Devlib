import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="/path/to/script/here.js" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/trix@2.0.8/dist/trix.css"
        />
         <script
          type="text/javascript"
          src="https://unpkg.com/trix@2.0.8/dist/trix.umd.min.js"
        />
       
      </Head>
      <body>
        <Main />
        <NextScript />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.8/dist/trix.css"/>
  <script type="text/javascript" src="https://unpkg.com/trix@2.0.8/dist/trix.umd.min.js"></script>

      </body>
    </Html>
  );
}
