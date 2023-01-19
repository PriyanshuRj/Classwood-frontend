import React from "react";
import Header from "./UI/Header";
import Hero from "./Hero";
import TimeLine from "./TimeLine";
import Features from "./Features";
import Offering from "./Offering";
import OfferingMajor from "./OfferingMajor";
import Footer from "./UI/Footer";
export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <TimeLine />
      <Features />
      <Offering />
      <OfferingMajor />
      <Footer />
    </div>
  );
}
