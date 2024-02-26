import Image from "next/image";
import { cera } from "@/ui/font";
import Link from "next/link";

const InsightKami = () => {
  return (
    <section
      id="insightKami"
      className={`${cera.className} relative max-h-fit min-h-screen overflow-hidden bg-[#E1E1E1] `}
    >
      <div className="absolute bottom-0 right-2 z-10">
        <Image
          src="/images/hero/insightkami.svg"
          alt="logo"
          width={150}
          height={30}
          className="w-60 lg:w-[500px]"
        />
      </div>
      <div className="flex h-fit flex-col items-center gap-10 px-20 py-32 md:flex-row md:items-start lg:py-48">
        <div className="h-[250px] w-[250px] bg-[#3C5896] px-5 pt-5 text-4xl font-bold text-white">
          Insight Kami
        </div>
        <div className="flex w-full flex-col text-xl font-medium text-[#3C5896] md:w-1/4">
          <>
            <p>
              Baca lebih lanjut <i className="font-normal">insight</i> kami
              seputar dunia reksa dana terkini
            </p>
          </>
          <Link
            href="/"
            className="mt-7 w-fit transform bg-[#FF9940] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in hover:-translate-y-1 hover:bg-white hover:text-[#FF9940] active:translate-y-0"
          >
            Pelajari Selengkapnya
          </Link>
        </div>
      </div>
      {/* <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div> */}
    </section>
  );
};

export default InsightKami;
