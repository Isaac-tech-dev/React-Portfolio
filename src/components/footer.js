import "./footerStyle.css";

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"20px"}}/>
                    <div>
                        <p>Plot 10, Gateway Sparklight Estate, Magboro, Lagos-Ibadan Express Way.</p>
                        <p>Nigeria</p>
                    </div>
                </div>
                <div className="phone">
                        <h4><FaPhone size={20} style={{color:"#fff", marginRight:"20px"}}/>
                        +234 (0) 90-3782-6339</h4>
                    </div>
                <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"20px"}}/>
                        ayeniisaac1on1@gmail.com</h4>
                </div>    
            </div>

            <div className="footer-right">
                <h4>About Me</h4>
                <p>I'm a young passionate developer helping to bring to limelight the imaginations of my customer.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"15px"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"15px"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"15px"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight:"15px"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer