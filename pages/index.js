import Head from "next/head";

import Header from "../components/Header/Header";
import Home from "../components/Home/Home";


export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Home />

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </div>
  );
}
