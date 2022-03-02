import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import 'react-tabs/style/react-tabs.css';
import Skill1 from './Skill1';
import Skill2 from './Skill2';


const Skill = () => {
  return <SkillStyled id="skills">
      <h2>What I can handle</h2>
        <div className="tabs">
        <Tabs>
            <div className="tableTitle">
                <TabList>
                <Tab>Front End</Tab>
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
    height: 70vh;
    

    .react-tabs__tab-list{
        padding: 2rem 0rem;
        display: flex;
        justify-content: center;
        border-bottom:none;
    }
    .react-tabs__tab{
        padding: 6px 5rem;
       
    }
    .react-tabs__tab--selected{
        border-bottom: 1px solid #aaa;
        background: #fff;
        border-color: #aaa;
        border-top: none;
        border-left: none;
        color: white;
        background-color: #62616D;
        border-radius: 30px;
        box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.2);
        
    }

`;

export default Skill;
