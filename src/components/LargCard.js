import Image from "next/image";
import React from "react";

function LargCard({ img, title, description, buttonText }) {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute left-16 top-36">
        <h3 className="mb-4 w-64 text-3xl">{title}</h3>
        <p className="font-semibold">{description}</p>
        <button className="mt-4 rounded-xl bg-gray-800 px-4 py-2 text-lg text-white">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargCard;
