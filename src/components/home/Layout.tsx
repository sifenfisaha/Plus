import React from "react";
import Hero from "../profile/Hero";
import Why from "../profile/Why";
// import Testimonials from "../profile/Testimonials";
import Footer from "../profile/Footer";
import PopularTag from "../profile/PopularTag";

const Layout: React.FC = () => {
  return (
    <>
      <Hero />
      <Why />
      {/* <Testimonials /> */}
      <PopularTag />
      <Footer />
    </>
  );
};

export default Layout;
