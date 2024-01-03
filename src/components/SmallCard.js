import Image from "next/image";
import React from "react";

function SmallCard({ location, distance, img }) {
  const hasValidImage = img !== "https://links.papareact.com/40m" && img;
  return (
    <div className="mx-2 my-4  flex cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-100">
      <div className="relative h-16 w-16">
        <Image
          src={hasValidImage ? img : "https://links.papareact.com/kji"}
          layout="fill"
          className="rounded-lg"
          alt={location}
        />
      </div>
      <div>
        <h2 className="font-semibold text-gray-700">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
