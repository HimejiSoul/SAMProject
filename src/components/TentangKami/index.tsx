import Image from "next/image";
import { cera } from "@/ui/font";
import Link from "next/link";

const TentangKami = () => {
  return (
    <section
      id="aboutus"
      className={`${cera.className} relative max-h-fit  min-h-screen`}
    >
      <div className="absolute top-0 z-[-1] lg:bottom-0">
        <Image
          src="/images/hero/aboutus.svg"
          alt="logo"
          width={150}
          height={30}
          className="w-screen"
        />
      </div>
      <div className="flex h-fit flex-col items-center gap-10 px-20 py-32 md:flex-row md:items-start lg:py-48">
        <div className="h-[250px] w-[250px] bg-[#3C5896] pl-5 pt-5 text-4xl font-bold text-white">
          Tentang Kami
        </div>
        <div
          className={` flex w-full flex-col text-xl font-medium text-[#3C5896] md:w-4/6`}
        >
          <>
            <p>
              Sebagai perusahaan manajer investasi ternama yang berdiri sejak
              tahun 1997, PT Sucor Asset Management ingin menjadi perusahaan
              manajer aset yang paling berharga dan dapat dipercaya di masa kini
              hingga generasi di masa depan.
            </p>
            <br />
            <p>
              Kami berkomitmen untuk membantu Anda dalam menavigasi, melindungi,
              dan mengakumulasi aset Anda sesuai dengan nilai-nilai kami.
            </p>
          </>
          <Link
            href="/"
            className="mt-10 w-fit transform bg-[#FF9940] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in hover:-translate-y-1 hover:bg-white hover:text-[#FF9940] active:translate-y-0"
          >
            Pelajari Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
