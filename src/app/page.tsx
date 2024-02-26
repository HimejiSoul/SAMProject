import Pmmd from "@/components/Llpk/AboutSectionOne";
import Llpk from "@/components/Llpk/AboutSectionTwo";
import InsightKami from "@/components/InsightKami";
import ScrollUp from "@/components/Common/ScrollUp";
import TentangKami from "@/components/TentangKami";
import Hero from "@/components/Hero";
import Unduh from "@/components/Unduh";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <TentangKami />
      {/* <Video /> */}
      <InsightKami />
      <Pmmd />
      <Llpk />
      <Unduh />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
