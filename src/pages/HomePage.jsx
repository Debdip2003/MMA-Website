import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "..//components/About";
import LatestEvents from "..//components/LatestEvents";
import SponsorAffiliations from "../components/SponsorAffiliations";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Navbar />
      <Home />
      <About />
      <LatestEvents />
      <SponsorAffiliations />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
