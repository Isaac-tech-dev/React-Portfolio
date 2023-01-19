import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg"
import Footer from "../components/footer"
import Work from "../components/Work";
import About from "../components/aboutcontent";
import Form from '../components/form';

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Heroimg/>
            <Work/>
            <About/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Home