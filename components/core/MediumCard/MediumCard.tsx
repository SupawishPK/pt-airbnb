import React from "react";
import Image from "next/image";
import { CardData } from "interfaces/model/Home";

const MediumCard: React.FunctionComponent<CardData> = ({ title, img }) => {
  return (
    <div className="duration-300 ease-out transform cursor-pointer hover:scale-105 trasition">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={img} layout="fill" alt={title} />
      </div>
      <h3 className="mt-2 text-2xl">{title}</h3>
    </div>
  );
};

export default MediumCard;