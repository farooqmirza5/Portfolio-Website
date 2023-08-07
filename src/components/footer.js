import "./footerStyles.css"
import { Link } from "react-router-dom"
import React from 'react'

import{ FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                  <p>Karachi, Pakistan</p>
                </div>
               </div>
               <div className="phone">
                <h4><FaPhone  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <Link to="tel:0334-037-1261">0334-037-1261</Link>
              </h4>
               </div>
               <div className="whatsapp">
                <h4><FaWhatsapp  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <a href="https://api.whatsapp.com/send?phone=03340371261" target='_blank' rel="noreferrer" >Send a message</a>
              </h4>
               </div>
               <div className="email">
                <h4><FaMailBulk  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <a href="mailto:farooqbaig12@gmail.com">farooqbaig12@gmail.com</a>
               </h4>
               </div>
            </div>

            <div className="right">
              <h4>
                About Me
              </h4>
              <p> Hi, I'm Farooq! I'm a software engineer and a front-end developer.</p>
              <div className="social">
              <FaFacebook 
               size={30} 
               style={{color: "#fff",
                marginRight: "1rem"}}/>
                <FaTwitter
               size={30} 
               style={{color: "#fff",
                marginRight: "1rem"}}/>
                <FaLinkedin 
               size={30} 
               style={{color: "#fff",
                marginRight: "1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default footer