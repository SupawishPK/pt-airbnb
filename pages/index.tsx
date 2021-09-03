import Head from "next/head";
import React from "react";
import Banner from "../components/compose/Banner";
import Navbar from "../components/compose/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbib</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Banner */}
      <Banner />
    </div>
  );
}
