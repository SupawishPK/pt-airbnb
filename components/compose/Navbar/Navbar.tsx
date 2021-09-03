import React from "react";
import Image from "next/image";
import Search from "../../core/Search";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 
        md:px-10"
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="navbar"
        />
      </div>
      {/* middle  - search*/}
      <Search />
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
        {/* <UserIcon className="h-6" /> */}
      </div>
    </header>
  );
};

export default Navbar;
