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
      className="sticky top-0 z-50 grid grid-cols-3 px-5 py-5 bg-white shadow-md md:px-10"
    >
      {/* left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
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
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
        {/* <UserIcon className="h-6" /> */}
      </div>
    </header>
  );
};

export default Navbar;