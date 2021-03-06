import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import 'react-tabs/style/react-tabs.css';
import Skill1 from './Skill1';
import Skill2 from './Skill2';
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {
    Aos.init({duration:1000});
  return <SkillStyled id="skills">
      <div className="skillTitle" data-aos="fade-up">
      <h2>My Skills</h2>
      <p>- What I know -</p>
      </div>
        <div className="tabs">
        <Tabs data-aos="fade-up">
            <div className="tableTitle">
                <TabList>
                <Tab>Frontend</Tab>
                <Tab>Video Editor</Tab>
                </TabList>
            </div>

            <TabPanel>
            <Skill1/>
            </TabPanel>
            <TabPanel>
            <Skill2/>
            </TabPanel>
         </Tabs>

        </div>
  </SkillStyled>;
};

const SkillStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    padding-top: 20rem;
    padding-bottom: 3rem;

    .skillTitle{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .react-tabs__tab-list{
        padding: 2rem 0rem;
        display: flex;
        justify-content: center;
        border-bottom:none;
    }
    .react-tabs__tab{
        padding: 6px 5rem;
        margin: 1rem 1.5em 0rem 1.5rem;
        border-radius: 30px;
        border: 1px solid #b8bec0;

       
    }
    .react-tabs__tab--selected{
        border: 1px solid #eec7c7;
        background: #fff;
        border: none;
        color: #3F3D56;
        background-color: #eec7c7;
        border-radius: 30px;
        box-shadow: 0px 0px 10px 2px rgba(90, 90, 90, 0.2);
        
    }
    @media screen and (max-width:1340px) {
        padding-top: 15rem;
        padding-bottom: 3rem;
    }
    @media screen and (max-width:1100px) {
        padding-top: 10rem;
        padding-bottom: 3rem;
    }
    @media screen and (max-width:780px) {
        padding-top: 5rem;
    }

    @media screen and (max-width:600px) {
  .react-tabs__tab-list {
    display: flex;
    flex-direction: column;
  }
}

    /* @media screen and (max-width:800px){
        height: 100vh;
    }
    @media screen and (max-width:750px) {
        .react-tabs__tab-panel--selected{
            display: flex;
            justify-content: center;
            align-items: center;
             width: 100%;

    }
} */

`;

export default Skill;
