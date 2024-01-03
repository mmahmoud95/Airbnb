import Image from "next/image";
import React from "react";

function MeduimCard({ img, title }) {
  return (
    <div className="cursor-pointer transition duration-150 ease-in hover:scale-110">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" alt={title} />
      </div>
      <h2 className="mt-3 text-2xl">{title}</h2>
    </div>
  );
}

export default MeduimCard;
