import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function CardInfo({ img, location, title, description, star, price, total }) {
  return (
    <div
      className="flex cursor-pointer items-center border-b py-6 pr-4 
                  transition duration-100 ease-in-out first:border-t hover:opacity-90 hover:shadow-lg"
    >
      <div className="relative h-32 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-grow flex-col pl-8">
        <div className="flex justify-between">
          <h2>{location}</h2>
          <HeartIcon className="h-8 hover:text-red-400" />
        </div>
        <h4 className="mb-3 text-2xl">{title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-8 flex justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5 text-orange-400" /> {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
