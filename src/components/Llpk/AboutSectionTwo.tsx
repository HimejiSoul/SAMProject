import Image from "next/image";
import { cera } from "@/ui/font";
import Link from "next/link";

const Llpk = () => {
  return (
    <section
      id="produkKami"
      className={`${cera.className} flex max-h-full min-h-screen flex-col bg-[#3C5896]/15 lg:flex-row`}
    >
      <div className="flex h-fit flex-row items-center gap-5 px-20 py-32 md:items-start lg:flex-col lg:py-48 ">
        <div className="h-[250px] w-[250px] bg-[#3C5896] px-5 pt-5 text-3xl font-bold text-white">
          Laporan Layanan Perlindungan Konsumen
        </div>
        <div className="flex w-full flex-col text-sm font-medium text-[#3C5896] lg:w-[250px]">
          <>
            <p>
              Kepercayaan dan kepuasan investor PT Sucorinvest Asset Management
              adalah prioritas kami. Oleh karena itu, kami menyediakan Pusat
              Layanan Pengaduan Konsumen untuk memberikan tahapan penyelesaian
              pengaduan konsumen.
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
      <div className="flex w-full flex-col items-center gap-5 px-20 py-10 lg:p-40">
        <Image
          src="./images/hero/llpk.svg"
          alt=""
          width={250}
          height={30}
          className="w-full"
        />
        <p className="text-[10px] text-[#3C5896]">
          *Apabila konsumen menolak tanggapan pengaduan dari PT Sucorinvest
          Asset Management maka konsumen dapat: Menyampaikan pengaduan kepada
          Otoritas Jasa Keuangan melalui sistem Aplikasi Portal Perlindungan
          Konsumen OJK atau Mengajukan sengketa kepada LAPS Sektor Jasa Keuangan
          yang mendapat persetujuan dari Otoritas Jasa Keuangan atau kepada
          pengadilan. PT Sucorinvest Asset Management (“Sucorinvest”) tidak
          memungut biaya apapun dalam melaksanakan kebijakan dan layanan
          pengaduan nasabah.
        </p>
      </div>
    </section>
  );
};

export default Llpk;
