import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section id="home" className="relative z-10 max-h-screen bg-white">
        <div className=" z-[-1]">
          <Image
            src="/images/hero/herobg.svg"
            alt="logo"
            width={150}
            height={30}
            className="w-screen"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
