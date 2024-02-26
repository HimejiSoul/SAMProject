import Image from "next/image";
import { cera } from "@/ui/font";
import Link from "next/link";

const Pmmd = () => {
  return (
    <div className="relative overflow-hidden">
      <section
        id="produkKami"
        className={`${cera.className} max-h-fit  min-h-screen bg-[#3C5896]/15`}
      >
        <div className="flex h-fit flex-col items-center gap-10 px-20 py-32 md:flex-row md:items-start lg:py-48">
          <div className="h-[250px] w-[250px] bg-white px-5 pt-5 text-4xl font-bold text-[#3C5896]">
            Produk Kami
          </div>
          <div className="flex w-full flex-col text-xl font-medium text-[#3C5896] md:w-2/5">
            <>
              <p>
                Gali informasi mendalam tentang produk kami untuk memperkuat
                pengetahuan Anda dalam memilih instrumen yang sesuai dengan
                tujuan
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

      <section
        id="mitraDistributor"
        className={`${cera.className} max-h-fit min-h-screen bg-[#3C5896]/5`}
      >
        <div className="flex h-fit flex-col items-center gap-10 px-20 pt-48 md:flex-row md:items-start">
          <div className="h-[250px] w-[250px] bg-[#3C5896] px-5 pt-5 text-4xl font-bold text-white">
            Mitra Distributor
          </div>
          <div className="flex w-full flex-row flex-wrap md:w-1/2">
            <Image
              src="/images/logo/image-1.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-2.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-3.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-4.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-5.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-6.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-7.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-8.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-9.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-10.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-11.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-12.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-13.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-14.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-15.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-16.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-17.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-19.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-20.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-21.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-22.svg"
              alt="logo"
              width={150}
              height={30}
            />
            <Image
              src="/images/logo/image-23.svg"
              alt="logo"
              width={150}
              height={30}
            />
          </div>
        </div>
      </section>
      <div className=" absolute right-0 top-0 z-[-1]">
        <Image
          src="/images/hero/pmmd.svg"
          alt="logo"
          width={150}
          height={30}
          className="hidden w-72 lg:block lg:w-[200vw]"
        />
      </div>
    </div>
  );
};

export default Pmmd;
