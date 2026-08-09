import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Journey from "@/components/sections/journey";
import Footer from "@/components/layout/footer";
import Expertise from "@/components/sections/expertise";
import Research from "@/components/sections/research";
import Values from "@/components/sections/values";
import Contact from "@/components/sections/contact";
import WhatToExpect from "@/components/sections/what-to-expect";
import FAQ from "@/components/sections/faq";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Journey />
      <WhatToExpect />
      <Research />
      <Values />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}