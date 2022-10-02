import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TienThinh | Some random posts</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
