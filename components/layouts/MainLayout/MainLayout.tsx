import Footer from "@/components/compose/Footer";
import Header from "@/components/compose/Header";
import Head from "next/head";
import React from "react";

const MainLayout: React.FunctionComponent<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Head>
        <title>Airbib</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
