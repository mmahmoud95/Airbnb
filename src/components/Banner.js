import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="lg-[500px] relative h-[300px] sm:h-[400px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="header image background forest"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="my-4 rounded-full bg-white px-8 py-4 font-bold text-purple-500 shadow-md transition duration-150 ease-in-out hover:shadow-xl active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
