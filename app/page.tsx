import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Footer from "@/components/layout/footer";
import Expertise from "@/components/sections/expertise";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Footer />
    </>
  );
}