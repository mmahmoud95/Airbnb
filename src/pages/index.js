import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MeduimCard from "@/components/MeduimCard";
import LargCard from "@/components/LargCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, cardsData }) {
  return (
    <>
      <Head>
        <title>MZ Airbnb</title>
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-4 text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((item, index) => (
              <SmallCard
                key={index}
                location={item.location}
                distance={item.distance}
                img={item.img}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="pb-4 text-4xl font-semibold">Live Anywhere</h2>
          <div className="scrollbar-hide flex space-x-4 overflow-scroll p-6">
            {cardsData?.map((item, index) => (
              <MeduimCard key={item.title} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargCard
          img={"https://links.papareact.com/4cj"}
          title="The Geatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const data = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) =>
      res.json(),
    );

    const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
      (res) => res.json(),
    );
    return {
      props: { data, cardsData },
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      props: { data: null }, // or handle the error accordingly
    };
  }
}
