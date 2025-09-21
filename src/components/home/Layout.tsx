import React from "react";
import Hero from "../profile/Hero";
import Why from "../profile/Why";
// import Testimonials from "../profile/Testimonials";
import Footer from "../profile/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Hero />
      <Why />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Layout;
