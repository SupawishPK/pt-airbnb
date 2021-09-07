import Footer from "@/components/compose/Footer";
import Header from "@/components/compose/Header";
import { IHeader } from "@/components/compose/Header/Header";
import Head from "next/head";
import React from "react";

export interface IMainLayout extends IHeader {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IMainLayout> = ({
  children,
  placeholder,
}) => {
  return (
    <div>
      <Head>
        <title>Airbib</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={placeholder} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
