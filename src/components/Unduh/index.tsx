import Image from "next/image";
import { cera } from "@/ui/font";
import Link from "next/link";

const Unduh = () => {
  return (
    <section
      id="unduhFormulir"
      className={`${cera.className} relative max-h-fit min-h-screen overflow-hidden `}
    >
      <div className="flex h-fit flex-col items-center gap-52 bg-[#3C5896]/20 px-20 py-32 md:flex-row md:items-start lg:py-48">
        <div className="h-[250px] w-[250px] bg-[#3C5896] px-5 pt-5 text-4xl font-bold text-white">
          Undur Formulir
        </div>
        <div className="flex flex-row gap-32">
          <div className="flex w-72 flex-col justify-between gap-12 text-xl font-medium text-[#3C5896]">
            <Link href="/" className="flex w-72 items-center gap-6">
              <Image
                src="/images/hero/form.svg"
                alt="form"
                width={150}
                height={30}
                className="w-20"
              />
              <p className="text-sm font-bold">
                Formulir Pembukaan Rekening dan Pengkinian Data - Individu
              </p>
            </Link>
            <Link href="/" className="flex w-72 items-center gap-6">
              <Image
                src="/images/hero/form.svg"
                alt="form"
                width={150}
                height={30}
                className="w-20"
              />
              <p className="text-sm font-bold">Formulir Transaksi Reksa Dana</p>
            </Link>
            <Link
              href="/"
              className="w-fit transform bg-[#FF9940] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in hover:-translate-y-1 hover:bg-white hover:text-[#FF9940] active:translate-y-0"
            >
              Pedoman Transaksi Nasabah Individu
            </Link>
          </div>

          <div className="flex w-72 flex-col justify-between gap-12 text-xl font-medium text-[#3C5896]">
            <Link href="/" className="flex w-72 items-center gap-6">
              <Image
                src="/images/hero/form.svg"
                alt="form"
                width={150}
                height={30}
                className="w-20"
              />
              <p className="text-sm font-bold">
                Formulir Pembukaan Rekening dan Pengkinian Data - Institusi
              </p>
            </Link>
            <Link href="/" className="flex w-72 items-center gap-6">
              <Image
                src="/images/hero/form.svg"
                alt="form"
                width={150}
                height={30}
                className="w-20"
              />
              <p className="text-sm font-bold">Formulir Pembelian Berkala</p>
            </Link>
            <Link
              href="/"
              className="w-fit transform bg-[#FF9940] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in hover:-translate-y-1 hover:bg-white hover:text-[#FF9940] active:translate-y-0"
            >
              Pedoman Transaksi Nasabah Individu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unduh;
