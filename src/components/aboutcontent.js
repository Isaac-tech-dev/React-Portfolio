import "./aboutcontentStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/laptop.jpg";
import React2 from "../assets/into-bg.jpg";

const aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a UI UX Designer, Android Developer, FrontEnd Engineer</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutcontent