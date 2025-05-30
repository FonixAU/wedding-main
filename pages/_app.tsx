import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";  // Ensure global styles are imported

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
