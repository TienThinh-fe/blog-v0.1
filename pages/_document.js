import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = (props) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
};

export default MyDocument;
