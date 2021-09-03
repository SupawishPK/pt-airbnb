import React from "react";
import Image from "next/image";
import { ExploreData as IExploreData } from "../../../interfaces/model/Home";

const SmallCard: React.FunctionComponent<IExploreData> = ({
  img,
  location,
  distance,
}) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      {/* left */}
      <div className="relative w-16 h-16">
        <Image className="rounded-lg" src={img} layout="fill" alt={img} />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
