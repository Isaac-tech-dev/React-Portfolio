import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg2 from '../components/Heroimg2';
import Aboutcontent from '../components/aboutcontent';

const about = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="UI UX Designer || Android Developer || FrontEnd Developer"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default about;