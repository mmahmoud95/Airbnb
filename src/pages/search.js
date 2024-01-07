import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CardInfo from "@/components/CardInfo";

import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import ReSct from "react";
import sdffdsf from "./api/hello";
import MapCom from "@/components/Map";
function Search({ searchResults }) {
  console.log(searchResults);
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndtDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formattedStartDate} - ${formattedEndtDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow px-6 pt-12">
          <p className="text-sm">
            300+ Stays - {range} - {numberOfGuests} for guests
          </p>
          <h1 className="mb-6 mt-2 text-3xl font-semibold">
            Stays in <span className="capitalize">{location}</span>
          </h1>
          <div className="mb-4 hidden space-x-3 whitespace-nowrap md:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {searchResults.map((item) => (
            <CardInfo
              key={item.img}
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[550px]">
          <MapCom searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json(),
  );
  return {
    props: {
      searchResults,
    },
  };
}
