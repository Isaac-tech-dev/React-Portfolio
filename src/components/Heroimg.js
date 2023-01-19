import "./HeroimgStyle.css";
import React from 'react'

import IntroImg from "../assets/code.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Imagename"/>
        </div>
        <div className="content">
            <p>HI, I'M A UI/UX DESIGNER || MOBILE DEVELOPER || SOFTWARE ENGINEER</p>
            <h1>FULL STACK ENGINEER</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg