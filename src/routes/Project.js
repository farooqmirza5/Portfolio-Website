import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';
import PriciningCard from '../components/PriciningCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <PriciningCard/>
      <Footer/>
    </div>
  )
}

export default Project;