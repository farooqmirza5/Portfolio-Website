import "./HeroimgStyles.css";

import React from 'react'

import image from "../assets/image.avif"
import { Link } from "react-router-dom";

const Heroimg = () => {
        return <div className="hero">
            <div className="mask">
            <img className="intro-img"
                src={image} alt=""IntroImg/>
            </div>
            <div className="content">
              <p>HI, I'M FAROOQ</p>
              <h1>Front-End Developer</h1> 
              <div>
                <Link to="/project" 
                className="btn">Projects
                </Link>
                <Link to="/contact" 
                className="btn btn-light">Contact
                </Link>
                </div> 
            </div>
        </div>
    }
 

export default Heroimg
