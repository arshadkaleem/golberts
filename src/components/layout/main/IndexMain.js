"use client";
import About from "@/components/sections/about/About";

import Contact1 from "@/components/sections/contacts/Contact1";
import Hero1 from "@/components/sections/hero-banners/Hero1";

import OfferedServices from "@/components/sections/services/OfferedServices";

import Testimonials from "@/components/sections/testimonials/Testimonials";

// import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";

const IndexMain = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero1 />
      <OfferedServices />

      <About />

      <Testimonials />
      {isOnepage ? <Contact1 /> : ""}
    </main>
  );
};

export default IndexMain;
