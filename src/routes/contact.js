import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg2 from '../components/Heroimg2';

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Let's have a chat"/>
      <Footer/>
    </div>
  )
}

export default contact