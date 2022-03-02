import React from 'react';
import styled from 'styled-components';

import education from "../Education/EducationInfo"
import EducationElements from './EducationElements';
import educationbg from "../../img/educationbg2.svg"

const Education = () => {
  return <EducationStyled id="educations">
        <div className="title">
              <h2>Education</h2>
          </div>
      <div className="education-con">
          {
              education.map((q)=>{
                  return <EducationElements key={q.id} {...q}/>
              })
          }
      </div>
      <div className="educationbg">
        <img src={educationbg} alt="" className='edu-bg'/>
      </div>
 
  </EducationStyled>;
};

const EducationStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0rem;
    position: relative;
    padding-bottom: 4rem;
    .title h2{
        border-bottom: 1px solid black;
    }
  
    .educationbg{
        display: flex;
        position: absolute;
        left: 0;
        top: 30%;
        border-bottom: 1px dotted black;
        padding-left: 30px;
        img.edu-bg{
            width: 50%;
        }
    }
    
`


export default Education;
