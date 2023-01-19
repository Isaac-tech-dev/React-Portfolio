import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg2 from '../components/Heroimg2';
import PricingCard from "../components/Pricingcard";

const project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recents works." />
      <PricingCard/>
      <Footer/>
    </div>
  );
};

export default project