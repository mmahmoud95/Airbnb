import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  BeakerIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const cancel = () => {
    setSearchInput("");
  };

  const [numberOfGuests, setNumberGuests] = useState(1);

  const search = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white px-5 py-5 shadow-lg">
      <div
        onClick={() => router.push("/")}
        className="relative flex h-10 items-center hover:cursor-pointer"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || "Start Your Search"}
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
      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            rangeColors={["#ef4444"]}
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number Of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              min={1}
              value={numberOfGuests}
              onChange={(e) => setNumberGuests(e.target.value)}
              type="number"
              className="ml-2 w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex justify-between px-16 font-semibold">
            <button className="text-gray-500" onClick={cancel}>
              Cancel
            </button>
            <button className=" text-red-600" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
