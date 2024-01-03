import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  BeakerIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white px-5 py-5 shadow-lg">
      <div className="relative flex h-10 items-center hover:cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-md">
        <input
          placeholder="Start Your Search"
          type="text"
          className="flex-grow rounded-full bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
        />
        <MagnifyingGlassIcon className="hidden h-8 cursor-pointer rounded-full bg-red-500 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden cursor-pointer md:inline">Becom A Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
