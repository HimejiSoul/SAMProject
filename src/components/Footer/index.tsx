"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" relative z-10 bg-white pt-16">
        <div className="container text-[13px] text-[#3C5896]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-3 md:w-1/2 lg:w-4/12 xl:w-[20%]">
              <div className="mb-12 w-full lg:mb-16">
                <p className="mb-3 font-bold">
                  PT. Sucorinvest Asset Management
                </p>
                <p>
                  Berizin dan diawasi oleh Otoritas Jasa Keuangan, dengan nomor
                  izin KEP-01/PM/MI/1999 tertanggal 1 Juni 1999
                </p>
              </div>
              <Link href="/" className="mb-8 flex flex-row gap-5">
                <Image
                  src="/images/hero/GKL15.svg"
                  alt="logo"
                  className=""
                  width={110}
                  height={30}
                />
                <Image
                  src="/images/hero/logo-reksadana.svg"
                  alt="logo"
                  className=""
                  width={110}
                  height={30}
                />
              </Link>
            </div>

            <div className="mr-20 w-full px-3 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-[13%]">
              <div className="mb-12  lg:mb-16">
                <h2 className="mb-3 font-bold">Pengumuman</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="inline-block underline duration-300 hover:text-primary"
                    >
                      Surat Informasi SMIF Desember 2023
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" inline-block underline duration-300 hover:text-primary"
                    >
                      Surat Informasi SMIF November 2023
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block underline duration-300 hover:text-primary"
                    >
                      Surat Informasi SMIF Oktober 2023
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block underline duration-300 hover:text-primary"
                    >
                      Surat Informasi SMIF Septermber 2023
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-[12%]">
              <div className="mb-12  lg:mb-16">
                <h2 className="mb-3 font-bold">Sucor Story</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" inline-block duration-300 hover:text-primary"
                    >
                      Tata Kelola Perusahaan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Penghargaan Karir
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-[12%]">
              <div className="mb-12  lg:mb-16">
                <h2 className="mb-3 font-bold">Strategi</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Strategi Investasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" inline-block duration-300 hover:text-primary"
                    >
                      Tim Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block  duration-300 hover:text-primary"
                    >
                      Insight
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block  duration-300 hover:text-primary"
                    >
                      Produk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-[12%]">
              <div className="mb-12  lg:mb-16">
                <h2 className="mb-3 font-bold">Perjalanan</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Sucor Klik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" inline-block duration-300 hover:text-primary"
                    >
                      Kegiatan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-[12%]">
              <div className="mb-12  lg:mb-16">
                <h2 className="mb-3 font-bold">Konten</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" inline-block duration-300 hover:text-primary"
                    >
                      Pusat Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Pengumuman
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-[13%]">
              <div className="mb-12  lg:mb-16">
                <h2 className="mb-3 font-bold">Keberlanjutan</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      ESG
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" inline-block duration-300 hover:text-primary"
                    >
                      Biaya Kebajikan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Box of Happiness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block duration-300 hover:text-primary"
                    >
                      Unduh
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8 ">
            Copyright © 2017 PT. Sucorinvest Asset Management All rights
            reserved.
          </div>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
