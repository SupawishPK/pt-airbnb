import React from "react";
import { CardData, ExploreData } from "interfaces/model/Home";
import SmallCard from "@/components/core/SmallCard";
import Banner from "@/components/compose/Banner";
import MediumCard from "@/components/core/MediumCard";
import LargeCard from "@/components/core/LargeCard";
import MainLayout from "@/components/layouts/MainLayout";

interface IHome {
  exploreData: Array<ExploreData>;
  cardData: Array<CardData>;
}

const Home: React.FunctionComponent<IHome> = ({ exploreData, cardData }) => {
  return (
    <MainLayout>
      <Banner />
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <SmallCard {...item} key={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex p-3 -ml-3 space-x-3 overflow-auto ">
            {cardData?.map((item, index) => (
              <MediumCard {...item} key={index} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbyb."
          buttonText="Get Inspired"
        />
      </main>
    </MainLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://links.papareact.com/pyp");
  const exploreData = await res.json();

  const res2 = await fetch("https://links.papareact.com/zp1");
  const cardData = await res2.json();

  if (!exploreData) {
    return {
      notFound: true,
    };
  }

  if (!cardData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { exploreData, cardData },
  };
};
