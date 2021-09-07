import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

export interface IHeader {
  placeholder?: string;
}

const Header: React.FunctionComponent<IHeader> = ({ placeholder }) => {
  const [searchInput, setSearchInput] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [noOfGuests, setNoOfGuests] = React.useState(1);
  const router = useRouter();

  const handleSelect = (ranges: {
    selection: {
      startDate: React.SetStateAction<Date>;
      endDate: React.SetStateAction<Date>;
    };
  }) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
    if (router.pathname === "/search") {
      setTimeout(() => {
        setSearchInput("");
      }, 1500);
    }
  };
  // pk.eyJ1Ijoic3VwYXdpc2gzNCIsImEiOiJja3Q5dHc1b2oxZmx6MnVzMXdtaTRzeHdyIn0.nNuVCr0JkQxGFGQ9r0IjVQ

  const selectedRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 px-5 py-5 bg-white shadow-md md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="navbar"
        />
      </div>
      {/* middle  - search*/}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-300 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
        {/* <UserIcon className="h-6" /> */}
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectedRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg text-red-400 outline-none"
              type="number"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
