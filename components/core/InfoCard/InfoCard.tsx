import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

export interface InfoCard {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

const InfoCard: React.FunctionComponent<InfoCard> = (props) => {
  return (
    <div className="flex px-2 pr-4 transition duration-200 ease-out border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image
        className="rounded-2xl"
          src={props.img}
          layout="fill"
          objectFit="cover"
          alt={props.title}
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{props.location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>

        <h4 className="text-xl">{props.title}</h4>
        <div className="w-10 pt-2 border-b" />
        <p className="flex-grow pt-2 text-sm text-gray-500">
          {props.description}
        </p>

        <div className="flex items-center justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {props.star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold">{props.price}</p>
            <p className="text-right font-extralight">{props.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
