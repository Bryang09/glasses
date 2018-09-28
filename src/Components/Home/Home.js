import React from "react";

import Hero from "./Hero/Hero";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Footer from "../Footer/Footer";

const Home = props => {
  return (
    <div className="Home">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Home;
