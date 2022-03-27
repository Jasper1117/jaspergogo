import React from 'react';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import FooterCon from '../components/Footer/FooterCon';
import Navbar from '../components/Navbar/Navbar';
import Skill from '../components/Skill/Skill';
import Work from '../components/WorkExperience/Work';
import NewAbout from '../components/NewAbout/newAbout';


const Home = () => {
  return <>
    <Navbar/>
    <NewAbout/>
    {/* <About/> */}
    <Education/>
    <Work/>
    <Skill/>
    <FooterCon/>
  </>;
};

export default Home;
