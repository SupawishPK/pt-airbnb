// import Navbar from "@/components/compose/Header";
import MainLayout from "@/components/layouts/MainLayout";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { format } from "date-fns";

import { GetServerSideProps } from "next";

import SearchProvider from "@/services/search_provider";
import { SearchResponse } from "interfaces/api/search";
import InfoCard from "@/components/core/InfoCard";

interface ISearch {
  searchResults: Array<SearchResponse>;
}

const SearchPage: React.FunctionComponent<ISearch> = ({ searchResults }) => {
  const router = useRouter();
  // console.log("Search Result", searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(
    new Date(startDate.toString()),
    "dd MMMM yyyy"
  );
  const formattedEndDateDate = format(
    new Date(endDate.toString()),
    "dd MMMM yyyy"
  );
  const range = `${formattedStartDate} - ${formattedEndDateDate}`;

  return (
    <MainLayout
      placeholder={`${location.toString()} | ${range} | ${noOfGuests} guests`}
    >
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - {noOfGuests} guests
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays on {location}
          </h1>

          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item, index) => (
              <InfoCard {...item} key={index} />
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const searchResult = await fetch("https://links.papareact.com/isz").then(res => res.json());
  try {
    const searchResponse = await SearchProvider.searchResult("");

    if (searchResponse.data) {
      return {
        props: {
          searchResults: searchResponse.data,
        },
      };
    }
  } catch (error) {
    console.log(error);

    return {
      props: {
        searchResults: [],
      },
    };
  }
};
